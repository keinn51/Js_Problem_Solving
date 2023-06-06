const filename = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");

/**
 * 트리를 만들고 각 순회 메서드를 구현해본다.
 */

class BinarySearchNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }
}

class BinarySearchTree {
    constructor(tree) {
        // tree is Map
        this.tree = tree;
        this.head = "A";
    }
    preOrder() {
        // DFS를 구현하면 된다
        const needVisit = [];
        const result = [];
        needVisit.push(this.head);
        while (needVisit.length > 0) {
            const nodeInstance = this.tree.get(needVisit.shift());
            if (nodeInstance.left) needVisit.push(nodeInstance.left);
            if (nodeInstance.right) needVisit.push(nodeInstance.right);
            result.push(nodeInstance.value);
        }
        return result;
    }
    inOrder() {}
    postOrder() {}
}

const solution = (input) => {
    const allNodeCnt = Number(input[0]);
    const tree = new Map();
    for (let i = 1; i < input.length; i++) {
        const [now, left, right] = input[i].split(" ");
        const _left = left !== "." ? left : null;
        const _right = right !== "." ? right : null;
        tree.set(now, new BinarySearchNode(now, _left, _right));
    }
    const binaryTree = new BinarySearchTree(tree);
    console.log(binaryTree);
    console.log(binaryTree.preOrder());
};

console.log(solution(input));
