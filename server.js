const express = require('express')
const app = express()
const http = require('http')
const { default: mongoose } = require('mongoose')
const path = require('path')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
const fishSchema = new mongoose.Schema({
  name: String,
  fins: Number,
})
const guppy = mongoose.model('Guppy', fishSchema)
app.get('/fish', (req, res) => {
  guppy({ name: 'gup', fins: 4 }).save()
  res.send(400)
})
// server.use(express.static(path.join(__dirname, 'public')))

io.on('connection', (socket) => {
  console.log('user has connected')
  socket.on('disconnect', () => {
    console.log('a user has disconnected')
  })
  socket.on('chat message', (msg) => {
    if (msg === 'Groot') socket.broadcast.emit('Yolo', 'wtf, groot?')
    io.emit('Yolo', msg)
    console.log('message: ' + msg)
  })
})

module.exports = { server }
