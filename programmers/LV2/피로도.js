/**
 * 로직
 * 결국에는 모든 것을 돌아야 하는 듯... 왜냐하면 최소 피로도를 기준으로 가장 큰 것이 우선되는 것도 아니고,
 * 소모 피로도가 가장 작은 것부터 도는 것도 아니기 때문이다.
 * 다 돌게 하려면 재귀를 쓰는 것 같기는 한데...
 *
 * 최소 피로도 기준 6가지의 길이 나온다.
 * 80을 간다 -> 50을 간다 -> 30을 간다
 * 80을 간다 -> 30을 간다 -> 50을 간다
 * 50을 간다 -> 80을 간다 -> 30을 간다
 * 50을 간다 -> 30을 간다 -> 80을 간다
 * 30을 간다 -> 80을 간다 -> 50을 간다
 * 30을 간다 -> 50을 간다 -> 80을 간다
 *
 * 80을 갈 때 [80, 20] 배열을 빼준 다음, 다음 재귀에서 [[50,40], [30, 10]]만 계산하게 한다
 * 그 다음 재귀에서 [50, 40]을 한다면, 그 다음 재귀에서는 [[30, 10]]만 계산하면 된다
 * 만약 그 다음 재귀에서 돌만한 함수가 없다면 리턴을 때리면 된다
 * 이 짓거리를 모든 dungeons를 다 돌 때까지 하면 된다
 */
function deleteIdx(arr, index) {
    const result = [];
    for (let i = 0; i < index; i++) result.push(arr[i]);
    for (let i = index + 1; i < arr.length; i++) result.push(arr[i]);
    return result;
}

function solution(k, dungeons) {
    let answer = 0;

    function iter(remainDungeons, nowStamina, success) {
        remainDungeons.forEach((staminaArr, index) => {
            const [minStamina, needstamina] = staminaArr;
            if (nowStamina >= minStamina) {
                iter(deleteIdx(remainDungeons, index), nowStamina - needstamina, success + 1);
            }
        });
        answer = Math.max(answer, success);
    }

    iter(dungeons, k, 0);
    return answer;
}

// console.log(
//     solution(80, [
//         [80, 20],
//         [50, 40],
//         [30, 10],
//     ])
// );

// console.log(
//     solution(30, [
//         [80, 20],
//         [50, 40],
//         [30, 10],
//     ])
// );
