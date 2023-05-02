/*
// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fsreadfilepath-options-callback
const fs = require("fs");
// fs.readFile("./nodedoc/starter.txt", "utf8",(err,data)=>{
// instead of hard coding file name we can also use path module
const path = require("path");
fs.readFile(path.join(__dirname, "nodedoc", "starter.txt"), "utf8", (err, data) => {
    if (err) throw err;
    // give data in buffer format tostring  method is used to view data
    // or instead of tostring we can use utf8 parameter before callback function
    console.log(data);
})

console.log("testing async functionality")

// exit on uncaught errors
process.on("uncaughtException", err => {
    console.error(`there was an uncaught error: ${err}`);
    process.exit(1);
})

// creating new file and  writing data
fs.writeFile(path.join(__dirname, "nodedoc", "reply.txt"), "Nice to work in node js", (err) => {
    if (err) throw err;
    console.log("write complete");
})

// append file updating a file or create one if doesnot exit
fs.appendFile(path.join(__dirname, "nodedoc", "append.txt"), " using the append file funcnality Nice to work in node js", (err) => {
    if (err) throw err;
    console.log("Append  complete");
})

// it is better to use append function inside te callback of the write function
// starting callback hell 
fs.writeFile(path.join(__dirname, "nodedoc", "createandappend.txt"), "Nice to work in node js", (err) => {
    if (err) throw err;
    console.log("write complete");

    fs.appendFile(path.join(__dirname, "nodedoc", "createandappend.txt"), "\n\n using the append file funcnality with the write file Nice to work in node js", (err) => {
        if (err) throw err;
        console.log("Append  complete");

        fs.rename(path.join(__dirname, "nodedoc", "createandappend.txt"), path.join(__dirname, "nodedoc", "rename.txt"), (err) => {
            if (err) throw err;
            console.log("rename complete");
        })
    })
}) */

// method to avoid the callback hell in node js
const fsPromises = require("fs").promises;
const { Console } = require("console");
const path = require("path");


const fileops= async ()=>{
    try {
          const data = await fsPromises.readFile(path.join(__dirname,"nodedoc","starter.txt"),"utf8")
          console.log(data)
          // unlink file delete the file
          await fsPromises.unlink(path.join(__dirname,"nodedoc","lorem.txt"),data)

          await fsPromises.writeFile(path.join(__dirname,"nodedoc","promiseWrite.txt"),data)
          await fsPromises.appendFile(path.join(__dirname,"nodedoc","promiseWrite.txt"),"\n working at back end")
          await fsPromises.rename(path.join(__dirname,"nodedoc","promiseWrite.txt"),path.join(__dirname,"nodedoc","promiseComplete.txt"))

          const newData = await fsPromises.readFile(path.join(__dirname,"nodedoc","promiseComplete.txt"),"utf8")
          console.log(newData)
    }
    catch(err){
        console.error(err);
    }
}
fileops();