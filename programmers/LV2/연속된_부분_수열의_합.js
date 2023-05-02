// 1차 시도 실패
// 너무 어렵게 생각함, 좀 더 천천히 더 나은 방법을 고민해보자
// function solution(sequence, k) {
//     const answerStack = [];
//     let minLen = 1001;
//     for (let i = 0; i < sequence.length; i++) {
//         let counter = 0;
//         for (let j = i; j < sequence.length; j++) {
//             counter += sequence[j];
//             if (counter === k) {
//                 minLen = Math.min(minLen, j - i);
//                 answerStack.push([i, j]);
//                 if (i === j) return [i, j];
//                 else i = j - 1;
//                 break;
//             }
//             if (counter > k) {
//                 while (i <= j) {
//                     counter -= sequence[i];
//                     i++;
//                     if (counter === k) {
//                         minLen = Math.min(minLen, j - i);
//                         answerStack.push([i, j]);
//                         if (i === j) return [i, j];
//                         else i = j - 1;
//                         break;
//                     }
//                 }
//                 if (i > j) i = j - 1;
//                 if (counter === k) break;
//             }
//         }
//     }
//     return answerStack.filter((answer) => answer[1] - answer[0] === minLen)[0];
// }

class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
        this.sum = 0;
    }
    shift() {
        let res = this.queue[this.head];
        if (this.head <= this.tail) {
            res = this.queue[this.head];
            this.sum -= res;
            this.head += 1;
            return res;
        }
        return 0;
    }
    push(num) {
        this.queue.push(num);
        this.sum += num;
        this.tail += 1;
    }
}

function solution(sequence, k) {
    const iterQueue = new Queue();
    let start = 0,
        end = 0,
        answer = null;
    sequence.forEach((number, idx) => {
        iterQueue.push(number);
        let sum = iterQueue.sum;

        if (sum === k) {
            if (answer === null) answer = [start, end];
            if (end - start < answer[1] - answer[0]) answer = [start, end];
        }

        while (sum >= k) {
            if (sum === k) {
                if (answer === null) answer = [start, end];
                if (end - start < answer[1] - answer[0]) answer = [start, end];
            }
            sum -= iterQueue.shift();
            start += 1;
        }
        end += 1;
    });
    return answer;
}

console.log(solution([1, 2, 3, 4, 5], 7));
console.log(solution([1, 1, 1, 2, 3, 4, 5, 7], 5));
