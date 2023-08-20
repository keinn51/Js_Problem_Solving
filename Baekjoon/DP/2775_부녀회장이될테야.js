function solution(input) {
    const _num = input.shift();
    const map = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];
    for (let i = 1; i <= 14; i++) {
        //i === floor
        for (let j = 1; j <= 14; j++) {
            //j === room
            if (j === 1) map[i] = [0, 1];
            else map[i][j] = map[i][j - 1] + map[i - 1][j];
        }
    }
    for (let i = 0; i < input.length; i += 2) {
        const [k, n] = [input[i], input[i + 1]];
        console.log(map[k][n]);
    }
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
