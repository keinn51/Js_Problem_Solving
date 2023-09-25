/**
 * N은 삼각형에 있는 숫자가 아니라 삼각형의 개수
 * 삼각형에 있는 숫자는 변의 길이
 * N이 입력되면 삼각형 변의 길이를 알려주면 된다
 *
 *  1
 * (1) 1
 *  1 (1) 1
 * (1) 1 (1) 2
 *  1  1  1 (2) 2
 * (1) 1  1  2 (2) 3
 *  1 (1) 1  2  2 (3) 4
 *  1  1 (1) 2  2  3 (4) 5
 *  1  1  1 (2) 2  3  4 (5) 7
 *  1  1  1  2 (2) 3  4  5 (7) 9
 *
 * 5 부터 시작한다
 *
 */
function solution(input) {
    const [N, ...arr] = input;
    const nums = arr.map(Number);
    const plist = [...[0, 1, 1, 1, 2, 2], ...new Array(100).fill(0)];
    for (let n = 6; n <= Math.max(...nums); n++) {
        plist[n] = plist[n - 5] + plist[n - 1];
    }
    console.log(nums.map((n) => plist[n]).join("\n"));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
