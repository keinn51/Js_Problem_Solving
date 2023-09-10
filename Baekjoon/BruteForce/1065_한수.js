/**
 * 한 자리수나 두 자리수면 무조건 한수이다.
 * 세 자리 수 부터는 한수를 체크해야 한다.
 * 012 024 036 048 은 거꾸로도 체크해야 한다.
 */

function solution(input) {
    const number = Number(input[0]);
    let count = 0;

    if (number < 100) count += number;
    else count += 95;

    if (number >= 100)
        for (let hundred = 0; hundred < 10; hundred++) {
            if (hundred > Math.floor(number / 100)) break;
            for (let diff = 0; diff <= 4; diff++) {
                const ten = hundred + diff;
                const one = hundred + 2 * diff;
                const now = Number(String(hundred) + String(ten) + String(one));
                const reveser = Number(String(one) + String(ten) + String(hundred));
                if (now === 0) continue;
                if (now > number) break;
                if (ten < 10 && one < 10) {
                    // console.log(hundred, ten, one, now, reveser);
                    if (hundred === ten && ten === one) count += 1;
                    else if (reveser <= number) count += 2;
                    else count += 1;
                }
            }
        }
    console.log(count);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
