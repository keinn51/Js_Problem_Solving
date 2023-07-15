const input = require("fs").readFileSync("text.txt").toString().trim().split("\n");

input.pop();

/**
 * stack 에 문자열을 쌓아둔다.
 * 마지막 인덱스의 문자가 들어오는 문자와 쌍을 이루지 않으면 no !
 */

const getResult = () => {
    let resultStack = [];
    let isNo = false;
    for (let i = 0; i < input.length; i++) {
        const stack = [];
        for (let word of input[i]) {
            if (word === "(" || word === "[") stack.push(word);
            else if (word === ")" || word === "]") {
                if (word === ")") {
                    if (stack[stack.length - 1] === "(") {
                        stack.pop();
                        continue;
                    } else {
                        isNo = true;
                        break;
                    }
                } else if (word === "]") {
                    if (stack[stack.length - 1] === "[") {
                        stack.pop();
                        continue;
                    } else {
                        isNo = true;
                        break;
                    }
                }
            }
        }
        if (isNo === true || stack.length > 0) resultStack.push("no");
        else if (isNo === false) resultStack.push("yes");
        isNo = false;
    }
    console.log(resultStack.join("\n"));
};

getResult();
