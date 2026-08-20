const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connect', (socket) => {
  io.use((socket, next) => {
  const username = socket.handshake.auth.NameInput;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  next();
});
  console.log('Ein Nutzer ist verbunden:', socket.id);

  socket.on('chat-message', msg => {
    io.emit('chat-message', msg); 
    console.log(msg);
  });

  socket.on('disconnect', () => {
    console.log('Nutzer getrennt:', socket.id);
  });
  
});

console.log("Link to the server: http://localhost:3000/")
http.listen(3000, () => console.log('Server läuft auf Port 3000'));