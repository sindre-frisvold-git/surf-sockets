import { io } from 'socket.io-client'

const socket = io({
  path: '/',
})

var messages = document.getElementById('messages')
var form = document.getElementById('form')
var input = document.getElementById('input')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  if (input.value) {
    socket.emit('chat message', input.value)
    input.value = ''
  }
})

socket.on('Yolo', function (msg) {
  var item = document.createElement('li')
  item.textContent = msg
  messages.appendChild(item)
  window.scrollTo(0, document.body.scrollHeight)
})
