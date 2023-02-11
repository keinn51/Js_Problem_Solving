const getFactorial = (num) => {
    let result = 0;
    while (num > 0) {
        result += num;
        num -= 1;
    }
    return result;
};

function solution(weights) {
    let result = 0;
    const combination = [1, 3 / 2, 4 / 3, 2];
    const deletedArr = [...new Set(weights)].sort((a, b) => a - b);
    const sameObj = {};
    for (let item of weights) {
        if (sameObj[item] === undefined) sameObj[item] = 0;
        else sameObj[item] += 1;
    }
    for (let item in sameObj) {
        if (sameObj[item] === 0) delete sameObj[item];
    }
    for (let i = 0; i < deletedArr.length; i++) {
        for (let j = i + 1; j < deletedArr.length; j++) {
            if (deletedArr[j] > deletedArr[i] * 2) break;
            if (combination.indexOf(deletedArr[j] / deletedArr[i]) !== -1) {
                result += 1;
                if (sameObj[deletedArr[i]] !== undefined) result += sameObj[deletedArr[i]];
            }
        }
    }
    for (let item in sameObj) result += getFactorial(sameObj[item]);
    return result;
}

console.log(solution([100, 100, 100, 180, 180, 360, 100, 270]));
