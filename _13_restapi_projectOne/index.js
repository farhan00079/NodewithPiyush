const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const { fileURLToPath } = require("url");

const app = express();
const PORT = 3500;

// ~~~~~~~ Lecture - 14 ~~~~~~~~~~~
// ~~~~~~ Middleware -> Plugin ~~~~~~~~~
app.use(express.urlencoded({extended : false }));

// ~~~~~~~~~~ Lecture - 15 ~~~~~~~~
app.use((req, res, next) => {
    console.log("hello from middleware 1");
    // return res.json({mgs: "hello from middleware 2"});
    req.userName = "farhanalam.dev";
    next();
    
})

app.use((req, res, next) => {
    console.log("hello from middleware 2", req.userName);
    // return res.end("hey");
    next();
    
})

app.use((req, res, next) => {
   fs.appendFile("log.txt", `\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`, (err, data)=> {
    next();
   })
})

// ~~~~ Route ~~~~~~~~~
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    <ul>
        ${users.map((user) => `<li>${user.last_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

// ~~~~~~ Rest Apis ~~~~~
app.get("/api/users", (req, res) => {
    console.log("i am a root one", req.userName);
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    // TO DO : Create new user
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
          return res.json({status: "pending"});
    })

});

app.patch("/api/users/:id", (req, res) => {
    // TO DO : Edit the user with id
    return res.json({status: "pending"});
});

app.delete("/api/users", (req, res) => {
    // TO DO : Delete the user with id 
    return res.json({status: "pending"});
});

// ~~~~ Single route create ~~~~~~~~~
app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.put((req, res) => {
    // TO DO : Edit the user with id
    return res.json({status: "pending"});
})
delete((req, res) => {
    // TO DO : Delete the user with id 
    return res.json({status: "pending"});
})




app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
})