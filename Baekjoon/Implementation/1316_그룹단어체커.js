const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

const totalNum = Number(input.shift());

function solution(arr) {
    let _count = 0;
    arr.forEach((line) => {
        let mirror = {};
        let befWord = null;
        let isCount = true;
        for (let key in line) {
            const _word = line[key];
            if (_word !== befWord && mirror[_word] === undefined) {
                mirror[_word] = true;
            } else if (_word !== befWord && mirror[_word]) {
                isCount = false;
                break;
            }
            befWord = _word;
        }
        isCount === true && _count++;
    });
    return _count;
}

console.log(solution(input));
