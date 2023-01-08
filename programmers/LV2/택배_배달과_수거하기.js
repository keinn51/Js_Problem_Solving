function findLastIndexForArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) return i;
    }
    return -1;
}

function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let lastDeliIdx = findLastIndexForArray(deliveries);
    let lastPickIdx = findLastIndexForArray(pickups);
    // console.log("#1", lastDeliIdx, lastPickIdx);
    while (lastDeliIdx >= 0 && lastPickIdx >= 0) {
        let iterNum = cap;
        answer += 2 * (Math.max(lastDeliIdx, lastPickIdx) + 1);

        while (iterNum > 0 && lastDeliIdx >= 0) {
            if (deliveries[lastDeliIdx] > 0) {
                deliveries[lastDeliIdx] -= 1;
                iterNum -= 1;
            } else {
                lastDeliIdx -= 1;
            }
        }
        // console.log("#3", lastDeliIdx, iterNum);
        while (iterNum < cap && lastPickIdx >= 0) {
            if (pickups[lastPickIdx] > 0) {
                pickups[lastPickIdx] -= 1;
                iterNum += 1;
            } else {
                lastPickIdx -= 1;
            }
        }
        if (deliveries[lastDeliIdx] === 0) lastDeliIdx = findLastIndexForArray(deliveries);
        if (pickups[lastPickIdx] === 0) lastPickIdx = findLastIndexForArray(pickups);
        // console.log("#4", lastPickIdx, iterNum);
        // console.log("del last", deliveries[lastDeliIdx], "pick last", pickups[lastPickIdx]);
        // console.log("answer", answer);
    }
    if (lastDeliIdx !== -1) {
        while (lastDeliIdx >= 0) {
            let iterNum = cap;
            answer += 2 * (lastDeliIdx + 1);
            while (iterNum > 0 && lastDeliIdx >= 0) {
                if (deliveries[lastDeliIdx] > 0) {
                    deliveries[lastDeliIdx] -= 1;
                    iterNum -= 1;
                } else {
                    lastDeliIdx -= 1;
                }
            }
            if (deliveries[lastDeliIdx] === 0) lastDeliIdx = findLastIndexForArray(deliveries);
        }
    }
    if (lastPickIdx !== -1) {
        while (lastPickIdx >= 0) {
            let iterNum = 0;
            answer += 2 * (lastPickIdx + 1);
            while (iterNum < cap && lastPickIdx >= 0) {
                if (pickups[lastPickIdx] > 0) {
                    pickups[lastPickIdx] -= 1;
                    iterNum += 1;
                } else {
                    lastPickIdx -= 1;
                }
            }
            if (pickups[lastPickIdx] === 0) lastPickIdx = findLastIndexForArray(pickups);
        }
    }
    return answer;
}

console.log("test1", solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]), "answer", 16);
console.log("test2", solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]), "answer", 30);
console.log("test3", solution(3, 7, [2, 1, 2, 0, 3, 1, 2], [2, 2, 3, 1, 2, 0, 0]), "answer", 32);
console.log("test4", solution(3, 7, [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), "answer", 0);
console.log("test5", solution(2, 2, [1, 0], [1, 0]), "answer", 2);
console.log("test6", solution(2, 2, [2, 2], [2, 2]), "answer", 6);
console.log("test7", solution(2, 2, [3, 3], [3, 3]), "answer", 10);
console.log("test8", solution(5, 5, [15, 20, 25, 0, 35], [10, 0, 5, 35, 20]), "answer", 130);
