$port = 8080
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving $root at http://localhost:$port/"

$mimeMap = @{
    '.html' = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.jsx'  = 'application/javascript; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.svg'  = 'image/svg+xml'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.ico'  = 'image/x-icon'
}

while ($listener.IsListening) {
    try {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $res = $ctx.Response
        try {
            $path = $req.Url.LocalPath
            if ($path -eq '/') { $path = '/index.html' }
            $file = Join-Path $root ($path.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar))
            if (Test-Path $file -PathType Leaf) {
                $ext  = [System.IO.Path]::GetExtension($file).ToLower()
                $mime = if ($mimeMap.ContainsKey($ext)) { $mimeMap[$ext] } else { 'application/octet-stream' }
                $data = [System.IO.File]::ReadAllBytes($file)
                $res.StatusCode      = 200
                $res.ContentType     = $mime
                $res.SendChunked     = $true
                $res.OutputStream.Write($data, 0, $data.Length)
            } else {
                $res.StatusCode = 404
                $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
                $res.OutputStream.Write($body, 0, $body.Length)
            }
        } catch {
            Write-Host "Request error: $_"
        } finally {
            try { $res.OutputStream.Close() } catch {}
        }
    } catch {
        Write-Host "Listener error: $_"
    }
}
