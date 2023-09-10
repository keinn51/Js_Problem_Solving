function solution(input) {
    const total = Number(input[0]);
    let stacker = 0;

    for (let i = 2; i < input.length; i++) {
        const [price, count] = input[i].split(" ").map((e) => +e);
        if (stacker > total) {
            console.log("No");
            return;
        }
        stacker += price * count;
    }
    if (stacker === total) console.log("Yes");
    else console.log("No");
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
