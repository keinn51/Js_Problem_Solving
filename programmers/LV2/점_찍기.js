function solution(k, d) {
    let result = 0;
    for (let a = 0; a <= Math.floor(d / k); a++) {
        result += Math.floor(Math.sqrt(Math.pow(d / k, 2) - Math.pow(a, 2))) + 1;
    }
    return result;
}

console.log(solution(2, 4));
console.log(solution(1, 5));
