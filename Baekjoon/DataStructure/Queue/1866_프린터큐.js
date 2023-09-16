/**
 * 반대로 sort만 하면 되는 문제라고 생각했는데, 같은 것이 여러개 나올 때가 문제
 * 정말로 queue를 구현해서 사용해야 할 것도 같다
 */

class Queue {
    constructor(init) {
        this.queue = init;
    }
    checkTop(num) {
        return this.queue.find(([i, n]) => n > num) ? false : true;
    }
    popAndPush() {
        this.queue.push(this.queue.shift());
    }
    getResult(targetIndex) {
        let result = 1;

        while (this.queue.length > 0) {
            if (this.checkTop(this.queue[0][1]) === false) {
                this.popAndPush();
            } else {
                const popped = this.queue.shift();
                if (popped[0] === targetIndex) {
                    return result;
                }
                result += 1;
            }
        }
        return 1;
    }
}

function solution(input) {
    input.shift();

    for (let i = 0; i < input.length; i += 2) {
        const [N, M] = input[i].split(" ");
        const queue = new Queue(input[i + 1].split(" ").map((n, i) => [i, Number(n)]));
        console.log(queue.getResult(Number(M)));
    }
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
