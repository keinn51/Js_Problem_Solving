class Queue {
    constructor() {
        this.queue = [];
    }
    push(num) {
        this.queue.push(num);
    }
    pop() {
        if (this.queue.length > 0) return this.queue.shift();
        else return -1;
    }
    size() {
        return this.queue.length;
    }
    empty() {
        if (this.queue.length > 0) return 0;
        else return 1;
    }
    front() {
        if (this.queue.length > 0) return this.queue[0];
        else return -1;
    }
    back() {
        if (this.queue.length > 0) return this.queue[this.queue.length - 1];
        else return -1;
    }
}

function solution(input) {
    const [N, ...arr] = input;
    const newQueue = new Queue();
    const answer = [];

    arr.forEach((d) => {
        const [doing, param] = d.split(" ");
        const res = newQueue[doing](param);
        if (res !== undefined) answer.push(res);
    });

    console.log(answer.join("\n"));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
