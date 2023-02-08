function solution(x, y, n) {
    let res = -1;
    function iter(dx, y, n, depth) {
        if (res !== -1 && depth >= res) return;
        if (dx < y) {
            iter(dx + n, y, n, depth + 1);
            iter(dx * 2, y, n, depth + 1);
            iter(dx * 3, y, n, depth + 1);
        }
        if (dx === y) {
            if (res === -1) res = depth;
            else res = Math.min(res, depth);
        }
        return;
    }
    iter(x, y, n, 0);
    return res;
}

console.log(solution(10, 40, 5));
console.log(solution(10, 40, 30));
console.log(solution(2, 5, 4));
