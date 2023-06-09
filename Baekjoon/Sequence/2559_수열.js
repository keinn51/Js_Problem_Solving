const filename = process.platform === "linux" ? "/dev/stdin" : "text2.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");

const day = Number(input[0].split(" ")[1]);
const temperatures = input[1].split(" ").map((e) => +e);

function solution(day, temperatures) {
    let result = Number.MIN_SAFE_INTEGER;
    let num = 0;
    for (let i = 0; i <= temperatures.length - day; i++) {
        if (i === 0) {
            // 개수만큼 넘버에 더해두기
            for (let j = 0; j < day; j++) num += temperatures[j];
            result = num;
        } else {
            // 이전값은 빼고 새로운 값은 넣기
            num -= temperatures[i - 1];
            num += temperatures[i + day - 1];
            result = Math.max(result, num);
        }
    }
    console.log(result);
}

solution(day, temperatures);
