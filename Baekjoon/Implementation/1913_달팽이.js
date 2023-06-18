const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

/**
 * 1. 표를 그려야 함
 * 2. 그리다가 목표 값이 나오면 인덱스를 저장해두어야 함
 *
 * i = 1일 떄 1개 까지 돌기
 * i = 3일 때 3^2 - 1^2까지 돌기
 * i = 5일 때 5^2 - 3^2까지 돌기
 *
 * 1^2의 시작 지점은 N = 5일 때 3번째 홀수임, 여기서 3을 M이라고 한다
 * 1의 시작 지점 [M,M]  // idx === 0
 * 3의 시작 지점 [M-1, M] // idx === 1
 * 5의 시작 지점 [M-2, M-1] // idx === 2
 * 7 ``        [M-3, M-2]
 *
 *
 */

function solution(N, target) {
    // N === 5, target === 6
    const M = (N + 1) / 2;
    for (i = 1; i <= N; i += 2) {
        const idx = (i + 1) / 2 - 1;
        let pos = [M - idx, i === 1 ? M : M - (idx - 1)];
        if (i !== 1) {
            for (let j = Math.pow(i, 2) - Math.pow(i - 1, 2); j <= Math.pow(i, 2); j++) {
                for (let k = 1; k < Math.pow(i, 2); k++) {
                    map[pos[0]][pos[1]] = j;
                }
                for (let k = 1; k < Math.pow(i, 2); k++) {}
                for (let k = 1; k < Math.pow(i, 2); k++) {}
                for (let k = 1; k < Math.pow(i, 2); k++) {}
            }
        } else {
            map[pos[0]][pos[1]] = 1;
        }
    }
}

console.log(solution(...input));
