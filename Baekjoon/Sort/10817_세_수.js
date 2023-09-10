function solution(input) {
    const numbers = input[0].split(" ").map((e) => +e);
    numbers.sort((a, b) => a - b);
    console.log(numbers[1]);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
