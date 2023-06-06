const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");

// 트리를 만들고 각 순회 메서드를 구현해본다.
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
    checker(mode) {
        // mode : pre / in / post
        // DFS를 구현하면 된다
        const result = [];
        function iter(node, tree) {
            const nodeInstance = tree.get(node);
            if (mode === "pre") result.push(nodeInstance.value);
            if (nodeInstance.left) iter(nodeInstance.left, tree);
            if (mode === "in") result.push(nodeInstance.value);
            if (nodeInstance.right) iter(nodeInstance.right, tree);
            if (mode === "post") result.push(nodeInstance.value);
        }
        iter(this.head, this.tree);
        return result.join("");
    }
}

const solution = (input) => {
    const treeMap = new Map();
    for (let i = 1; i < input.length; i++) {
        const [now, left, right] = input[i].split(" ");
        const _left = left !== "." ? left : null;
        const _right = right !== "." ? right : null;
        treeMap.set(now, new BinarySearchNode(now, _left, _right));
    }
    const binaryTree = new BinarySearchTree(treeMap);
    console.log(binaryTree.checker("pre"));
    console.log(binaryTree.checker("in"));
    console.log(binaryTree.checker("post"));
};

solution(input);
