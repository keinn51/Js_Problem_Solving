const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = Number(require("fs").readFileSync(filename).toString().trim().split("\n")[0]);

const getLineType1 = (n, a) => {
    const __arr1 = new Array(4 * n + 1).fill(" ");
    for (let j = 0; j < a; j++) {
        const _sidx = 2 * j;
        const _eidx = 4 * n - 2 * j;

        __arr1[_sidx] = "*";
        __arr1[_eidx] = "*";
    }
    return __arr1.join("");
};

const getLineType2 = (n, a) => {
    const __arr2 = new Array(4 * n + 1).fill("*");
    for (let j = 0; j < a; j++) {
        const _sidx = 2 * j + 1;
        const _eidx = 4 * n - 2 * j - 1;
        __arr2[_sidx] = " ";
        __arr2[_eidx] = " ";
    }
    return __arr2.join("");
};

function solution(num) {
    const n = num - 1;
    let _arr = [];
    for (let a = 0; a <= n; a++) {
        if (a !== 0) _arr.push(getLineType1(n, a));
        _arr.push(getLineType2(n, a));
    }
    for (let a = n; a >= 0; a--) {
        if (a !== n) _arr.push(getLineType2(n, a));
        if (a !== 0) _arr.push(getLineType1(n, a));
    }
    console.log(_arr.join("\n"));
}

solution(input);
