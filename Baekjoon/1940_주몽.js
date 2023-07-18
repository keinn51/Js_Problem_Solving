function solution(input) {
    const N = Number(input[0]);
    const M = Number(input[1]);
    const numbers = input[2]
        .split(" ")
        .map((e) => +e)
        .sort((a, b) => a - b);
    let count = 0;

    function iter(index, curr) {
        if (index >= N) return;
        for (let ii = index; ii < N; ii++) {
            if (curr + numbers[index] > M) {
                return;
            }
            if (curr + numbers[index] === M) {
                count++;
                return;
            }
            if (ii + 1 < N && curr + numbers[ii] + numbers[ii + 1] > M) return;
            iter(ii + 1, curr + numbers[ii]);
        }
    }
    iter(0, 0);
    console.log(count);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
