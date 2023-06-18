const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

/**
 * 준현
 *  주가 * 매수 가능 주식 수 < 현금    이면 무조건 구매
 *
 * 성민
 *  1. 3일 째 주식 가격이 오르면 전량 매도
 *  2. 3일 연속 주식 하락 시 가격 상승
 *  3. 모든 거래는 전량 매수와 매도 (이 것은 준현이랑 똑같음)
 *
 * 14일간 거래 대결 (현급 + 14일의 주가 * 주식 수)
 *
 *
 * 어떻게 풀 것이니?
 * 1. 준현이는 식 세우는 것이 매우 간단
 * 2. 성민이는 array를 하나 만들어두야 할 거 같음
 *      이 array의 크기가 3이 되면 매수를 하든 매도를 하든 함
 *      기존 배열 크기가 0혹은 1이다 -> 그냥 넣어도 됨
 *      2이다 -> 1번쨰랑 2번째 비교해서 커지는 중인지 비교
 */

function solution(money, chart) {
    const chartArr = chart.split(" ").map((e) => +e);
    let jMoney = +money,
        sMoney = +money,
        jCnt = 0,
        sCnt = 0;
    let sCheck = [];

    chartArr.forEach((jooga) => {
        // 준현 구매
        if (jMoney >= jooga) {
            const buy = Math.floor(jMoney / jooga);
            if (buy > 0 && jMoney >= jooga * buy) {
                jMoney -= jooga * buy;
                jCnt += buy;
            }
        }

        // 성민이 매수?? 매도?? 확인하기
        if (sCheck.length === 3) {
            // sell
            if (sCheck[0] < sCheck[1] && sCheck[1] < sCheck[2]) {
                sMoney += jooga * sCnt;
                sCnt = 0;
            }
            // buy
            else if (sCheck[0] > sCheck[1] && sCheck[1] > sCheck[2]) {
                const buy = Math.floor(sMoney / jooga);
                if (buy > 0 && sMoney >= jooga * buy) {
                    sMoney -= jooga * buy;
                    sCnt += buy;
                }
            }
        }

        // 성민 간보기
        if (sCheck.length <= 2) sCheck.push(jooga);
        else {
            sCheck[0] = sCheck[1];
            sCheck[1] = sCheck[2];
            sCheck[2] = jooga;
        }
    });

    const lastJooga = chartArr[chartArr.length - 1];
    const jJasan = jMoney + lastJooga * jCnt;
    const sJasan = sMoney + lastJooga * sCnt;
    if (jJasan > sJasan) return "BNP";
    else if (jJasan < sJasan) return "TIMING";
    return "SAMESAME";
}

console.log(solution(...input));
