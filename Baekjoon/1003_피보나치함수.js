function solution(input) {
    const _num = input.shift();

    for (let idx in input) {
        let zeroCnt = 0,
            oneCnt = 0;

        const _iter = (num) => {
            if (num === 0) {
                zeroCnt += 1;
                return;
            }
            if (num === 1) {
                oneCnt += 1;
                return;
            }
            return _iter(num - 1) + _iter(num - 2);
        };

        _iter(Number(input[idx]));

        console.log(`${zeroCnt} ${oneCnt}`);
    }
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
