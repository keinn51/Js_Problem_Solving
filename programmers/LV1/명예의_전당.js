function solution(k, score) {
    const ansStack = [],
        result = [];
    score = score.reverse();
    for (let i = 0; i < k; i++) {
        const num = score.pop();
        const lastNum = ansStack[ansStack.length - 1];
        if (lastNum === undefined || num < lastNum) {
            result.push(num);
            ansStack.push(num);
        } else {
            for (let j = 0; j < ansStack.length; j++) {
                if (num >= ansStack[j]) {
                    ansStack.splice(j, 0, num);
                    result.push(ansStack[ansStack.length - 1]);
                    break;
                }
            }
        }
    }
    while (score.length) {
        const num = score.pop();
        const lastNum = ansStack[ansStack.length - 1];
        if (num >= lastNum) {
            for (let j = 0; j < ansStack.length; j++) {
                if (num >= ansStack[j]) {
                    ansStack.splice(j, 0, num);
                    ansStack.pop();
                    result.push(ansStack[ansStack.length - 1]);
                    break;
                }
            }
        } else {
            result.push(lastNum);
        }
    }
    return result;
}

solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]);
