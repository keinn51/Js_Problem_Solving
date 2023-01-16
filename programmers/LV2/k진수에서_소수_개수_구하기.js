const transBase10ToK = (number, k) => {
    return number.toString(k);
};

const isDecimal = (number) => {
    let startNum = 2;
    if (Number(number) === 0) return false;
    if (Number(number) === 1) return false;
    if (Number(number) === 2) return true;
    for (let i = startNum; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
};

function solution(n, k) {
    return transBase10ToK(Number(n), k)
        .split("0")
        .reduce((prev, curr) => {
            if (isDecimal(Number(curr)) === true) return prev + 1;
            return prev;
        }, 0);
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
