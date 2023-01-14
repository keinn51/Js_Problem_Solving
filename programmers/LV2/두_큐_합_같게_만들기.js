const tempQueue1 = [1, 2, 1, 2];
const tempQueue2 = [1, 10, 1, 2];

const getSumOfArr = (array) => {
    let result = 0;
    array.forEach((curr) => {
        result += curr;
    });
    return result;
};

function solution(queue1, queue2) {
    const totalQueue = [...queue1, ...queue2];
    let startIdx = 0;
    let endIdx = queue1.length - 1;
    const totalSum = getSumOfArr(totalQueue);
    const goalSum = totalSum / 2;
    let halfQueueSum = getSumOfArr(queue1);
    let result = 0;

    if (totalSum % 2 !== 0) return -1;
    for (let i = 0; i <= queue1.length * 3; i++) {
        if (halfQueueSum === goalSum) return result;
        else if (halfQueueSum < goalSum) {
            endIdx += 1;
            if (endIdx > totalQueue.length) return -1;
            const addedNum = totalQueue[endIdx];
            halfQueueSum += addedNum;
            result += 1;
        } else if (halfQueueSum > goalSum) {
            const poppedNum = totalQueue[startIdx];
            startIdx += 1;
            if (startIdx > endIdx) return -1;
            halfQueueSum -= poppedNum;
            result += 1;
        }
    }
    return -1;
}

// console.log("tempQueue1Sum", getSumOfArr(tempQueue1));
// console.log("tempQueue2Sum", getSumOfArr(tempQueue2));

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]), "2");
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]), "7");
console.log(solution([1, 1], [1, 5]), "-1");
console.log(solution([1, 1, 1, 1], [1, 1, 1, 1]), 0);
console.log(solution([1, 3, 4, 10], [10, 4, 3, 1]), 0);
console.log(solution([1], [5]), "-1");
console.log(solution([10, 3, 1], [3, 3]), "3");
console.log(solution([1.5, 3, 2], [4, 1.5]), "3");
console.log(solution([1, 1, 1, 1], [1, 1, 7, 10]), "-1");
console.log(solution([1], [1]), "0");
