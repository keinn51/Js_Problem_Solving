function getFactor(num) {
    const result = [];
    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) result.push(i);
        else if (num % i === 0) result.push(i, num / i);
    }
    result.sort((a, b) => a - b);
    return result;
}

function solution(arrayA, arrayB) {
    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => a - b);
    const aFactor = getFactor(arrayA[0]);
    const aCommonFactor = aFactor
        .map((factor) => {
            if (arrayA.find((num) => num % factor !== 0)) return null;
            if (factor === 1) return null;
            return factor;
        })
        .filter((factor) => factor !== null)
        .filter((factor) => {
            if (arrayB.find((num) => num % factor === 0)) return false;
            return true;
        });
    let aResult = aCommonFactor[aCommonFactor.length - 1] || 0;

    const bFactor = getFactor(arrayB[0]);
    const bCommonFactor = bFactor
        .map((factor) => {
            if (arrayB.find((num) => num % factor !== 0)) return null;
            if (factor === 1) return null;
            return factor;
        })
        .filter((factor) => factor !== null)
        .filter((factor) => {
            if (arrayA.find((num) => num % factor === 0)) return false;
            return true;
        });
    let bResult = bCommonFactor[bCommonFactor.length - 1] || 0;

    return Math.max(aResult, bResult);
}
