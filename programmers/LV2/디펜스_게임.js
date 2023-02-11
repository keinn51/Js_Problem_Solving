// 완전 탐색

function getResultFromArr(n, arr) {
    let round = 0;

    for (let item of arr) {
        round += 1;
        n -= item;
        if (n <= 0) {
            round -= 1;
            break;
        }
    }
    return round;
}

let round = 1;

function iter(startIdx, idxStack, currDep, limDep, originArr, hp) {
    for (let idx = startIdx; idx < originArr.length - (limDep - currDep); idx++) {
        idxStack.push(idx);
        if (currDep !== limDep) iter(idx + 1, idxStack, currDep + 1, limDep, originArr, hp);
        else {
            const pastedArr = [...originArr];
            for (let t = 0; t < idxStack.length; t++) {
                pastedArr[idxStack[t]] = 0;
            }
            round = Math.max(round, getResultFromArr(hp, pastedArr));
            // console.log(pastedArr, originArr, idxStack, round, currDep, limDep);
        }
        idxStack.pop();
    }
}

function solution(n, k, enemy) {
    // for문의 depth는 세 번 들어감
    // for (let i = 0; i < enemy.length; i++) {
    //     for (let j = i + 1; j < enemy.length; j++) {
    //         for (let l = j + 1; l < enemy.length; l++) {
    //             for (let t = j + 1; t < enemy.length; t++) {
    //                 const pastedArr = [...enemy];
    //                 pastedArr[i] = 0;
    //                 pastedArr[j] = 0;
    //                 pastedArr[l] = 0;
    //                 pastedArr[t] = 0;
    //                 round = Math.max(round, getResultFromArr(n, pastedArr));
    //             }
    //         }
    //     }
    // }

    iter(0, [], 1, k, enemy, n);

    return round;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
// console.log(solution(4, 3, [2, 1, 2, 1, 7, 8, 9]));
// console.log(solution(2, 4, [3, 3, 3, 3]));
