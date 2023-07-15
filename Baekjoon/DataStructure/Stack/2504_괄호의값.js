const input = require("fs").readFileSync("text.txt").toString().trim();

// console.log("input", input);

/**
 * stackA tempNumber
 * 1. 문자열은 stackA에 계속 쌓는다
 * 2. 닫는 괄호가 나오면, stackA의 마지막에 있는 여는 괄호를 숫자로 바꾼다.
 *      숫자는 무조건 tempNumber에 먼저 쌓아둔다.
 *      다음 문자가 여는 괄호이거나, 문자 읽기가 끝났다면 숫자를 tempNumber에서 꺼내 stackA에 넣는다.
 * - 만약 tempNumber에 숫자가 있는데 새로운 숫자가 또 들어온다면 이 둘을 곱한다.
 *      그 다음 문자가 닫는 괄호가 아니면 stackA에 넣겠지
 *      숫자를 stackA에 넣을 때, stackA의 마지막이 숫자라면 넘기는 숫자와 그 숫자를 더한다.
 * - 문자가 닫는 괄호인데 stackA의 마지막이 숫자라면, 그 숫자를 tempNumber에 넣어둔다.
 */

let stackA = [];
let tempNumber = null;

const getResult = () => {
    for (let word of input) {
        // console.group("In word");
        // console.log("word:", word);
        // console.log("stackA:", stackA);
        // console.log("tempNumber:", tempNumber);
        // console.groupEnd();
        if (word === ")") {
            if (stackA[stackA.length - 1] === "(") {
                stackA.pop();
                if (tempNumber !== null) tempNumber = tempNumber * 2;
                else tempNumber = 2;
                continue;
            }
            if (stackA.length === 0 || typeof stackA[stackA.length - 1] !== "number") return 0;
            if (tempNumber !== null) {
                tempNumber = tempNumber + stackA.pop();
                tempNumber = tempNumber * 2;
                stackA.pop();
                continue;
            }
        } else if (word === "]") {
            if (stackA[stackA.length - 1] === "[") {
                stackA.pop();
                if (tempNumber !== null) tempNumber = tempNumber * 3;
                else tempNumber = 3;
                continue;
            }
            if (stackA.length === 0 || typeof stackA[stackA.length - 1] !== "number") return 0;
            if (tempNumber !== null) {
                tempNumber = tempNumber + stackA.pop();
                tempNumber = tempNumber * 3;
                stackA.pop();
                continue;
            }
        }
        if (tempNumber !== null) {
            if (typeof stackA[stackA.length - 1] === "number")
                stackA[stackA.length - 1] = stackA[stackA.length - 1] + tempNumber;
            else stackA.push(tempNumber);
            tempNumber = null;
        }
        stackA.push(word);
    }
    let result = 0;
    if (stackA.length > 1) return 0;
    if (stackA.length === 1) {
        if (typeof stackA[0] !== "number") return 0;
        result += stackA.pop();
    }
    if (tempNumber !== null) result += tempNumber;
    return result;
};

// console.log("output", getResult());
console.log(getResult());

/**
 *  [()()(())]([()][])()()
 *  46
 *  [[([])[()]]()]()
 *  116
 *  ()))))))))[[][]]
 *  0
 *  [([[]]()()())[][][[]]]([()])
 *  147
 *  (()[]]]]]
 *  0
 */
