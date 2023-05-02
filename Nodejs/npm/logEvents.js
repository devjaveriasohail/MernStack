//console.log("testing")
// terminal commands 
// 1. npm install or npm i
// 2. npm i nodemon -g nodemon is a tool that helps developers automatically restart their Node.js application whenever changes are made to the source code -g mean globally
// 3. npm i date-fns (date function)
// 4. npm init (to initallize npm the package.json)
// 5. npm i nodemon --save-dev or npm i nodemon -D add nodemon as dev dependencies in package.json
// 6.npm start or npm run dev
// 7.npm i uuid (allow us to operate ids which is different for each entry)
// 8.npm uninstall or npm un or npm rm to remove any module
 const {format} = require("date-fns")
 const {v4:uuid} = require ("uuid")
 // can also import as const uuid = require("uuid")
 // console.log (uuid.v4())
//  console.log(format(new Date(),"yyyyMMdd\tHH:mm:ss"))
//  console.log(uuid())

const fs = require("fs")
const fsPromises = require("fs").promises
const path= require("path")

const logEvents=async (message)=>{
    const dateTime=`${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`
    const  logItem=`${dateTime}\t${uuid()}\t${message}\n`
    console.log (logItem)
    try{
        if (!fs.existsSync(path.join(__dirname,"logs"))){
            await fsPromises.mkdir(path.join(__dirname,"logs"))
        }
        await fsPromises.appendFile(path.join(__dirname,"logs","eventlog.txt"),logItem)

    }catch (err){
        console.log(err)
    }
}
module.exports= logEvents;
// 