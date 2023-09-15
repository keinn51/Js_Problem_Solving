/**
 * 숫자를 센다
 * 큰 숫자가 나오면 해당 배열 마짐가에 넣는다
 * 작거나 같은 숫자가 나오면 배열을 새로 판다
 *
 * 숫자를 계속 세면서 기존 배열의 마지막을 계속 체크한다
 * 마지막보다 크면 해당 배열의 마지막에 넣어준다
 * 끝나면 배열의 길이 중 가장 큰 것으로 반환한다
 */
function solution(input) {
    const N = Number(input[0]);
    const arr = input[1].split(" ").map((e) => +e);

    const dp = Array(N).fill(1);

    for (let i = 1; i < N; i++) {
        const prevArr = arr.slice(0, i);
        const prevCounts = [];

        for (let j = 0; j <= i; j++) {
            if (prevArr[j] < arr[i]) {
                prevCounts.push(dp[j]);
            }
        }

        if (prevCounts.length !== 0) {
            dp[i] += Math.max(...prevCounts);
        }
    }

    console.log(Math.max(...dp));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
