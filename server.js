const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketIO = require('socket.io')

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(port, () => {
  console.log('listening on *:' + port);
});