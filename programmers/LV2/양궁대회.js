const tempN = 9;
const tempInfo = [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1];

const getVisitedArr = (idx, visitArr, profitArr, sumScore) => {
    /**
     * arrow가 줄어드는 조건 추가해주고 도전해봄
     */
    let sum = 0;
    while (profitArr[idx] >= profitArr[idx + 1]) {
        visitArr.push(idx);
        sum += sumScore[idx];
        idx++;
    }
    const firstTryArr = [];
    const secondTryArr = [];
    let firstSum = 0,
        secondSum = 0;
    firstSum = getVisitedArr(idx, firstTryArr, profitArr, sumScore);
    secondSum = getVisitedArr(idx + 1, secondTryArr, profitArr, sumScore);
    if (firstSum >= secondSum) {
        visitArr.push([...firstTryArr]);
        sum += firstSum;
    } else {
        visitArr.push([...secondTryArr]);
        sum += secondSum;
    }
    return sum;
};

function solution(n, info) {
    const originScore = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const newScore = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0];
    const sumScore = info.map((arrow, idx) => {
        if (info[idx] !== 0) return newScore[idx];
        else return originScore[idx];
    });
    console.log("sumScore", sumScore);
    const neededArrowArr = info.map((arrow) => arrow + 1);
    console.log("neededArrowArr", neededArrowArr);
    const profitArr = sumScore.map((score, idx) => score / neededArrowArr[idx]);
    console.log("profitArr", profitArr);
    const visitArr = [];

    profitArr.forEach((profit, idx) => {
        getVisitedArr(visitArr, idx);
    });
}

solution(tempN, tempInfo);
