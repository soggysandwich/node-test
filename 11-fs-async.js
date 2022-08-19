const {readFile,writeFile} = require ('fs')
const path = require('path')

readFile(path.join('\content','first.txt'),'utf8',(err,result) => {
    if (err) {
        console.log(err);return;
    }
    const first = result ;
    readFile(path.join('\content','second.txt'),'utf8',(err,result) => {
        if (err) {
            console.log(err);return;
        }
        const second = result ;
        writeFile(path.join('\content','result-async.txt'),
        `Here is the result : ${first}, ${second}`,(err,result) => {
            if (err) {
                console.log(err);return;
            }
            console.log(result)
         })

    })
})

