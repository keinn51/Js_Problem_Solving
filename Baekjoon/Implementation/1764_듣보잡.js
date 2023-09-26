/**
 * 3 4
 * ohhenrie
 * charlie
 * baesangwook
 *
 * obama
 * baesangwook
 * ohhenrie
 * clinton
 *
 * a배열을 읽어서 ??
 */
function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const mirror = {};
    const B = [];
    const res = [];

    for (let i = 1; i <= N; i++) {
        mirror[input[i]] = 1;
    }

    for (let i = N + 1; i <= N + M; i++) {
        B.push(input[i]);
    }

    B.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    B.forEach((v) => {
        if (mirror[v]) {
            res.push(v);
        }
    });

    console.log(res.length);
    console.log(res.join("\n"));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
