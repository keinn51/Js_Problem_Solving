function solution(storey) {
    const storeyArr = ("0" + new String(storey)).split("").map((e) => +e);
    for (let i = storeyArr.length - 1; i >= 1; i--) {
        if (storeyArr[i] > 5 || (storeyArr[i] === 5 && storeyArr[i - 1] >= 5)) {
            storeyArr[i - 1] += 1;
            storeyArr[i] = 10 - storeyArr[i];
        }
    }
    return storeyArr.reduce((prev, curr) => prev + curr, 0);
}

console.log("res", solution(16));
console.log("res", solution(2554));
// console.log("res", solution(1));
// console.log("res", solution(10));
// console.log("res", solution(100));
// console.log("res", solution(1000));
// console.log("res", solution(100000000));
// console.log("res", solution(9));
// console.log("res", solution(999));
// console.log("res", solution(999999999));
// console.log("res", solution(666));
console.log("res", solution(755));
