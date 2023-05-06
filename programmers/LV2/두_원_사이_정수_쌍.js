function solution(r1, r2) {
    let result = 0;
    for (let x = -r2; x <= r2; x++) {
        const oY = Math.sqrt(Math.pow(r2, 2) - Math.pow(x, 2));
        const oEnd = Math.floor(oY);
        const oStart = Math.ceil(-oY);
        let count = oEnd - oStart + 1;

        if (x > -r1 && x < r1) {
            const iY = Math.sqrt(Math.pow(r1, 2) - Math.pow(x, 2));
            const iEnd = Math.floor(iY);
            const iStart = Math.ceil(-iY);
            if (iEnd === iY) count += 2;
            count -= iEnd - iStart + 1;
        }
        result += count;
    }

    return result;
}

console.log(solution(2, 3));
// console.log(solution(3, 4));
