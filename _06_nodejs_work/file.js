const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// ~~~~ sync :- Blocking operation ~~~~
// console.log("1");

// const result = fs.readFileSync("contact.txt", "utf-8");
// console.log(result);

// console.log("2");
// console.log("3");

// ~~~~~ async :- Non-Blocking Operation ~~~~
// console.log("1");

// fs.readFile("contact.txt", "utf-8", (err, result) => {
//     console.log(result);
// });

// console.log("2");
// console.log("3"); 

// ~~~ By default thread :- 4
// ~~~ Max increase :- its depend on machine to machine
// ~~~ awalys try to create non blocking iss se user ko wait nhi karna hoga