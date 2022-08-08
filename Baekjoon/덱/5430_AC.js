const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n"),
  count = parseInt(input[0], 10);

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  init(arr, num) {
    let node;
    this.size = num;
    for (let i = 0; i < num; i++) {
      node = new Node(arr[i]);
      if (i == 0) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
    }
  }

  deleteHead() {
    let headTemp;
    if (this.size > 0) {
      headTemp = this.head;
      this.head = this.head.next;
      headTemp.next = null;
      this.head.prev = null;
      this.size--;
    } else {
      console.log("error");
    }
  }

  reverse() {
    let headTemp, tailTemp;
    for (let i = 0; i < this.size / 2; i++) {
      headTemp = this.head;
      tailTemp = this.tail;
      headTemp.next.prev = tailTemp;
      tailTemp.prev.next = headTemp;
      headTemp.prev = tailTemp.prev;
      tailTemp.next = headTemp.next;
      this.head.prev = null;
      headTemp.next = null;
      headTemp.prev = this.tail;
      this.tail.next = headTemp;
      this.tail = headTemp;
      // console.log(this.head,this.tail);
    }
  }

  printArr() {
    let headTemp = this.head,
      rtnArr = [];
    while (headTemp) {
      rtnArr.push(headTemp.item);
      headTemp = headTemp.next;
    }
    console.log(rtnArr);
  }
}

function res(count) {
  let deque,
    idx = 1;
  for (let i = 0; i < count; i++) {
    idx = 3 * i + 1;
    deque = new Deque();
    deque.init(
      input[idx + 2]
        .slice(1, input[idx + 2].length - 1)
        .split(",")
        .map((e) => parseInt(e, 10)),
      parseInt(input[idx + 1], 10),
    );
    for (let j = 0; j < input[idx].length; j++) {
      if (input[idx][j] === "R") deque.reverse();
      else if (input[idx][j] === "D") deque.deleteHead();
    }
    deque.printArr();
  }
}

res(count);
