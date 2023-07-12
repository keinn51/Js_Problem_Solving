function solution(input) {
    const count = Number(input.shift());
    const totalResult = [];
    const shortCut = {};
    for (let ii = 0; ii < count; ii++) {
        const line = input[ii];
        const lineArr = line.split(" ");
        let result = null;

        for (let jj = 0; jj < lineArr.length; jj++) {
            const words = lineArr[jj];
            if (!shortCut[words[0].toLowerCase()]) {
                shortCut[words[0].toLowerCase()] = true;
                result = [jj, 0];
                break;
            }
        }

        if (result === null) {
            for (let jj = 0; jj < lineArr.length; jj++) {
                const words = lineArr[jj];
                if (result !== null) break;
                for (let kk = 0; kk < words.length; kk++) {
                    if (!shortCut[words[kk].toLowerCase()]) {
                        shortCut[words[kk].toLowerCase()] = true;
                        result = [jj, kk];
                        break;
                    }
                }
            }
        }

        if (result === null) totalResult.push(lineArr.join(" "));
        else {
            const [wordsIdx, wordIdx] = result;
            let targetWords = lineArr[wordsIdx];
            targetWords =
                targetWords.slice(0, wordIdx) +
                "[" +
                targetWords[wordIdx] +
                "]" +
                targetWords.slice(wordIdx + 1, targetWords.length);
            lineArr[wordsIdx] = targetWords;
            totalResult.push(lineArr.join(" "));
        }
    }
    totalResult.forEach((line) => console.log(line));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
