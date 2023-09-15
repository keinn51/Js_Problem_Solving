function solution(input) {
    const num = Number(input[0]);
    const stack = [];

    for (let i = 1; i <= num; i++) {
        stack.push(input[i].split(" ").map((e) => +e));
    }

    const res = [];

    for (let i = 0; i < stack.length; i++) {
        let index = 1;
        for (let j = 0; j < stack.length; j++) {
            if (stack[j][0] > stack[i][0] && stack[j][1] > stack[i][1]) {
                index += 1;
            }
        }
        res.push(index);
    }

    console.log(res.join(" "));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
