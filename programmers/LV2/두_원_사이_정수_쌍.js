function solution(r1, r2) {
    let result = 0;
    for (let x = -r2; x <= r2; x++) {
        const start = Math.ceil(-1 * Math.sqrt(9 - Math.pow(x, 2)));
        const end = Math.floor(Math.sqrt(9 - Math.pow(x, 2)));
        for (let y = start; y <= end; y++) {
            result += 1;
        }
    }

    console.log("res / minuse", result, Math.pow(2 * r1 - 1, 2));
    result -= Math.pow(2 * r1 - 1, 2);
    return result;
}

console.log(solution(2, 3));
console.log(solution(3, 4));
