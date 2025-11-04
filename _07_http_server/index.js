const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
//   console.log("New req rec...");
//   console.log(req);
   const log = `${Date.now()}: ${req.url} New Req Recived\n`;
   const myUrl = url.parse(req.url);
   console.log(myUrl);
   fs.appendFile("log.txt", log, (err, data) => {
    //  res.end("Hello From Server Again");
    switch (req.url){
        case "/": 
        res.end("HomePage");
        break;
        case "/about": 
        res.end("I am farhan alam");
        break;
        default:
        res.end("404 Not found");
        break;
    }
   }) 
 
});

myServer.listen(5000, ()=>{
    console.log("server started");
    
})