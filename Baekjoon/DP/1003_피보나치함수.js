function solution(input) {
    const _num = input.shift();
    const map = [
        [1, 0],
        [0, 1],
    ];

    for (let i = 2; i <= 40; i++) {
        map[i] = [map[i - 2][0] + map[i - 1][0], map[i - 2][1] + map[i - 1][1]];
    }

    for (let idx in input) {
        const _num = Number(input[idx]);
        console.log(`${map[_num][0]} ${map[_num][1]}`);
    }
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
