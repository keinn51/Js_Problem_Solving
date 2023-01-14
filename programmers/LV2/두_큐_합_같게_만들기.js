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
    let queue1Sum = getSumOfArr(queue1);
    let queue2Sum = getSumOfArr(queue2);
    let result = 0;
    const totalIdx = queue1.length + queue2.length;

    if ((queue1Sum + queue2Sum) % 2 !== 0) return -1;
    for (let i = 0; i <= totalIdx; i++) {
        if (queue1Sum === queue2Sum) return result;
        else if (queue1Sum < queue2Sum) {
            const poppedNum = queue2.shift();
            if (queue2.length === 0) return -1;
            queue1.push(poppedNum);
            queue1Sum += poppedNum;
            queue2Sum -= poppedNum;
            result += 1;
        } else if (queue2Sum < queue1Sum) {
            const poppedNum = queue1.shift();
            if (queue1.length === 0) return -1;
            queue2.push(poppedNum);
            queue1Sum -= poppedNum;
            queue2Sum += poppedNum;
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
