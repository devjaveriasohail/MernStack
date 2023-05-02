// instead of passing all data at ones we divide it into smaller path
const fs = require("fs");
const path = require("path")
// read string
const rs = fs.createReadStream(path.join(__dirname,"nodedoc","text.txt"),{encoding:"utf8"})
// write string
const ws = fs.createWriteStream(path.join(__dirname,"nodedoc","newText.txt"))

// rs.on("data",(dataChunck)=>{
//     ws.write(dataChunck)
// })
//better way to use the above code is .pipe
rs.pipe(ws);