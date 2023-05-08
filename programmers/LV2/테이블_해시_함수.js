function numToBinary(num) {
    let result = [];
    let n = 0;
    if (num === 0) return "0";
    while (Math.pow(2, n) <= num) n += 1;
    for (let i = 0; i < n; i++) {
        const jisu = n - 1 - i;
        if (num / Math.pow(2, jisu) < 1) {
            result.push("0");
            continue;
        }
        result.push("1");
        num = num % Math.pow(2, jisu);
    }
    return result.join("");
}

function binaryToNum(binary) {
    let binaryArr = binary.split("").reverse();
    let n = 0,
        count = 0,
        lim = binaryArr.length;
    while (n < lim) {
        if (binaryArr[n] === "1") count += Math.pow(2, n);
        n++;
    }
    return count;
}

function solution(data, col, row_begin, row_end) {
    data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) return b[0] - a[0];
        return a[col - 1] - b[col - 1];
    });

    let stack = [],
        maxNum = 0;
    for (let idx = row_begin - 1; idx <= row_end - 1; idx++) {
        let count = 0;
        const row = idx + 1;
        const _target = data[idx];
        _target.forEach((num) => {
            count += num % row;
        });
        maxNum = Math.max(maxNum, count);
        stack.push(count);
    }

    const maxBinaryLen = numToBinary(maxNum).length;

    stack = stack.map((num) => {
        let res = numToBinary(num, maxNum);
        if (res.length < maxBinaryLen) {
            res = "0".repeat(maxBinaryLen - res.length) + res;
        }
        return res;
    });

    let xorRes = stack[0].split("");

    for (let i = 1; i < stack.length; i++) {
        for (let j = 0; j < stack[i].length; j++) {
            const _target = stack[i];
            if (xorRes[j] !== _target[j]) xorRes[j] = 1;
            else xorRes[j] = 0;
        }
    }

    console.log(stack, xorRes, binaryToNum(xorRes.join("")));

    return binaryToNum(xorRes.join(""));
}

solution(
    [
        [2, 2, 6],
        [1, 5, 10],
        [4, 2, 9],
        [3, 8, 3],
    ],
    2,
    2,
    3
);
