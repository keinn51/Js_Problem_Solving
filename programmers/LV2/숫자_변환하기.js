function solution(x, y, n) {
    let needVisitArr = [x];
    let depth = 0;
    while (needVisitArr.length > 0) {
        const newArr = [];
        // console.log(needVisitArr);
        for (let i = 0; i < needVisitArr.length; i++) {
            const nowElem = needVisitArr[i];
            if (nowElem === y) return depth;
            if (nowElem > y) continue;
            if (nowElem < y - n) newArr.push(nowElem + n);
            if (nowElem === y - n) return depth + 1;
            if (nowElem * 2 < y) newArr.push(nowElem * 2);
            if (nowElem * 2 === y) return depth + 1;
            if (nowElem * 3 < y) newArr.push(nowElem * 3);
            if (nowElem * 3 === y) return depth + 1;
        }
        needVisitArr = [...newArr];
        depth += 1;
    }
    return -1;
}

console.log(solution(10, 40, 5));
console.log(solution(10, 40, 30));
console.log(solution(2, 5, 4));
