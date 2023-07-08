const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

function solution(str) {
    str = str.replaceAll("XXXX", "AAAA");
    str = str.replaceAll("XX", "BB");
    if (str.split("").includes("X")) return -1;
    return str;
}

console.log(solution(input[0].trim()));
