function solution(input) {
    console.log(input[0].split(" ").filter((v) => v !== "").length);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
