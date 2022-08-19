const {readFileSync,writeFileSync} = require ('fs')
const path = require('path')

const first = readFileSync(path.join('\content','first.txt'),'utf8')
const second = readFileSync(path.join('\content','second.txt'),'utf8')
console.log(first,second)

writeFileSync(
    path.join('\content','result-sync.txt'),
    `Here is the result : ${first}, ${second}`,
    {flag:'a'}
)