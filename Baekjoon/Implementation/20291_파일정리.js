const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

const count = Number(input.shift());

function solution(arr) {
    const countObj = {};
    arr.forEach((file) => {
        const [name, type] = file.split(".");
        if (countObj[type]) countObj[type] += 1;
        else countObj[type] = 1;
    });

    return Object.entries(countObj)
        .sort((a, b) => (a[0] < b[0] ? -1 : 1))
        .map((entry) => entry.join(" "))
        .join("\n");
}

console.log(solution(input));
