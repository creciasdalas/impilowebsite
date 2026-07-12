<#
  Targeted re-upload for specific files that failed size verification.
  Reads the same .env.deploy.local as deploy.ps1.
#>

$ErrorActionPreference = "Stop"

$envFile = Join-Path $PSScriptRoot ".env.deploy.local"
$config = @{}
Get-Content $envFile | ForEach-Object {
  if ($_ -match '^\s*#' -or $_ -match '^\s*$') { return }
  $parts = $_ -split '=', 2
  if ($parts.Count -eq 2) { $config[$parts[0].Trim()] = $parts[1].Trim() }
}

$distPath = Join-Path $PSScriptRoot "dist"
$remoteDir = $config['FTP_REMOTE_DIR'].TrimEnd('/')
$remoteBase = "ftp://$($config['FTP_SERVER'])$remoteDir"
$userPass = "$($config['FTP_USERNAME']):$($config['FTP_PASSWORD'])"

$targets = @(
  "favicon.svg",
  "assets/image-1-MI2kLjcv.webp",
  "assets/index-DUJfi4Uw.js"
)

function Get-RemoteSize($url) {
  $head = curl.exe -s --user $userPass -I "$url" 2>$null
  if ($LASTEXITCODE -ne 0) { return -1 }
  $match = $head | Select-String -Pattern 'Content-Length:\s*(\d+)'
  if ($match) { return [int64]$match.Matches[0].Groups[1].Value }
  return -1
}

$stillFailed = @()

foreach ($relativePath in $targets) {
  $localFile = Join-Path $distPath $relativePath
  $localSize = (Get-Item $localFile -Force).Length
  $remoteUrl = "$remoteBase/$relativePath"
  Write-Host "Fixing $relativePath ($localSize bytes)"

  $ok = $false
  for ($attempt = 1; $attempt -le 6; $attempt++) {
    curl.exe -s -S --user $userPass -T "$localFile" "$remoteUrl" --ftp-create-dirs
    $curlExit = $LASTEXITCODE
    $remoteSize = Get-RemoteSize $remoteUrl
    if ($remoteSize -eq $localSize) {
      $ok = $true
      Write-Host "  OK on attempt ${attempt}" -ForegroundColor Green
      break
    }
    Write-Host "  attempt ${attempt}: curl exit=$curlExit, remote size=$remoteSize (expected $localSize)" -ForegroundColor Yellow
  }

  if (-not $ok) {
    $stillFailed += $relativePath
  }
}

if ($stillFailed.Count -gt 0) {
  Write-Host ""
  Write-Host "Still broken after 6 attempts each:" -ForegroundColor Red
  $stillFailed | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
  exit 1
}

Write-Host ""
Write-Host "All targeted files fixed." -ForegroundColor Green
