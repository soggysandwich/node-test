const {readFile,writeFile} = require('fs').promises;
const path = require('path');

// this is if you don't use file module wit promises 
// const util = require('util');
// const readfilePromise = util.promisify(readFile)
// const writefilePromise = util.promisify(writeFile)



const start = async() => {
    
    try{        
        const first = await readFile(path.join('\content', 'first.txt'),'utf8');
        const second = await readFile(path.join('\content', 'second.txt'),'utf8');
        await writeFile(path.join('\content', 'result-mind-grenade.txt'),`This is great ${first} and ${second}`,{flag:'a'});
        console.log(first,second)
    }
    
    catch (error) {
        console.log(error)
    }
    
    
}

start()



// const getText=(path) => {
//     return new Promise( (resolve,reject) => {

//         readFile(path,'utf8',(err,data) => {
//             if (err) {
//                 reject(err);
//             }else {
//                 resolve(data);
//             }
        
//         })


//     })
// }

/* getText(path.join('\content','first.txt'))
.then(result => console.log(result))
.catch(error => console.log(error)) */
