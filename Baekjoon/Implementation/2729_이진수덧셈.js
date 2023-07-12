const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";

function solution(input) {
    const count = Number(input.shift());
    for (let i = 0; i < count; i++) {
        const [first, second] = input[i]
            .split(" ")
            .map((line) => line.split("").reverse().join(""));

        const len = Math.max(first.length, second.length);
        let binaryResult = "";
        let remain = 0;
        for (let j = 0; j < len; j++) {
            const a = first[j] ? first[j] : 0;
            const b = second[j] ? second[j] : 0;
            const sum = Number(a) + Number(b) + remain;
            if (sum >= 2) remain = 1;
            else remain = 0;

            binaryResult = String(sum % 2) + binaryResult;
        }
        if (remain === 1) binaryResult = "1" + binaryResult;
        let delCnt = 0;
        for (let idx in binaryResult) {
            const word = binaryResult[idx];
            if (word === "0") delCnt += 1;
            else break;
        }
        binaryResult = binaryResult.slice(delCnt, binaryResult.length);
        if (binaryResult === "") console.log("0");
        else console.log(binaryResult);
    }
}

solution(require("fs").readFileSync(filename).toString().trim().split("\n"));
