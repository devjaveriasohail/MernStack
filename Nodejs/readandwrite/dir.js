const fs = require("fs");
//if dir doesnot exit then create it
if (!fs.existsSync("./new")){
fs.mkdir("./new",(err)=>{
    if (err) throw err;
    console.log("directory created")
})}
//if dir does exit then remove it it
if (fs.existsSync("./new")){
    fs.rmdir("./new",(err)=>{
        if (err) throw err;
        console.log("directory removed")
    })}