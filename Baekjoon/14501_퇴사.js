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
 */
function solution(input) {
    const [N, ...arr] = input;
    const _array = arr.map((v) => v.split(" "));
    const dp = new Array(15).fill(null);

    console.log(_array);

    const getProfit = (index) => {
        let _res = 0;
        while (index + 1 <= _array.length) {
            //_array length 2 , index 0, _pady 0
            const [_day, _profit] = _array[index].map(Number);
            console.log(index, _day, _profit);
            if (index + _day <= _array.length) {
                _res += _profit;
            }
            index += _day;
        }
        return _res;
    };

    for (let i = 0; i < _array.length; i++) {
        if (dp[i] === null) {
            dp[i] = getProfit(i);
        }
    }

    console.log(dp);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
