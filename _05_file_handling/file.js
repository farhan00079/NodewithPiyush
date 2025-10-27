console.log('farhan alam');

const { log } = require("console");
const fs = require("fs");

// ~~~~ sync ~~~
fs.writeFileSync("./test.txt", "Hello Farhan");

// ~~~~ async ~~~~
fs.writeFile("./text.txt", "Hello World Async", (err)=> {

})

// ~~~~~~~ sync ~~~~~~~~
// const result = fs.readFileSync("./contact.js", "utf-8");
// console.log(result);

// ~~~~~~~ async ~~~~~~~~
fs.readFile("./contact.js", "utf-8", (err, result) => {
    if(err){
        console.log("Error", err);    
    }
    else {
        console.log(result);
        
    }
});

fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

fs.copyFileSync("test.txt", "copy.txt");

fs.unlinkSync("./text.txt");

console.log(fs.statSync)

fs.mkdirSync("my-docs");

fs.mkdirSync("my-docs/a/b", { recursive: true});
