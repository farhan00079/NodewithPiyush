const http = require("http");

const server = http.createServer((req, res) => {
    console.log("hello this server is started.......");
    res.end("the server is already started yet....");
})

server.listen(5000, ()=>{
    console.log("server has started.......");
    
})