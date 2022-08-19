//npm --version

//local dependency only in this project
//npm i <package name>

//global dependency all projects 
//npm install -g <packageName>
//needs admin 

//package.json - manifes file 
//manual do it yourself make file 
// npm init 
//npm init -y (all default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)

