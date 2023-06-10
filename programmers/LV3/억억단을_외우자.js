function getAppearance(num) {
    let res = 0;
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) res += 1;
    }
    res *= 2;
    if (Number.isInteger(Math.sqrt(num))) res -= 1;
    return res;
}

function solution(e, starts) {
    const appearObj = {};
    for (let i = 1; i <= e; i++) {
        const count = getAppearance(i);
        if (appearObj[count] === undefined) appearObj[count] = [i];
        else appearObj[count].push(i);
    }
    const descendArr = Object.values(appearObj).reverse();
    const flatArr = descendArr.flat();

    return starts.map((start) => {
        for (let i = 0; i < flatArr.length; i++) {
            if (flatArr[i] >= start && flatArr[i] <= e) return flatArr[i];
        }
    });
}

console.log(solution(8, [1, 3, 7]));
