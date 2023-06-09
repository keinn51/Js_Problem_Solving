const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");

const num = Number(input[0]);

function checkValid(str) {
    const lim = Math.floor(str.length / 2);

    for (let len = 1; len <= lim; len++) {
        for (let j = str.length; j >= 0; j--) {
            const a = j;
            const b = j - len;
            const c = j - 2 * len;
            if (c < 0) break;
            if (str.slice(b, a) === str.slice(c, b)) {
                return false;
            }
        }
    }
    return true;
}

function solution(num) {
    let result = Number.MIN_SAFE_INTEGER;
    let isFinish = false;

    function iter(res, num) {
        if (isFinish) return;
        if (res.length === num) {
            if (checkValid(res)) {
                result = Number(res);
                isFinish = true;
            }
            return;
        }
        for (let i = 1; i <= 3; i++) {
            iter(res + String(i), num);
        }
    }
    iter("", num);
    console.log(result);
}

solution(num);
