const http = require("http");
const path = require("path");
const fs = require("fs")
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents");
const EventEmitter = require("events");
class Emitter extends EventEmitter { };
//intialize object
const myEmitter = new Emitter();
myEmitter.on("log", (msg,fileName) => logEvents(msg,fileName));
//port to host
const PORT = process.env.PORT || 3500;
// function to server the file
const serveFile= async(filepath,contentType,response)=>{
    try{
          const rawData = await fsPromises.readFile(
            filepath,
            !contentType.includes("image")?"utf8":"")
          const data=contentType=== "application/json"
          ?JSON.parse(rawData):rawData;
          response.writeHead(
            filepath.includes("404.html")? 404 :200,
            {"Content-Type":contentType})
          response.end(
            contentType === "application/json"? JSON.stringify(data):data
          );
    }catch(err){
        console.log(err);
        myEmitter.emit("log", `${err.name}\t${err.message}`,"errLog.txt")
        response.statusCode=500;
        response.end();
    }
}
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    myEmitter.emit("log", `${req.url}\t${req.method}`,"reqLog.txt")
    // specfing the path
    const extension = path.extname(req.url);
    let contentType;
    switch (extension) {
        case ".css":
            contentType = "text/css";
            break;
        case ".js":
            contentType = "text/javascript";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".jpg":
            contentType = "image/jpeg";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".txt":
            contentType = "text/plain";
            break;
            default:
                contentType="text/html";
    }
  let filepath= contentType==="text/html"&& req.url ==="/"
  ? path.join(__dirname,"views","index.html")
  :contentType==="text/html"&& req.url.slice(-1) ==="/"
  ?path.join(__dirname,"views",req.url,"index.html")
  :contentType ==="text/html"
  ?path.join(__dirname,"views",req.url)
  :path.join(__dirname,req.url);
// makes the .html extension not required in the browser
  if(!extension && req.url.slice(-1)!=="/") filepath +=".html"

const fileExists=fs.existsSync(filepath);
if(fileExists){
    // serve the file
    serveFile(filepath,contentType,res)
}else {
    //404  301 redirect
    switch(path.parse(filepath).base){
        case "old-page.html":
            res.writeHead(301,{"Location":"/new-page.html"})
            res.end()
            break;
            case "www-page.html":
                res.writeHead(301,{"Location":"/"})
            res.end()
            break;
            default:
                // server a 404 response
                serveFile(path.join(__dirname,"views","404.html"),"text",res)
    }
    //console.log(path.parse(filepath))
}
    /* 
    // one way using switch statemrnt but not dynamic and take alot of space
      switch (req.url) {
        case "/":
            res.statusCode=200;
            const  filepath = path.join(__dirname,"views","index.html");
            fs.readFile(filepath,"utf8",(err,data)=>{
                if (err){
                    console.error(err)
                    res.statusCode =500;
                    res.end("Internal server error")
                }else{
                    res.end(data);
                }
      })
      break;
        }  
    // 2 way can also use this one but not the efficient way
     if(req.url==="/"|| req.url==="index.html"){
        res.statusCode=200;
        res.setHeader("Content-Type","text/html");
       const  filepath = path.join(__dirname,"views","index.html");
        fs.readFile(filepath,"utf8",(err,data)=>{
            if (err){
                console.error(err)
                res.statusCode =500;
                res.end("Internal server error")
            }else{
                res.end(data);
            }
        })
     } */
})

server.listen(PORT, () => console.log(`server running on port ${PORT}`))



