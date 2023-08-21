function solution(input) {
    const limit = Number(input.shift());
    const colors = ["r", "g", "b"];
    const map = input.map((line) => line.split(" ").map((e) => +e));
    let min = Number.MAX_SAFE_INTEGER;
    const iter = (color, depth, sum) => {
        if (sum >= min) return;
        if (depth >= limit) {
            min = Math.min(min, sum);
            return;
        }
        for (let i = 0; i < 3; i++) {
            if (color !== colors[i]) iter(colors[i], depth + 1, sum + map[depth][i]);
        }
    };
    iter(null, 0, 0);
    console.log(min);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
