const express = require('express')
const app = express()

const http = require('http').Server(app)
const io = require('socket.io')(http)

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('home/home')
})

io.on('connection', (socket) => {
    console.log('tem gente')

    socket.on('chat_message', (userMessage) => {
        console.log(userMessage)
        io.emit('chat_message', userMessage)
    })
})

http.listen(3001, () => { console.log('fala, fio') })