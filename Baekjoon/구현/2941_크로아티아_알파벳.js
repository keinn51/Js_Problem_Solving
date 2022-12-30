const input = require('fs').readFileSync('text.txt').toString().trim();

const checkWord = {
    'c':['=', '-'],
    'd':['z=', '-'],
    'l': ['j'],
    'n': ['j'],
    's': ['='],
    'z': ['=']
}

let result = 0;

for (let i =0;i<input.length;i++){
    // 객체에 없는 경우 보냄
    if (checkWord[input[i]] === undefined) {
        result += 1;
        continue;
    }
    // 'dz='만 세 글자이므로 예외처리
    if (input[i] === 'd') {
        if (input[i+1] === 'z' && input[i+2] === '=') {
            i += 2;
            result += 1;
            continue;
        }
    }
    const checkNum = checkWord[input[i]].indexOf(input[i+1]);
    // 우연히 문자가 같은 경우는 보냄
    if (checkNum === -1) {
        result += 1;
        continue;
    }
    i += 1;
    result += 1;
}

console.log(result)