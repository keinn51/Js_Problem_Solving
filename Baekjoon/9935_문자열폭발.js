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
 * 함수의 반환값 만큼 글자를 점프한다.
 * 이 때 반환값이 목표 문자열 길이와 같다면 기존에 읽던게 있으면 읽던거를 빼줌
 * 읽던거 없으면 시작과 끝을 어따가 저장
 */
function solution(input) {
    let [target, bomb] = input;
    const _bomb = bomb.trim();

    const counter = (idx) => {
        // idx 12
        let _index = idx;

        // _bomb.length 2
        console.log("start", idx, _index);
        for (let i = 0; i < _bomb.length; i++) {
            console.log("i & index", i, _index);
            // _index 13 & i 0
            if (_bomb[i] === target[_index]) {
                _index += 1;
            } else if (target[_index] === bomb[0]) {
                // temp 2
                let temp = 0;
                temp += counter(_index);
                console.log("temp", temp);
                i -= 1;
                if (temp === _bomb.length) {
                    _index += temp;
                } else {
                    return _index - idx;
                }
            } else {
                break;
            }
        }
        // 9 - 7
        return _index - idx;
    };

    let res = "";

    for (let idx = 0; idx < target.length; idx++) {
        // idx 12 & _bomb C4
        if (target[idx] === _bomb[0]) {
            console.log("plus", counter(idx));
            idx += counter(idx) - 1;
        } else {
            res += target[idx];
        }
    }

    if (res.trim() === "") console.log("FRULA");
    else console.log(res);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);

module.exports = solution;
