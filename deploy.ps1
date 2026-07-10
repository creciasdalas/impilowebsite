<#
  Builds the site and uploads dist/ to cPanel over FTP.

  Setup (one-time):
    Copy .env.deploy.local.example to .env.deploy.local and fill in
    your real FTP host/username/password. That file is gitignored
    (matches *.local) so credentials never get committed.

  Usage:
    powershell -ExecutionPolicy Bypass -File deploy.ps1
#>

$ErrorActionPreference = "Stop"

$envFile = Join-Path $PSScriptRoot ".env.deploy.local"
if (-not (Test-Path $envFile)) {
  Write-Error "Missing $envFile. Copy .env.deploy.local.example to .env.deploy.local and fill in your FTP credentials."
  exit 1
}

$config = @{}
Get-Content $envFile | ForEach-Object {
  if ($_ -match '^\s*#' -or $_ -match '^\s*$') { return }
  $parts = $_ -split '=', 2
  if ($parts.Count -eq 2) {
    $config[$parts[0].Trim()] = $parts[1].Trim()
  }
}

foreach ($key in @('FTP_SERVER', 'FTP_USERNAME', 'FTP_PASSWORD', 'FTP_REMOTE_DIR')) {
  if (-not $config.ContainsKey($key) -or [string]::IsNullOrWhiteSpace($config[$key])) {
    Write-Error "Missing $key in $envFile"
    exit 1
  }
}

Write-Host "Building..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
  Write-Error "Build failed."
  exit 1
}

$distPath = Join-Path $PSScriptRoot "dist"
$remoteDir = $config['FTP_REMOTE_DIR'].TrimEnd('/')
$remoteBase = "ftp://$($config['FTP_SERVER'])$remoteDir"
$userPass = "$($config['FTP_USERNAME']):$($config['FTP_PASSWORD'])"

$files = Get-ChildItem -Path $distPath -Recurse -File -Force
$total = $files.Count
$i = 0
$failed = @()

function Get-RemoteSize($url) {
  $head = curl.exe -s --user $userPass -I "$url" 2>$null
  if ($LASTEXITCODE -ne 0) { return -1 }
  $match = $head | Select-String -Pattern 'Content-Length:\s*(\d+)'
  if ($match) { return [int64]$match.Matches[0].Groups[1].Value }
  return -1
}

foreach ($file in $files) {
  $i++
  $relativePath = $file.FullName.Substring($distPath.Length + 1) -replace '\\', '/'
  $remoteUrl = "$remoteBase/$relativePath"
  $localSize = $file.Length
  Write-Host "[$i/$total] Uploading $relativePath ($localSize bytes)"

  $ok = $false
  for ($attempt = 1; $attempt -le 3; $attempt++) {
    curl.exe -s -S --user $userPass -T "$($file.FullName)" "$remoteUrl" --ftp-create-dirs
    $curlExit = $LASTEXITCODE

    # Always verify by actual byte size, regardless of curl's reported exit
    # code — a slow final ack can make curl report failure on a file that
    # fully transferred, and a dropped connection can leave a 0-byte file
    # on the server even though curl (or a prior attempt) reported success.
    $remoteSize = Get-RemoteSize $remoteUrl
    if ($remoteSize -eq $localSize) {
      $ok = $true
      break
    }

    Write-Host "  attempt ${attempt}: curl exit=$curlExit, remote size=$remoteSize (expected $localSize) - retrying" -ForegroundColor Yellow
  }

  if (-not $ok) {
    $failed += $relativePath
  }
}

if ($failed.Count -gt 0) {
  Write-Host ""
  Write-Host "Failed to upload $($failed.Count) file(s):" -ForegroundColor Red
  $failed | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
  exit 1
}

Write-Host ""
Write-Host "Deploy complete: $total file(s) uploaded to $remoteBase" -ForegroundColor Green
