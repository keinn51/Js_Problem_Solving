function solution(input) {
    const depth = Number(input[0]);
    let max = Number.MIN_SAFE_INTEGER;

    const tree = new Array(depth + 1).fill(null);

    for (let i = 1; i <= depth; i++) {
        tree[i] = input[i].split(" ").map((e) => +e);
    }

    for (let i = depth; i >= 1; i--) {
        for (let j = 0; j < tree[i].length - 1; j++) {
            tree[i - 1][j] += Math.max(tree[i][j], tree[i][j + 1]);
        }
    }

    console.log(tree[1][0]);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
