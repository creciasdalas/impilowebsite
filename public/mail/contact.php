<?php
header('Content-Type: application/json');

require __DIR__ . '/PHPMailer.php';
require __DIR__ . '/SMTP.php';
require __DIR__ . '/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function respond(bool $success, string $message, int $status = 200): void
{
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Method not allowed.', 405);
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    respond(false, 'Server is not configured to send email.', 500);
}
$config = require $configPath;

$raw = file_get_contents('php://input');
$data = json_decode($raw, true) ?? $_POST;

// Honeypot: a hidden field real users never fill in
if (!empty($data['website'])) {
    respond(true, 'Thanks for reaching out.'); // silently drop bots, pretend success
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));
$source = trim((string) ($data['source'] ?? 'Contact form'));

if ($name === '' || $email === '') {
    respond(false, 'Please fill in your name and email.', 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address.', 422);
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = $config['smtp_secure'] === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $config['smtp_port'];

    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['to_email'], $config['to_name']);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(false);
    $mail->Subject = "New {$source} submission from {$name}";
    $mail->Body = "Source: {$source}\nName: {$name}\nEmail: {$email}\nPhone: " . ($phone !== '' ? $phone : '-') .
        "\n\nMessage:\n" . ($message !== '' ? $message : '(no message provided)');

    $mail->send();
    respond(true, "Thanks {$name}, your message has been sent. We'll be in touch soon.");
} catch (Exception $e) {
    respond(false, 'Sorry, something went wrong sending your message. Please try again later.', 500);
}
