const http = require("http");
const path = require("path");
const fs = require("fs")
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents");
const EventEmitter = require("events");
class Emitter extends EventEmitter { };
//intialize object
const myEmitter = new Emitter();

//port to host
const PORT = process.env.PORT || 3500;
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

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
}else {
    //404
    //301 redirect
    console.log(path.parse(filepath))
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
// add listener for log event
myEmitter.on("log", (msg) => logEvents(msg));
myEmitter.emit("log", "log event emitted!")
