/**
 * 그냥 큐를 만드는 문제이다
 * 문제만 봐도 큐가 떠올라야 한다..
 */

class Queue {
    constructor(waitlist, w, L) {
        this.count = 0;
        this.queue = new Array(Number(w)).fill(0);
        this.L = L;
        this.sum = 0;
        this.waitlist = waitlist;
    }

    rotate() {
        const elim = this.queue.shift();

        this.sum -= elim;
        this.count += 1;

        // 만약 웨이트리스트에 무엇인가 있고, 그 것과 현재 무게를 더했을 때 L보다 작다면
        if (this.waitlist.length > 0 && this.sum + this.waitlist[0] <= this.L) {
            // 큐에 웨이트리스트의 첫 번재를 넣는다
            const newVal = this.waitlist.shift();
            this.queue.push(newVal);
            this.sum += newVal;
        } else {
            this.queue.push(0);
        }
    }

    getResult() {
        while (this.waitlist.length > 0) this.rotate();
        while (this.sum > 0) this.rotate();

        console.log(this.count);
    }
}

function solution(input) {
    const [n, w, L] = input[0].split(" ").map(Number);
    const cars = input[1].split(" ").map(Number);
    const queue = new Queue(cars, w, L);
    queue.getResult();
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);

module.exports = solution;
