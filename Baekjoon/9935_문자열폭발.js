/**
 * 진짜 단순하게 푸는 겂만 생각하기
 * - 문자열을 배열에 넣기
 * - 배열을 while로 돌면서 해당 문자열이 없을 때까지 돈다
 * - 만약 있으면 문자열에 해당하는 자리를 비워주고 그 뒤의 문자들을
 * 앞의 인덱스로 당겨준다
 *
 * 그런데 이렇게 풀면 세상이 무너져도 시간이 오래걸릴 수 박에 업다
 *
 * 함수를 만들어야 하는데, 특정 부분(시작과 끝)을 읽는다.
 * 특정부분과 목표 문자열이 같으면 계속 읽는다.
 * 다 읽거나 목표 문자열과 다른 문자가 나오면 읽은 길이를 반환한다
 *
 * 만약 문자를 읽다가 C가 나오면 함수를 실행한다.
 * 함수의 반환값 만큼 글자를 점프한다. 이 때 반환값이 목표 문자열 길이와 같다면
 * false가 나왔다면
 * 2. 근데..C가 또 나왔다면 스택에 C를 또
 * 약간 재귀로 가야하네
 */
function solution(input) {
    let [target, bomb] = input;
    const _bomb = bomb.trim();

    while (target.includes(_bomb)) {
        let _newValue = target.replaceAll(_bomb, "").trim();
        target = null;
        target = _newValue;
        _newValue = null;
    }

    if (target.trim() === "") console.log("FRULA");
    else console.log(target.trim());
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);

module.exports = solution;
