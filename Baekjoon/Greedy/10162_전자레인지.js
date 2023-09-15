function solution(input) {
    let target = Number(input[0]);
    const [A, B, C] = [300, 60, 10];
    const result = [];

    result.push(Math.floor(target / A));
    target = target % A;
    result.push(Math.floor(target / B));
    target = target % B;
    result.push(Math.floor(target / C));
    target = target % C;

    if (target > 0) console.log(-1);
    else console.log(result.join(" "));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
