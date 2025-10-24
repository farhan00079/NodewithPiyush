// ~~~~~~~~~ exports multi line ~~~~~~~~~~
// function add(a, b){
//     let result = a + b;
//     return result;
// }

// function sub(a, b){
//     return a - b;
// }

// module.exports = {
//     addfn : add,
//     subfn : sub
// }

// module.exports = {
//     add,
//     sub
// }

// ~~~~~~~~~~ one line exports ~~~~~~~
exports.add = (a,b) => a + b;
exports.sub = (a,b) => a-b;



