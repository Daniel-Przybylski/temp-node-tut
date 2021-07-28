const {readFileSync, writeFileSync} = require('fs')
console.log('start');
//These read files from txt files
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//This write txt files.
//Parameter 1: File name/path
//Parameter 2: what is to be written
//Parameter 3: Flag whether you want to upend the input (Not overwrite and add-on)
writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`,{flag: 'a'})

console.log('done with this task')
console.log('starting the next one')