// server.js
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
// Middleware zur Verarbeitung von URL-kodierten Daten
app.use(express.urlencoded({ extended: true }));

// Get-Endpunkt, der das Formular anzeigt
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route, die die Formulardaten entgegennimmt und in eine Datei schreibt
app.post('/register', (req, res) => {
    let userData = []    
    userData.push(req.body.name)
    userData.push(req.body.email)
    userData.push(req.body.password)
       
   

   fs.appendFile(__dirname + "/users.txt", userData.join("\n"), (err) => {
    if (err) {
        console.error('Fehler beim Schreiben der Datei', err);
        return res.status(500).send('Fehler beim Schreiben der Datei');
    }
    res.send('Registrierung erfolgreich!');
});

    // Antworte mit einer Bestätigung
    res.send('Registrierung erfolgreich!');
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
