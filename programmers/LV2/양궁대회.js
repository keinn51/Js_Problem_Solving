const tempN = 9;
const tempInfo = [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1];

function solution(n, info) {
    const originScore = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const newScore = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0];
    const sumScore = info.map((arrow, idx) => {
        if (info[idx] !== 0) return newScore[idx];
        else return originScore[idx];
    });
    // console.log("sumScore", sumScore);
    const neededArrowArr = info.map((arrow) => arrow + 1);
    // console.log("neededArrowArr", neededArrowArr);
    const profitArr = sumScore.map((score, idx) => score / neededArrowArr[idx]);
    // console.log("profitArr", profitArr);
    const visitArr = [];

    const getVisitedArr = (idx, currArrow, visitArr) => {
        let sum = 0;
        // console.log("currArrow", currArrow, neededArrowArr[idx]);
        while (currArrow >= neededArrowArr[idx]) {
            // console.log("idx", idx);
            if (profitArr[idx] < profitArr[idx + 1]) {
                break;
            }
            visitArr.push(idx);
            sum += sumScore[idx];
            currArrow -= neededArrowArr[idx];
            idx++;
        }
        if (currArrow < neededArrowArr[idx]) {
            while (currArrow < neededArrowArr[idx]) {
                idx++;
                if (idx >= neededArrowArr.length && currArrow !== 0) {
                    sum += sumScore[sumScore.length - 1];
                    visitArr.push(neededArrowArr.length - 1);
                    return sum;
                }
            }
            if (idx >= neededArrowArr.length) return sum;
            if (currArrow >= neededArrowArr[idx]) {
                sum += getVisitedArr(idx, currArrow, visitArr);
            }
        }
        if (profitArr[idx] < profitArr[idx + 1]) {
            const firstTryArr = [idx];
            const secondTryArr = [];
            let firstSum = sumScore[idx],
                secondSum = 0;
            // console.log("here");
            firstSum += getVisitedArr(idx + 1, currArrow - neededArrowArr[idx], firstTryArr);
            secondSum += getVisitedArr(idx + 1, currArrow, secondTryArr);
            // console.log("firstSum", firstSum, "secondSum", secondSum);
            if (firstSum >= secondSum) {
                visitArr.push(...firstTryArr);
                sum += firstSum;
            } else {
                visitArr.push(...secondTryArr);
                sum += secondSum;
            }
        }
        return sum;
    };

    getVisitedArr(0, n, visitArr);
    // console.log("newSum", newSum);
    // console.log("visitArr", visitArr);
    const resultArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let curr = n;
    visitArr.forEach((idx) => {
        if (curr >= neededArrowArr[idx]) {
            curr -= neededArrowArr[idx];
            resultArr[idx] = neededArrowArr[idx];
        } else {
            resultArr[idx] = curr;
            curr = 0;
        }
    });
    // console.log("😃result", resultArr);

    const originSum = originScore.reduce((prev, curr, idx) => {
        // console.log(prev, curr);
        if (info[idx] >= resultArr[idx] && info[idx] !== 0) {
            return prev + curr;
        }
        return prev;
    }, 0);
    const newSum = originScore.reduce((prev, curr, idx) => {
        // console.log(prev, curr);
        if (resultArr[idx] > info[idx] && resultArr[idx] !== 0) {
            return prev + curr;
        }
        return prev;
    }, 0);
    // console.log("originSum", originSum);
    if (newSum > originSum) return resultArr;
    return [-1];
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(tempN, tempInfo));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
