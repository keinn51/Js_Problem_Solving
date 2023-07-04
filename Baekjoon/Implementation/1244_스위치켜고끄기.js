const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

const lights = input[1].split(" ").map((e) => +e);
const students = [];

for (let i = 3; i < input.length; i++) {
    students.push(input[i].split(" ").map((e) => +e));
}

function solution(lights, students) {
    /**
     * 남학생은... 그냥 배수를 돌면 되기는 함
     * -> 1이 나온다면 영락없이 On2이 되고 말음
     * 100 100 이면 On2도 될듯...?
     *
     * 남학생은 어차피 무조건 바뀌는 거니까 한 번에 모아서 는 안 됨 여자는 아니어서
     * 그냥 순서대로 해야 하는데...?
     */
    for (let i = 0; i < students.length; i++) {
        // i 01234567
        const [_sex, _lnum] = students[i];
        if (_sex === 1) {
            // j 12345678
            // lnum 3
            for (let j = 1; _lnum * j <= lights.length - 1; j++) {
                lights[_lnum * j] = lights[_lnum * j] === 1 ? 0 : 1;
            }
            console.log(`man`, lights);
        } else if (_sex === 2) {
            // 4 -> 23 -> 15 -> end
            // left <= 0 || right >=students.length -> exit
            for (let j = 0; _lnum - j >= 1 && _lnum + j <= lights.length - 1; j++) {
                console.log(`kyungsle`, lights, _lnum - j, j);
                if (lights[_lnum - j] === lights[_lnum + j]) {
                    lights[_lnum - j] = lights[_lnum - j] === 1 ? 0 : 1;
                    if (j === 0) continue;
                    lights[_lnum + j] = lights[_lnum + j] === 1 ? 0 : 1;
                } else break;
            }
            console.log(`woman`, lights);
        }
    }
    lights.shift();
    console.log(lights);
}

console.log([0, ...lights]);
console.log(students);
console.log(solution([0, ...lights], students));
