/**
 *
 * 10일 연속으로 일치할 경우에 맞추어서 히원가입
 * 매일 한 가지 제품을 할인
 *
 */
function solution(want, number, discount) {
    const originObj = {};
    let answer = 0;

    want.forEach((fruit, idx) => {
        originObj[fruit] = number[idx];
    });
    for (let index = 0; index < discount.length; index++) {
        const fruit = discount[index];
        let iterObj = { ...originObj },
            _count = 0;
        if (index + 10 > discount.length) break;
        if (iterObj[fruit] === undefined) continue;
        for (let i = index; i < index + 10; i++) {
            const _discountedFruit = discount[i];
            if (iterObj[_discountedFruit] === undefined) break;
            if (iterObj[_discountedFruit] === 0) break;
            _count += 1;
            iterObj[_discountedFruit] -= 1;
        }
        if (_count === 10) answer += 1;
    }
    return answer;
}

// console.log(
//     solution(
//         ["banana", "apple", "rice", "pork", "pot"],
//         [3, 2, 2, 2, 1],
//         [
//             "chicken",
//             "apple",
//             "apple",
//             "banana",
//             "rice",
//             "apple",
//             "pork",
//             "banana",
//             "pork",
//             "rice",
//             "pot",
//             "banana",
//             "apple",
//             "banana",
//         ]
//     )
// );

// console.log(
//     solution(
//         ["apple"],
//         [10],
//         [
//             "banana",
//             "banana",
//             "banana",
//             "banana",
//             "banana",
//             "banana",
//             "banana",
//             "banana",
//             "banana",
//             "banana",
//         ]
//     )
// );
