/**
 * 102 -> 210
 * 2931 -> -1
 *
 * 210
 *
 * 80875542
 *
 * - 일단 가장 큰 숫자를 만듬
 * 88755420
 * [887554 20]
 * [887554 02]
 * [88755 402]
 * [88755 240]
 * [88755 204]
 * [88755 042]
 * [88755 024]
 *
 * - 30을 해당 숫자 넘어갈 때까지 나올 수 있는 수를 만듬
 * 그 다음 88755420이라고 하면 8이 2개 7이 한 개 5가 두 개 4,2,0 이 하나씩
 * 이걸 만족하는 최대한의 수를 찾아내면 되지 않을까?
 */
function solution(input) {
    const nums = input[0].split("");
    nums.sort((a, b) => Number(b) - Number(a));
    const originMirror = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    nums.forEach((n) => {
        originMirror[n] += 1;
    });
    const originJoin = originMirror.join("");

    let overNum = Math.floor(Number(nums.join("")) / 30) * 30;

    while (overNum > 0) {
        const mirror = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        String(overNum)
            .split("")
            .forEach((n) => (mirror[n] += 1));
        if (mirror.join("") === originJoin) {
            console.log(overNum);
            return;
        }
        overNum -= 30;
    }
    console.log(-1);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
