const getMinDist = (x, y, r, c) => {
    return Math.abs(x - r) + Math.abs(y - c);
};

const move = (n, m, x, y) => {
    let dx = [1, 0, 0, -1];
    let dy = [0, -1, 1, 0];

    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx >= 1 && nx <= n && ny >= 1 && ny <= m) {
            return i;
        }
    }
};

function solution(n, m, x, y, r, c, k) {
    let minDist = getMinDist(x, y, r, c);
    let directions = ["d", "l", "r", "u"];

    if (minDist % 2 !== k % 2 || k < minDist) return "impossible";

    let answer = "";

    while (minDist < k) {
        let mIdx = move(n, m, x, y);
        answer += directions[mIdx];

        if (mIdx === 0) x++;
        else if (mIdx === 1) y--;
        else if (mIdx === 2) y++;
        else x--;

        minDist = getMinDist(x, y, r, c);
        k--;
    }

    if (x < r) answer += "d".repeat(r - x);
    if (y > c) answer += "l".repeat(y - c);
    if (y < c) answer += "r".repeat(c - y);
    if (x > r) answer += "u".repeat(x - r);

    return answer;
}

console.log(solution(3, 4, 2, 3, 3, 1, 5));
console.log(solution(2, 2, 1, 1, 2, 2, 2));
console.log(solution(3, 3, 1, 2, 3, 3, 4));
