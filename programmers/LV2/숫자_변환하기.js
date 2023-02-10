function solution(x, y, n) {
    let needVisitSet = new Set([x]);
    let depth = 0;
    while (needVisitSet.size > 0) {
        const newSet = new Set();
        for (let item of needVisitSet) {
            const nowElem = item;
            if (nowElem === y) return depth;
            if (nowElem > y) continue;
            if (nowElem <= y - n) newSet.add(nowElem + n);
            if (nowElem * 2 <= y) newSet.add(nowElem * 2);
            if (nowElem * 3 <= y) newSet.add(nowElem * 3);
        }
        needVisitSet = newSet;
        depth += 1;
    }
    return -1;
}

console.log(solution(10, 40, 5));
console.log(solution(10, 40, 30));
console.log(solution(2, 5, 4));
