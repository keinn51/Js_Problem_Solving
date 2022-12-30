const input = require("fs").readFileSync("text.txt").toString().split("\n");

const [n, ...commands] = input;

// 노드 클래스
class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

// next 를 가지는 연결 리스트
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  pop() {
    if (this.size > 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.size -= 1;
      return item;
    } else if (this.size === 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.tail = newHead;
      this.size -= 1;
      return item;
    } else if (this.size === 1) {
      const item = this.head.item;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return item;
    } else {
      return -1;
    }
  }

  empty() {
    return this.size ? 0 : 1;
  }

  front() {
    return this.head ? this.head.item : -1;
  }

  back() {
    return this.tail ? this.tail.item : -1;
  }
}

// 결과 함수
function res(n, commands) {
  let answer = "";
  const queue = new Queue();

  for (let i = 0; i < n; i += 1) {
    const command = commands[i].split(" ")[0];

    switch (command) {
      case "push":
        const pushItem = commands[i].split(" ")[1];
        queue.push(pushItem);
        break;
      case "pop":
        answer += queue.pop() + " ";
        break;
      case "front":
        answer += queue.front() + " ";
        break;
      case "back":
        answer += queue.back() + " ";
        break;
      case "empty":
        answer += queue.empty() + " ";
        break;
      case "size":
        answer += queue.getSize() + " ";
        break;
      default:
        break;
    }
  }

  return console.log(answer.trimEnd().split(" ").join("\n"));
}

res(n, commands);

// const t0 = performance.now();
// for (let i = 0; i < 1000; i++) {
//   res(n, commands);
// }
// const t1 = performance.now();
// console.log(t1 - t0, "milliseconds");
