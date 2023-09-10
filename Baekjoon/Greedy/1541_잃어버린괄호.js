function solution(input) {
    const word = input[0];
    const numbers = word.split(/[+\-]/g).map((e) => +e);
    const simuls = [null, ...word.replaceAll(/[^+\-]/g, "").split("")];

    let count = 0,
        minusStack = 0;

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        const nowSimul = simuls[i];
        if (nowSimul === null) {
            count += number;
        }
        if (nowSimul === "-") {
            // stack 풀고 stack 내용 다 더해서 count에서 배기
            count -= minusStack;
            minusStack = number;
        }
        if (nowSimul === "+") {
            // stack에 넣기
            if (minusStack > 0) minusStack += number;
            else count += number;
        }
    }

    if (minusStack > 0) count -= minusStack;

    // console.log(numbers, simuls);
    console.log(count);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
