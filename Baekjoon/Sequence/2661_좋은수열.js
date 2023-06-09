const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");

const num = Number(input[0]);

console.log(num);

/**
 * - n자리의 좋은 수열들을 생산해내기, 123을 조합해서! 이 때 최소부터 하나씩 올라가면 될 듯.
 * 
 * 
 * 
 * 121312131213
 * 12131213 -> 1213 1213
 * 1 / 12/ 121 / 1213
 * 3/ 13 / 213 / 1213
 
 * 32121323
 * 321 213 23
 * 3 212 132 3
 * 32 121 323
 
 * 3 32 321 3212 32121
 *
 * 가장 좋은 방법은 그냥 하나씩 돌면서 string find를 하는 것인데.. 느릴 것 같음
 *
 * - 그 중에서 최솟값 반환하기
 *
 * 각 자리마다 for문을 돌면서 백트래킹을 하는 것 같음 (째귀)
 * 유효성 검증을 어떻게 해야할까?
 */

function solution(num) {
    let result = Number.MIN_SAFE_INTEGER;
    let isFinish = false;

    function checkValid(str, num) {
        const lim = Math.floor(num / 2);
        for (let len = 1; len <= lim; len++) {
            // let temp
            for (let j = 0; j <= lim; j++) {}
        }
    }

    function iter(res, num, depth) {
        if (isFinish) return;
        if (depth >= Math.floor(num / 2)) return;
        if (res.length === num) {
            if (checkValid(res)) {
                result = Number(res);
                isFinish = true;
            }
        }
        for (let i = 0; i < 3; i++) {
            iter(res + String(i), num, depth + 1);
        }
    }
    iter("", num, 0);
}
