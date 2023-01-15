const tempN = 9;
const tempInfo = [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1];

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

    const getVisitedArr = (idx, currArrow, visitArr) => {
        let sum = 0;
        // console.log("currArrow", currArrow, neededArrowArr[idx]);
        while (profitArr[idx] >= profitArr[idx + 1] && currArrow >= neededArrowArr[idx]) {
            console.log("idx", idx);
            visitArr.push(idx);
            sum += sumScore[idx];
            currArrow -= neededArrowArr[idx];
            idx++;
        }
        if (currArrow < neededArrowArr[idx]) {
            while (currArrow < neededArrowArr[idx]) {
                idx++;
                if (idx >= neededArrowArr.length) break;
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
            console.log("firstSum", firstSum, "secondSum", secondSum);
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
    console.log("visitArr", visitArr);
    const resultArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    visitArr.forEach((idx) => {
        resultArr[idx] = neededArrowArr[idx];
    });
    console.log("result", resultArr);
}

solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
// solution(tempN, tempInfo);
// solution(tempN, tempInfo);
// solution(tempN, tempInfo);
