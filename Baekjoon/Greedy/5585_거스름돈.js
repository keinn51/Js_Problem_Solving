// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("text.txt").toString().trim();

const checkChange = (curr, num) => {
    let addedCount = 0;
    while (curr / num >= 1) {
        curr -= num;
        addedCount += 1;
    }
    return [curr, addedCount];
};

const solution = (price) => {
    const changesArr = [500, 100, 50, 10, 5, 1];
    let changeCount = 0;
    price = 1000 - price;
    changesArr.forEach((change) => {
        const entry = checkChange(price, change);
        price = entry[0];
        changeCount += entry[1];
    });
    return changeCount;
};

console.log(solution(Number(input)));
