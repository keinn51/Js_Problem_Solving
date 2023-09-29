/**
 * 162
 * 81
 *
 * 4231
 */
function solution(input) {
    let [A, B] = input[0].split(" ").map(Number);
    let res = 1;

    while (B > A) {
        const Bstr = String(B);
        if (B % 2 === 0) B /= 2;
        else if (Bstr[Bstr.length - 1] === "1") B = Number(Bstr.slice(0, Bstr.length - 1));
        else return console.log(-1);
        res += 1;
    }

    if (B !== A) return console.log(-1);
    return console.log(res);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);

module.exports = solution;
