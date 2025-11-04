const http = require("http");

const server = http.createServer((req, res) => {
    console.log("req is created");
    res.end("Hello farhan this request is ended");
})

server.listen(8000, () => {
    console.log("server has started!!!!!");
    console.log("server now processing");
})