/**
 * 문자열을 읽다가 가장 마지막 문자를 발견한다
 * 폭탄 문자열 개수만큼 그 이전을 읽는데, 폭탄과 같다면 읽었던 것을 pop한다
 *
 */
function solution(input) {
    let [target, bomb] = input;
    const _bomb = bomb.trim();
    let res = [];

    for (let i = 0; i < target.length; i++) {
        res.push(target[i]);
        if (target[i] === _bomb[_bomb.length - 1]) {
            let bombFlag = true;
            let _index = res.length - 1;
            for (let j = _bomb.length - 1; j >= 0; j--) {
                if (_bomb[j] !== res[_index]) {
                    bombFlag = false;
                    break;
                }
                _index -= 1;
            }
            if (bombFlag === true) {
                for (let j = _bomb.length - 1; j >= 0; j--) {
                    res.pop();
                }
            }
        }
    }

    let result = res.join("");
    if (result.trim() === "") console.log("FRULA");
    else console.log(result);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);

module.exports = solution;
