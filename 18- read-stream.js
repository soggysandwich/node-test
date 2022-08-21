const {createReadStream} = require('fs');

const streamRead= createReadStream('./content/big.txt',{
    highWaterMark:90000,
    encoding: 'utf8'
});

//default 64 kb
//last buffer -remainder
//highwaterMark - control size e.g 9000
//encoding - utf8

streamRead.on('data',(result) => {
    console.log(result)
})

//error event
streamRead.on('error',(error) => {
    console.log(error)
})