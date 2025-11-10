const express = require("express");

const app = express();

app.get("/", (res, req) =>{
    req.send("hello this is home page");

})

app.get("/about", (res, req) =>{
    req.send("hello this is about page");

})

app.listen(3000, () => {
    console.log("server started!!!");
})