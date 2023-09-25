/**
 * N + 1에 퇴사를 한다
 * 기간이 T 금액이 P
 * 최대 수익이라...
 *
 * 완탐이 아닐까?
 * 일단 완탐으로 풀어본다
 * 아니면 dp???
 *
 * [10, 20, 10, 20, 15, 0, 0]
 * 아 이거 dp다
 * 왜냐 특정한 날짜에 도달하는 순간 이익은 무조건 정해지는 시스템
 *
 * 2
 * 3 100
 * 1 1000
 *
 * [90,80,70,60,50,40,20,30,0,0]
 */
function solution(input) {
    const [N, ...arr] = input;
    const lim = Number(N);
    const _array = arr.map((v) => v.split(" "));
    const dp = new Array(lim).fill(0);

    for (let i = lim - 1; i >= 0; i--) {
        const [_day, _profit] = _array[i].map(Number);

        if (i + _day <= lim) {
            let max = 0;

            if (i + _day < lim) {
                max += Math.max(...dp.slice(i + _day, lim));
            }

            dp[i] = max + _profit;
        } else {
            dp[i] = 0;
        }
    }

    console.log(Math.max(...dp));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
