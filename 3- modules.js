//modules 

const names = require ('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-Exports')
console.log(data)
console.log(names);

//require ('./some module )
// will run what ever is in the file including console.log and any invoked 
// funcions 

sayHi(names.john)
sayHi(names.peter)