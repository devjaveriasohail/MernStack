const logEvents = require("./logEvents");

const EventEmitter= require("events");
class MyEmitter extends EventEmitter { };

//intialize object
const myEmitter = new MyEmitter();
// add listener for log event
myEmitter.on("log",(msg)=>logEvents(msg));

setTimeout (()=>{
    //emit event
    myEmitter.emit("log","log event emitted!")
},2000);
