/**
 * 안에 있는 것들이 밖으로 나오는 느낌
 * 3개로 잘린 것, 2개로 잘린 깃이 밖으로 나옴
 * 나올 때 서로 인접한 조각은 하나로 합쳐질 수 밖에 없다
 * (a) ((((a)(a)) ((a)) (a) )) ((a))
 * (((( + ) => [0,0,0,1] => ((( + ( => (((( + ) => [0,0,0,2] => ((( + ) => 4 to 3 [0,0,2] => result += 2
 * (( + ( => ((( + ( => (((( + ) => [0,0,2,1] => ((( + ) => 4 to 3 [0,0,3] => result += 1
 * (( + ( => ((( + ) =>  [0,0,4]
 *
 * [1,1,1,1] => [2,2,2,2] => [3,3,3,3] => [3,3,3] 3 pop => [3,3,3,1] => [4,4,4,2] 2 pop => [4,4,4] => [5, 5, 5]
 */
function solution(input) {
    const stack = [];

    const arr = input[0].split("");
    let index = -1;
    let result = 0;
    let stick = 1;

    for (let key in arr) {
        const bracket = arr[key];
        if (bracket === "(") {
            index += 1;
            if (stack[index] === undefined) stack[index] = 1;
        } else {
            if (index < stack.length - 1) {
                if (arr[key - 1] === "(") {
                    result += Number(stick);
                } else {
                    result += 1;
                }
            } else {
                stick += 1;
            }
            index -= 1;
        }
    }

    console.log(result);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
