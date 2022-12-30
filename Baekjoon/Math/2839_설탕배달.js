const N = +require('fs').readFileSync('text.txt').toString().trim();
/**
 * * 문제 고찰
 * 5킬로와 3킬로 봉지가 있음
 * 즉 5킬로 그램이 될수록 많은게 좋은 것!
 * 5a + 3b를 했을 때 연산이 되어야 함 (a가 최대)
 * 안 되면 -1을 반환
 * 
 * * 로직
 * 5킬로 : a , 3킬로 : b
 * N을 5로 나눈 몫이 a이고, N-(5*a)를 3으로 나눈다
 * - N-(5*a)를 3으로 나누었을 때 나머지가 0이면 a,b가 결과
 * - 안 나누어지면 a--
 * a가 0인데도 e를 3으로 나눈 나머지가 0이 아니라면 -1 반환
 */

let fiveKg = Math.floor(N/5), threeKg = 0, after5 = 0, after3 = 0;

while(fiveKg > 0) {
    after5 = (N - (5*fiveKg));
    threeKg = Math.floor(after5/3);
    after3 = after5%3;
    if (after3 === 0) {
        break;
    }
    else {
        fiveKg--
    }
}

if (fiveKg === 0) {
    threeKg = Math.floor(N / 3);
    after3 = N % 3;
}

if (after3 !== 0) console.log(-1);
else console.log(fiveKg + threeKg);