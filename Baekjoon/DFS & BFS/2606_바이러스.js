/**
 * bfs를 사용하는 문제
 * edge case
 * - 1만 있을 경우
 * - 1이 연결 안 되어 있을 경우
 * - 다른 곳에서 1이랑 연결되어 있을 경우 (5 1 이런 식으로)
 */
function solution(input) {
    const cp_num = Number(input[0]);
    const line_num = Number(input[1]);
    const connections = {},
        visited = {};

    if (cp_num === 1) {
        console.log(0);
        return;
    }

    for (let idx = 2; idx < input.length; idx++) {
        const [a, b] = input[idx].split(" ").map((e) => +e);
        if (connections[a]) connections[a].push(b);
        else connections[a] = [b];
        if (connections[b]) connections[b].push(a);
        else connections[b] = [a];
        visited[a] = false;
        visited[b] = false;
    }

    visited["1"] = true;
    const needVisit = [...(connections["1"] || [])];
    let count = 0;

    while (needVisit.length > 0) {
        const num = needVisit.pop();
        if (visited[num] === false) {
            visited[num] = true;
            if (connections[num]) needVisit.push(...connections[num]);
            count += 1;
        }
    }

    console.log(count);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
