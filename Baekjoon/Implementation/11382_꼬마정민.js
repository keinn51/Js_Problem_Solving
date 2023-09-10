function solution(input) {
    console.log(input[0].split(" ").reduce((prev, curr) => Number(prev) + Number(curr), 0));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
