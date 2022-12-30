const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");
const [N, M] = input[0].split(" ").map((e) => parseInt(e, 10));
const numArr = input[1].split(" ").map((e) => parseInt(e, 10));

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.count = 0;
  }

  init(size) {
    let node;
    this.size = size;
    for (let i = 1; i <= size; i++) {
      node = new Node(i);
      if (i === 1) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail.next.prev = this.tail;
        this.tail = node;
      }
    }
  }

  deleteHead() {
    if (this.size) this.size--;
    this.head = this.head.next;
  }

  moveHeadToTail() {
    if (this.size > 1) {
      this.tail.next = this.head;
      this.head.prev = this.tail;
      this.head.next.prev = null;
      this.head = this.head.next;
      this.tail = this.tail.next;
      this.tail.next = null;
    }
  }

  moveTailToHead() {
    if (this.size > 1) {
      this.tail.next = this.head;
      this.head.prev = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.head = this.head.prev;
      this.head.prev = null;
    }
  }

  deleteNum(value) {
    let leftCount = 0,
      rightCount = 1,
      firstNode = this.head,
      lastNode = this.tail;
    while (firstNode) {
      if (firstNode.item === value) break;
      leftCount++;
      firstNode = firstNode.next;
    }
    while (lastNode) {
      if (lastNode.item === value) break;
      rightCount++;
      lastNode = lastNode.prev;
    }
    if (leftCount <= rightCount) {
      while (this.head.item !== value) {
        this.moveHeadToTail();
      }
      this.deleteHead();
      return leftCount;
    }
    while (this.head.item !== value) {
      this.moveTailToHead();
    }
    this.deleteHead();
    return rightCount;
  }
}

function res() {
  let deque = new Deque(),
    result = 0;
  deque.init(N);
  for (let i = 0; i < M; i++) {
    result += deque.deleteNum(numArr[i]);
  }
  console.log(result);
}

res();
