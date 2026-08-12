const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Ein Nutzer ist verbunden:', socket.id);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // an alle senden
  });

  socket.on('disconnect', () => {
    console.log('Nutzer getrennt:', socket.id);
  });
});

http.listen(3000, () => console.log('Server läuft auf Port 3000'));