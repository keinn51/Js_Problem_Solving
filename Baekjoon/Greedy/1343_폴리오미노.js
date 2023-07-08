const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

function solution(str) {
    const resultArr = str.split("").filter((word) => word === "X" || word === ".");
    let splittedArr = str.split(".").map((line) =>
        line
            .split("")
            .filter((word) => word === "X")
            .join("")
    );
    for (let idx in splittedArr) {
        const line = splittedArr[idx];
        if (line === "") continue;
        if (line.length % 2 !== 0) return -1;
        let modified = "";

        const four = Math.floor(line.length / 4);
        const two = (line.length - four * 4) / 2;

        modified += "AAAA".repeat(four) + "BB".repeat(two);
        splittedArr[idx] = modified;
    }
    splittedArr = splittedArr.filter((word) => word !== "");
    let i = 0,
        j = 0;
    return resultArr
        .map((word, idx) => {
            if (word === ".") return word;
            if (idx > 0 && resultArr[idx - 1] === ".") {
                i++;
                j = 0;
            }
            return splittedArr[i][j++];
        })
        .join("")
        .trim();
}

console.log(solution(input[0].trim()));
