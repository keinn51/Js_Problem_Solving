/**
 * 규칙
 * 1. 두 점수 둘 다 최고보다 낮으면 못 받음
 * 2. 두 점수의 합이 높은 순서대로 등수 매김
 *
 * 예시
 * [[2,2],[1,4],[3,2],[3,2],[2,1]]
 * 1. 0번째를 일단 shift한다
 * 2. 배열을 두 점수의 합을 기준으로 내림차순으로 sort
 * 3. 원호의 두 점수의 합이 같은 수가 나오는 순간의 둥수를 반환
 *      중간에 원호의 두 점수 모두 작은 순간이 오면 return -1
 *
 * 의심가는 부분?
 * - 합이 같은데 해당 값의 두 숫자가 원호보가 클..리는 없음
 * - 합이 같은데 해당 값이 우연히 원호것보다 앞에 있고, 해당 값이 등수 미달인 경우..
 *      는 안 되는게 원호의 값이 무조건 앞으로 나와서 불가능
 * - 아... 합이 원호 것보다 더 큰데 미달이 사람들이 있구나..
 *     각 요소를 도는데, 각 요소의 합보다 큰 것 중에서 저장할 것을 저장해두는게 좋음
 */
function solution(scores) {
    let order = 0;
    const [w1, w2] = scores.shift();
    let [l1, l2] = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

    scores.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));

    scores = scores.filter((score) => {
        const [x1, x2] = score;
        if (x1 + x2 <= w1 + w2) return false;
        if (x1 > l1 && x2 > l2) {
            l1 = x1;
            l2 = x2;
            return true;
        } else if (x1 < l1 && x2 < l2) return false;
        for (let key in scores) {
            const [t1, t2] = scores[key];
            if (x1 + x2 >= t1 + t2) return true;
            if (x1 < t1 && x2 < t2) return false;
        }
        return true;
    });

    if (w1 < l1 && w2 < l2) return -1;
    for (let key in scores) {
        const [t1, t2] = scores[key];
        if (w1 < t1 && w2 < t2) return -1;
        if (t1 + t2 > w1 + w2) order += 1;
        else break;
    }

    return order + 1;
}

console.log(
    solution([
        [2, 2],
        [1, 4],
        [3, 2],
        [3, 2],
        [2, 1],
    ])
);
console.log(
    solution([
        [2, 1],
        [1, 4],
        [3, 2],
        [3, 2],
        [2, 1],
    ])
);
console.log(
    solution([
        [3, 2],
        [1, 4],
        [3, 2],
        [3, 2],
        [2, 1],
    ])
);

console.log(
    solution([
        [2, 3],
        [1, 4],
        [3, 2],
        [4, 3],
        [3, 2],
        [2, 1],
    ])
);
