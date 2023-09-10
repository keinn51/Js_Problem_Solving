function solution(input) {
    const [N, M] = input[0].split(" ").map((e) => +e);
    const numbers = input[1].split(" ").map((e) => +e);
    numbers.sort((a, b) => b - a);

    let max = -1;

    for (let i = 0; i < N - 2; i++) {
        const first = numbers[i];
        if (first > M) continue;
        if (numbers[i] + numbers[i + 1] + numbers[i + 2] < max) break; //이미 끝난 경우
        for (let j = i + 1; j < N - 1; j++) {
            const second = numbers[j];
            if (first + second > M) continue;
            for (let k = j + 1; k < N; k++) {
                const third = numbers[k];
                if (first + second + third > M) continue;
                else if (first + second + third === M) {
                    console.log(M);
                    return;
                } else {
                    max = Math.max(max, first + second + third); //조건을 만족하는 맨 처음만 나오면 됨
                    break;
                }
            }
        }
    }

    console.log(max);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
