const os = require('os');

//info about user
const user = os.userInfo();
console.log(user)

//method uptime
console.log(`system uptime is ${os.uptime} seconds`)

const currentOs= {

    name:os.type(),
    release:os.release(),
    platform:os.platform(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),

}

console.log(currentOs)