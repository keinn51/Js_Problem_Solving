function solution(sequence) {
    let pFrist = [];
    let mFirst = [];
    let result = 0;

    sequence.forEach((el, i) => {
        let sign = i % 2 === 0 ? 1 : -1;
        const num = el * sign;
        if (i === 0) {
            pFrist.push(el);
            mFirst.push(-el);
        } else {
            pFrist.push(Math.max(num, num + pFrist[i - 1]));
            mFirst.push(Math.max(-num, -num + mFirst[i - 1]));
        }
        result = Math.max(result, pFrist[i], mFirst[i]);
    });

    return result;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));
