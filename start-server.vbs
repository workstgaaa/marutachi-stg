Set WShell = CreateObject("WScript.Shell")
WShell.Run "powershell -WindowStyle Hidden -NonInteractive -File """ & CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName) & "\server.ps1""", 0, False
