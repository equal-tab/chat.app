const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
let nextUsername = 1;

app.use(express.static('public'));

io.on('connection', (socket) => {
  const username = `User${nextUsername++}`;
  socket.data.username = username;
  socket.emit('username-assigned', username);
  console.log('Ein Nutzer ist verbunden:', username);

  socket.on('chat-message', msg => {
    io.emit('chat-message', msg);
    console.log(msg);
  });

  socket.on('disconnect', () => {
    console.log('Nutzer getrennt:', username);
  });
});

console.log("Link to the server: http://localhost:3000/")
http.listen(3000, () => console.log('Server läuft auf Port 3000'));