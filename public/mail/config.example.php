<?php
// Copy this file to config.php and fill in your real SMTP details.
// config.php is gitignored (matches *.local pattern via config.local.php
// naming, or add it to .gitignore explicitly) — never commit real credentials.

return [
    'smtp_host' => 'mail.impilohealthcareservices.co.za',
    'smtp_port' => 587,
    'smtp_secure' => 'tls', // 'tls' or 'ssl'
    'smtp_username' => 'contact@impilohealthcareservices.co.za',
    'smtp_password' => 'your-email-account-password',

    // The address the email appears to come from (usually same as smtp_username)
    'from_email' => 'contact@impilohealthcareservices.co.za',
    'from_name' => 'Impilo Website',

    // Where contact form submissions get delivered
    'to_email' => 'info@impilohealth.co.za',
    'to_name' => 'Impilo Healthcare Services',
];
