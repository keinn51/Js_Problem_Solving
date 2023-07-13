function solution(input) {
    const index = Number(input[0]);
    let count = 0,
        num = 666;

    while (true) {
        if (num.toString().includes("666")) count += 1;
        if (count === index) return num;
        num += 1;
    }
}

console.log(
    solution(
        require("fs")
            .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
            .toString()
            .trim()
            .split("\n")
    )
);
