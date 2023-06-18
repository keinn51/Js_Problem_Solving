const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

/**
 * 1. 표를 그려야 함
 * 2. 그리다가 목표 값이 나오면 인덱스를 저장해두어야 함
 */

function solution(N, target) {
    N = +N;
    target = +target;
    const map = new Array(N).fill(0).map((_) => new Array(N).fill(0));
    let [tx, ty] = [null, null],
        idx = 0,
        num = Math.pow(N, 2);

    for (now = N; now >= 3; now -= 2) {
        let pos = [idx, idx];
        let [x, y] = pos;

        // bottom
        for (let line = 1; line <= now - 1; line++) {
            map[x][y] = Number(num);
            if (Number(num) === Number(target)) {
                tx = x;
                ty = y;
            }
            x++;
            num--;
        }
        //right
        for (let line = 1; line <= now - 1; line++) {
            map[x][y] = num;
            if (Number(num) === Number(target)) {
                tx = x;
                ty = y;
            }
            y++;
            num--;
        }
        //top
        for (let line = 1; line <= now - 1; line++) {
            map[x][y] = num;
            if (Number(num) === Number(target)) {
                tx = x;
                ty = y;
            }
            x--;
            num--;
        }
        //left
        for (let line = 1; line <= now - 1; line++) {
            map[x][y] = num;
            if (Number(num) === Number(target)) {
                tx = x;
                ty = y;
            }
            y--;
            num--;
        }
        idx++;
    }
    map[idx][idx] = 1;
    map.forEach((line) => {
        console.log(line.join(" "));
    });
    console.log(tx + 1, ty + 1);
}

const start = new Date().getTime();

solution(...input);

const end = new Date().getTime();

console.log((end - start) / 1000);
