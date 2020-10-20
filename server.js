const express = require('express');
const http = require('http')
const socketIo = require('socket.io')
const port = process.env.PORT || 3001
const index = require('./routes/routes')
const app = express()
app.use(index)
const server = http.createServer(app)
const io = socketIo(server)

let interval

io.on('connection', (socket) => {
  console.log('someone arrived!')
  if (interval) {
    clearInterval(interval)
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000)
  socket.on('disconnect', () => {
    console.log('someone left!')
    clearInterval(interval)
  })
})

const getApiAndEmit = socket => {
  const response = new Date()
  socket.emit('FromAPI', response)
}

server.listen(port, () => console.log(`listening on port ${port}`))