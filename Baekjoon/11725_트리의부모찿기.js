/**
 * 부모 노드...
 *
 * 1 6
 *
 * 3 6
 *
 * 내 생각에는 트리를 만들고 트리를 순회하면서 알아내어야 할 것 같음
 */
function solution(input) {
    const [N, ...arr] = input;
    const num = Number(N);
    const _entries = arr.map((v) => v.split(" ").map(Number));
    const mothers = new Array(num + 1).fill("");
    const trees = {};
    const visited = {};

    _entries.forEach(([a, b]) => {
        if (trees[a] === undefined) trees[a] = [b];
        else trees[a].push(b);
        if (trees[b] === undefined) trees[b] = [a];
        else trees[b].push(a);
        visited[a] = false;
        visited[b] = false;
    });

    const iter = (node) => {
        visited[node] = true;
        trees[node].forEach((n) => {
            if (visited[n] === false) {
                mothers[n] = node;
                iter(n);
            }
        });
    };

    iter(1);

    console.log(mothers.join("\n").trim());
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);

module.exports = solution;
