class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack.push(value);
        return null;
    }
    pop() {
        if (this.stack.length > 0) return String(this.stack.pop());
        return "-1";
    }
    size() {
        return String(this.stack.length);
    }
    empty() {
        if (this.stack.length > 0) return "0";
        return "1";
    }
    top() {
        if (this.stack.length > 0) return this.stack[this.stack.length - 1];
        return "-1";
    }
}

function solution(input) {
    const do_count = Number(input[0]);
    const _stack = new Stack();
    let consoleStr = "";

    for (let i = 1; i <= do_count; i++) {
        const [command, value] = input[i].split(" ");
        const res = _stack[command](value);
        if (res) {
            if (i === do_count) {
                consoleStr += res;
            } else {
                consoleStr += res + "\n";
            }
        }
    }

    console.log(consoleStr);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
