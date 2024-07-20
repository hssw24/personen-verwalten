Dies funktioniert nur lokal:

1. Backend starten (siehe Projekt Backend: \api\index.js) mit "node index.js".
2. Frontend starten mit "npm start".
3. Daten können im Browser hinzugefügt, editiert und gelöscht werden. Werden in persons.json im Backend-/Serverordner gespeichert.

Der Versuch, das Ganze online zu stellen, scheitert bisher daran, dass auf Vercel zwar gelesen, aber nicht geschrieben werden kann.

Habe jetzt Lösung mit externer Speicherung mit "Firebase Firestore" in Arbeit, scheitert bisher aber daran, dass ich Firebase nicht installieren kann. 

Ebenso bricht "npx create-react-app ..." mit Fehlermeldung ab. Kopien von funktionierenden Projekten funktionieren ebenfalls nicht, weil u. a. die remote-Ordner des alten Projekts für GitHub beibehalten werden ... etc.
