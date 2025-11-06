const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hello this is a home page");
})

app.get("/about", (req, res) => {
    res.send(`hello this is a about page ${req.query.name} your age is : ${req.query.age}`);
})

app.listen("3000", () => {
    console.log("server has started farhan bhai!!!");
})