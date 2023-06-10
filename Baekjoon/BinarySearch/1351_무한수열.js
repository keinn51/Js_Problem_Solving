const filename = process.platform === "linux" ? "/dev/stdin" : "text5.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");

const [N, P, Q] = input[0].split(" ").map((e) => +e);

function solution(N, P, Q) {
    const point = new Map();
    if (N === 0) {
        console.log(1);
        return;
    }
    function iter(num) {
        if (num === 0) return 1;
        if (point.get(num)) return Number(point.get(num));
        return (point[num] = iter(Math.floor(num / P)) + iter(Math.floor(num / Q)));
    }
    iter(N);
    console.log(point[N]);
}

solution(N, P, Q);
