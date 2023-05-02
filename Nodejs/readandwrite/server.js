// 1) Node runs on server -not ina browser(backend)
// 2) the console is the terminal window
//console.log ("welcome to backend,Javeria")
// to run this console statement in terminal window write node and file name

// 3) global object instead of the window object
//console.log (global);
/*
// 4)has common core modules. common JS modules insted of Es6 modules
// 5) missing some JS APIs like fetch
const os = require('os');
// give operating system info
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
// give directory (dir) and file name
console.log (__dirname)
console.log(__filename)

// using path
const path = require("path")
console.log("using path",path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))// display all value root dir base ext 
*/

// // importing module
// const math =require("./math")
// console.log(math.add(2,4))
//or in destructure way


const {add,sub,multiply,divide}= require("./math")
console.log(add(2,4))
console.log(sub(2,4))
console.log(multiply(2,4))
console.log(divide(2,4))