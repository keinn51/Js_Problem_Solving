function solution(storey) {
    const storeyArr = ("0" + new String(storey)).split("").map((e) => +e);
    for (let i = storeyArr.length - 1; i >= 1; i--) {
        if (storeyArr[i] > 5) {
            storeyArr[i - 1] += 1;
            storeyArr[i] = 10 - storeyArr[i];
        }
    }
    console.log(storey, storeyArr);
    return storeyArr.reduce((prev, curr) => prev + curr, 0);
}

console.log(solution(16));
console.log(solution(2556));
console.log(solution(6556));
console.log(solution(5555));
console.log(solution(1111));
console.log(solution(1));
console.log(solution(7777));
console.log(solution(123456789));
