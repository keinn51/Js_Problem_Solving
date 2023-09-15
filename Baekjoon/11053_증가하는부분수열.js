/**
 * 숫자를 센다
 * 큰 숫자가 나오면 해당 배열 마짐가에 넣는다
 * 작거나 같은 숫자가 나오면 배열을 새로 판다
 *
 * 숫자를 계속 세면서 기존 배열의 마지막을 계속 체크한다
 * 마지막보다 크면 해당 배열의 마지막에 넣어준다
 * 끝나면 배열의 길이 중 가장 큰 것으로 반환한다
 */
function solution(input) {
    const numbers = input[1].split(" ").map((e) => +e);
    const stacks = [];
    let max = Number.MIN_SAFE_INTEGER;

    numbers.forEach((number) => {
        if (stacks.length === 0) {
            stacks.push({ num: 1, last: number });
        } else {
            stacks.forEach((stack) => {
                if (stack.last < number) {
                    stack.num += 1;
                    stack.last = number;
                } else {
                    stacks.push({ num: 1, last: number });
                }
                max = Math.max(stack.num, max);
            });
        }
    });

    console.log(max);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
