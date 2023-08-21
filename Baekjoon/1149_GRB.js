function solution(input) {
    const [n, ...arr] = input;
    const map = arr.map((line) => line.split(" ").map((e) => +e));

    for (let ii = 1; ii < map.length; ii++) {
        map[ii][0] += Math.min(map[ii - 1][1], map[ii - 1][2]);
        map[ii][1] += Math.min(map[ii - 1][0], map[ii - 1][2]);
        map[ii][2] += Math.min(map[ii - 1][0], map[ii - 1][1]);
    }

    console.log(Math.min(...map[map.length - 1]));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
