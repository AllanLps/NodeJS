const { EventEmitter} = require('events')
const ev = new EventEmitter()

ev.once('saySomething', (message) => {
    console.log("eu ouvi vc: ", message)
})

ev.emit('saySomething', "Allan")
ev.emit('saySomething', "Cadê o meu dinheiro?")
ev.emit('saySomething', "Ronaldo")
