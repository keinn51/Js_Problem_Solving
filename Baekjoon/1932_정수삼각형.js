/**
 *
 */
function solution(input) {
    const depth = Number(input[0]);
    let max = Number.MIN_SAFE_INTEGER;

    const tree = new Array(depth + 1).fill(null);

    for (let i = 1; i <= depth; i++) {
        tree[i] = input[i].split(" ").map((e) => +e);
    }

    const iter = (now, count, index) => {
        let sum1 = count,
            sum2 = count;
        if (now === depth) {
            return count + tree[now][index];
        }

        sum1 = iter(now + 1, count + tree[now][index], Math.max(index, 0));
        sum2 = iter(now + 1, count + tree[now][index], index + 1);

        return Math.max(sum1, sum2);
    };

    console.log(iter(1, 0, 0));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
