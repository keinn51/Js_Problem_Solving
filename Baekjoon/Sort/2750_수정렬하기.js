const input = require("fs").readFileSync("text.txt").toString().trim().split("\n");

input.shift();
input.sort((a, b) => a - b);
console.log(input.join("\n"));
