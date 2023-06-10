const filename = process.platform === "linux" ? "/dev/stdin" : "text3.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");

const [N, P, Q] = input[0].split(" ").map((e) => +e);

function solution(N, P, Q) {
    let result = 0;
    function iter(num) {
        console.log(num);
        if (num === 0) result += 1;
        else iter(Math.floor(num / P)) + iter(Math.floor(num / Q));
    }
    iter(N);
    console.log(result);
}

solution(N, P, Q);
