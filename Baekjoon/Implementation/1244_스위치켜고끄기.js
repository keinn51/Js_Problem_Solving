const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

const lights = input[1].split(" ").map((e) => +e);
const students = [];

for (let i = 3; i < input.length; i++) {
    students.push(input[i].split(" ").map((e) => +e));
}

function solution(lights, students) {
    for (let i = 0; i < students.length; i++) {
        const [_sex, _lnum] = students[i];
        if (_sex === 1) {
            for (let j = 1; _lnum * j <= lights.length - 1; j++) {
                lights[_lnum * j] = lights[_lnum * j] === 1 ? 0 : 1;
            }
        } else if (_sex === 2) {
            for (let j = 0; _lnum - j >= 1 && _lnum + j <= lights.length - 1; j++) {
                if (lights[_lnum - j] === lights[_lnum + j]) {
                    lights[_lnum - j] = lights[_lnum - j] === 1 ? 0 : 1;
                    if (j === 0) continue;
                    lights[_lnum + j] = lights[_lnum + j] === 1 ? 0 : 1;
                } else break;
            }
        }
    }

    let res = "";
    for (let i = 1; i < lights.length; i++) {
        res += String(lights[i]);
        if (i % 20 === 0) res += "\n";
        else res += " ";
    }
    console.log(res);
}

solution([0, ...lights], students);
