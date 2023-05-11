const express = require("express")
const app = express();
const path = require("path");
const cors = require("cors");
const {logger}= require("./middleware/logEvents")
const errorHandler= require("./middleware/errorHandler")
const PORT = process.env.PORT || 3500;
// custom middleware logger
// app.use((req,res,next)=>{
//     logEvents(`${req.method}\t ${req.headers.origin}\t ${req.url}`,"reqLog")
//     console.log(`${req.method} ${req.path}`)
// next();
// })
app.use(logger);
// Cross origin Resource Sharing
const whitelist =["https://www.yoursite.com","http://127.0.0.1:5500","http://localhost:3500"]
const corsOptions={
    origin:(origin,callback)=>{
        if (whitelist.indexOf(origin)!== -1|| !origin){
            callback(null,true)

        }else {
            callback(new Error ("not allowed by CORS"))
        }
    }, optionsSuccessStatus:200
}
app.use(cors(corsOptions))

// middleware any thing between resquest and response(req, res) => {res.redirect(301, "/new-page.html")
//there are 3 types of middleware 1.builtin middleware 2.custom middleware 3.middleware form 3rd parties
// built-in middleware to handle urlencoded data in other words, form data: "content-type : application/x-www-form-urlencoded"
app.use(express.urlencoded({extend:false}))

//built-in middleware for json
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, 'public')));


app.get("^/$|/index(.html)?", (req, res) => {
    //res.sendFile("./views/index.html",{root:__dirname})
    res.sendFile(path.join(__dirname, "views", "index.html"))
})
app.get("/new-page(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "new-page.html"))
})
app.get("/old-page(.html)?", (req, res) => {
    res.redirect(301, "/new-page.html")
})
//app.use we could do("/")   but app.all is use for routing it can apply for all http method and it expect reject
// app.get("/*", (req, res) => {
//     res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
// })
app.all("*", (req, res) => {
    res.status(404)
    if (req.accepts("html")){
       re .sendFile(path.join(__dirname, "views", "404.html"))
    }
    else if (req.accepts("json")){
        res.json ({error :"404 not found"})
    } else {
        res.type ("txt").send ("404 Not found")
    }
})
//Route.handelers
app.get("/hello(.html)?", (req, res, next) => {
    console.log("attempted to load hello.html")
    next()
}, (req, res) => {
    res.send("hello world")
})
app.use(errorHandler)
// app.use(function(err,req,res,next){
//     console.error(err.stack)
//     res.status(500).send(err.message)
// })
app.listen(PORT, () => console.log(`server running on port ${PORT}`))



