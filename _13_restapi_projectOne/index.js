const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 3500;

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
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    // TO DO : Create new user
    return res.json({status: "pending"});
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