const os = require('os')
const path = require('path')

const {  copyFile, constants } = require('fs')

let totalMemory = os.totalmem()
let freeMemory = os.freemem()
let hostName = os.homedir()

// console.log(totalMemory,freeMemory,hostName);

copyFile('../installCommend.txt', '../learning text.txt', callBack)
function callBack(err) {
  try { err }
  catch (err) {
    console.log(`error ${err}`);

  }
}

const path2 = path.parse(__filename)

console.log(path2);
