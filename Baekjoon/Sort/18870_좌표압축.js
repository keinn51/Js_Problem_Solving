const input = require('fs').readFileSync('text.txt').toString().trim().split("\n");

input.shift();
const result = [];
const inpurArr = input[0].split(' ');
const newSet = new Set(input[0].split(' ').sort((a,b) => a - b));
const setToArr = [];
for(a of newSet) {
    setToArr.push(a)
}
const info = {};

setToArr.forEach((el, idx) => {
    if (!info[el]) info[el] = idx
})

inpurArr.forEach((el) => {
    result.push(info[el])
})

console.log(result.join(' '))