const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");
const length = parseInt(input[0]);

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
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
      this.tail = this.tail.next;
      this.head = this.head.next;
      this.tail.next = null;
    }
  }

  getSize() {
    return this.size;
  }

  printAll() {
    let curr = this.head;
    while (curr) {
      console.log(curr.item);
      curr = curr.next;
    }
  }
}

function res() {
  let queue = new Queue();
  queue.init(length);
  while (queue.getSize() > 1) {
    queue.deleteHead();
    queue.moveHeadToTail();
  }
  queue.printAll();
}

res();
