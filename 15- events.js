const EventEmitter = require ('events');
const customEmitter = new EventEmitter();

//listen first and order matters and then emit it 

customEmitter.on('response', (name,age) => {
    console.log(`hello ${name} you are ${age} years old`)

})

customEmitter.on('response', () => {
    console.log(`Some more data recieved `)

})


customEmitter.emit('response','pete',100)