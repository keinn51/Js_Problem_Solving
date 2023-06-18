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
 *      만약에 주식이 상승하다가 하락하거나 그 반대인데, 크기가 3보다 작으면 array 초기화
 *      기존 배열 크기가 0혹은 1이다 -> 그냥 넣어도 됨
 *      2이다 -> 1번쨰랑 2번째 비교해서 커지는 중인지 비교 -> 커지는 중인데 새로운 값은 작아지는 중이다? 그러면 1번째 요소를 빼야함

 *             31 10 15

                30 20 10 10 10 12 14 13
                30 20 10
                20 10 10
                10 10 10
                10 10 12 
                10 12 14
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
            jCnt += buy;
            jMoney -= jooga * buy;
        }

        // 성민이 매수?? 매도?? 확인하기
        if (sCheck.length === 3) {
            // sell
            if (sCheck[0] < sCheck[1]) {
                sMoney += jooga * sCnt;
                sCnt = 0;
            }
            // buy
            else if (sCheck[0] > sCheck[1]) {
                const buy = Math.floor(sMoney / jooga);
                sCnt += buy;
                sMoney -= jooga * sCnt;
            }
        }

        // 성민 간보기
        if (
            sCheck.length <= 2 ||
            jooga > sCheck[sCheck.length - 1] ||
            jooga < sCheck[sCheck.length - 1]
        ) {
            if (sCheck.length === 0 || sCheck.length === 1) {
                sCheck.push(jooga);
            } else if (sCheck.length === 2) {
                if (jooga > sCheck[1]) {
                    if (sCheck[0] >= sCheck[1]) {
                        sCheck[0] = sCheck[1];
                        sCheck[1] = jooga;
                    } else if (sCheck[0] < sCheck[1]) {
                        sCheck.push(jooga);
                    }
                } else if (jooga <= sCheck[1]) {
                    if (sCheck[0] < sCheck[1]) {
                        sCheck[0] = sCheck[1];
                        sCheck[1] = jooga;
                    } else if (sCheck[0] > sCheck[1]) {
                        sCheck.push(jooga);
                    }
                }
            }
        }
        console.log("scheck", sCheck, sCnt, sMoney);
    });

    const lastJooga = chartArr[chartArr.length - 1];
    const jJasan = jMoney + lastJooga * jCnt;
    const sJasan = sMoney + lastJooga * sCnt;
    console.log(jJasan, sJasan);
    if (jJasan > sJasan) {
        return "BNP";
    } else if (jJasan < sJasan) {
        return "TIMING";
    }
    return "SAMESAME";
}

console.log(solution(100, "10 20 23 34 55 30 22 19 12 45 23 44 34 38"));
console.log(solution(15, "20 20 33 98 15 6 4 1 1 1 2 3 6 14"));
