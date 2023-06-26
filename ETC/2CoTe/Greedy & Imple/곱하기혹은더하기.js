/**
 * 02984
 * 1. 정당성 분석
 * 0과 2는 더하는 것이 무조건 맞음 (곱하면 0이 되기 때문에)
 * 2와 9는 곱하는 것이 맞음
 * a * b 라고 했을 때, ab >= a + b 임
 *  즉, 0이 있는 경우가 아니라면 무조건 곱하면 된다~
 * ! 조건을 잘 생각하자. 0이 아니라 1이어도 더하는게 이득이다
 */
function solution(str) {
    let result = Number(str[0]);
    for (let i = 0; i < str.length - 1; i++) {
        if (result <= 1 || Number(str[i + 1]) <= 1) result += Number(str[i + 1]);
        else result *= Number(str[i + 1]);
    }
    return result;
}

console.log(solution("02984"));
console.log(solution("576"));
