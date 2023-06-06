/**
 * [2, 3, -6, 1, 3, -1, 2, 4]
 * 펄스 수열을 통해서 가장 큰 수를 얻을 수 있는 방법...?
 * 완전 탐색
 *
 * 배열의 길이가 8이므로 나올 수 있는 펄스 형태는 8*2 = 16개
 * 이 펄스 수열들을 해당 배열에서 순회시켜야 함
 *
 * 문제 풀이
 * 1. 나올 수 있는 펄스 배열의 경우들을 모두 pulses 배열에 넣어둔다
 * 2. pulses배열에서 하나씩 빼고 해당 pulse의 길이를 잰다.
 * 3. sequence의 길이에서 pulse의 길이를 뺀 만큼 sequence를 순회
 * 4. 그 안의 숫자들과 pulse 부호들을 곱한 결과를 연산한다.
 *      이 때 바보같이 pulse를 계속 탐색하지 말고, 새롭게 들어오는 숫자와 pulse 곱한 값을 더해주고
 *      지나간 값을 빼주면 된다는 것을 명심! (속도개선)
 */

function solution(sequence) {
    let result = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < sequence.length; i++) {
        let forward = 0;
        let backward = 0;
        let sign = 1;
        for (let j = i; j < sequence.length; j++) {
            forward += sequence[j] * sign;
            backward += sequence[j] * sign * -1;
            result = Math.max(result, forward, backward);
            sign *= -1;
        }
    }
    return result;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));
