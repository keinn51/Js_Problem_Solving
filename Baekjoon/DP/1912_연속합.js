/**
 * 연속된 수 중 합이 가장 큰 것
 * dp네
 * 10 -4 3 1 5 6 -35 12 21 -1
 * 10 6 9 10 15 21 -14 -2 19 18 (dp)
 *
 * 10 6
 * -4 입장에서는 10이면 가져감
 * 3 입장에서 6이면 가져감
 * 1입장에서 9면 가져감
 * 5입장에서 10이면 가져감
 * 6입장에서 15면 가져감
 * -35입장에서 21이면 가져감
 * 12입장에서 -14면 필요 없지 앞에거 자르고 자기부터 다시 시작
 * 21입장에서는 12면 가져감
 * -1입장에서 33이면 가져감
 *
 * 이 과정에서 최대값이 33
 */
function solution(input) {
    const [n, arr] = input;
    const nums = arr.split(" ").map((e) => +e);
    let max = (temp = nums[0]);

    for (let i = 1; i < Number(n); i++) {
        const num = nums[i];
        temp = (temp > 0 ? temp : 0) + num;
        max = Math.max(temp, max);
    }

    console.log(max);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
