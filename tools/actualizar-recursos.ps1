$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$groupsConfig = @(
  @{
    id = "pdf-profe"
    title = "PDF-Profe"
    icon = "bi-file-earmark-pdf"
    folder = "documentos/PDF-Profe"
  },
  @{
    id = "resumenes"
    title = "Resumenes"
    icon = "bi-journal-bookmark"
    folder = "documentos/Resumenes"
  },
  @{
    id = "infografias"
    title = "Infografias"
    icon = "bi-image"
    folder = "infografias"
  },
  @{
    id = "videos"
    title = "Videos"
    icon = "bi-play-btn"
    folder = "videos"
  }
)

function Get-ResourceType {
  param([string] $Extension)

  switch ($Extension.ToLowerInvariant()) {
    ".pdf" { "pdf"; break }
    ".docx" { "docx"; break }
    ".png" { "image"; break }
    ".jpg" { "image"; break }
    ".jpeg" { "image"; break }
    ".webp" { "image"; break }
    ".gif" { "image"; break }
    ".svg" { "image"; break }
    ".mp4" { "video"; break }
    ".webm" { "video"; break }
    ".mov" { "video"; break }
    ".mkv" { "video"; break }
    default { "file" }
  }
}

$groups = foreach ($group in $groupsConfig) {
  $folderPath = Join-Path $root ($group.folder -replace "/", [IO.Path]::DirectorySeparatorChar)
  $items = @()

  if (Test-Path -LiteralPath $folderPath) {
    $items = Get-ChildItem -LiteralPath $folderPath -File |
      Where-Object { $_.Name -notin @("README.md", ".gitkeep") } |
      Sort-Object Name |
      ForEach-Object {
        [ordered]@{
          title = $_.Name
          path = (($group.folder.TrimEnd("/") + "/" + $_.Name) -replace "\\", "/")
          type = Get-ResourceType $_.Extension
        }
      }
  }

  [ordered]@{
    id = $group.id
    title = $group.title
    icon = $group.icon
    items = @($items)
  }
}

$manifest = [ordered]@{
  groups = @($groups)
}

$json = $manifest | ConvertTo-Json -Depth 8
$output = "window.MDP_RESOURCES = " + $json + ";" + [Environment]::NewLine
$target = Join-Path $root "resources.js"

[IO.File]::WriteAllText($target, $output, [Text.UTF8Encoding]::new($false))

$total = ($groups | ForEach-Object { $_.items.Count } | Measure-Object -Sum).Sum
Write-Host "resources.js actualizado correctamente."
Write-Host "Grupos: $($groups.Count)"
Write-Host "Recursos: $total"
