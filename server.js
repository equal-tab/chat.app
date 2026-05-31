const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// HTML-Datei ausliefern
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Wenn ein Nutzer sich verbindet
io.on('connection', (socket) => {
  console.log('Jemand hat sich verbunden');

  socket.on('disconnect', () => {
    console.log('Jemand hat die Verbindung getrennt');
  });
});

server.listen(3000, () => {
  console.log('Server läuft auf http://localhost:3000');
});