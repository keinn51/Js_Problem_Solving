/**
 * 두 전력망이 가지고 있는 송전탑의 개수 차이가 적어야 한다
 * 모든 상황을 결국에는 돌아야 한다는 말!
 * 트리 자료구조를 좀 알아야 풀 수 있는 문제인 것 같기는하다..!
 * 결국에는 트리에 몇 개가 달려있냐가 중요!
 * 트리구조에서 맨 위 요소가 어떤 것인지는 사실 상관이 업음.
 * 트리 구조 하부로 내려가면서, 해당 노드와 자식 노드의 총 개수가 몇 개인지만 알 수 있으면 됨
 * 1. 총 노드의 개수를 센다.
 * 2. 하위 노드로 내려가면서 재귀를 도는데, 하나 돌 때마다 총 개수에서 하나씩 뺀다.
 * 3. 최소인 것을 찾는다.
 * 여기서 궁금한 것은 노드 트리 구조로 어떻게 만드냐는 것이다!
 * 1. 배열에서 가장 먼저 나오는 친구를 그냥 head라고 한다.
 * 2. 객체를 만들고 각 요소의 key는 요소의 value로 한다.
 * 3. 각 요소의 value는 Node Class이다. 이 때 children은 해당 요소가 이미 객체 안에 있으면 안 넣고 없으면 넣는다.
 * 4. 1번 노드의 Class는 {value: 1, children:[3]} 이다
 *
 * end가 이미 있으면? end 칠드런에 start를 붙이는 것
 * end가 없으면 start 칠드런에 end를 붙이는 것
 */

class Node {
    constructor(value, head) {
        this.head = head;
        this.value = value;
        this.children = [];
    }

    getAllNodeCount(tree, start, visitNodes) {
        let count = 1;
        // const visitNodes = [this.head];
        function iter(arr) {
            for (let key in arr) {
                const node = arr[key];
                if (visitNodes.includes(node)) continue;
                visitNodes.push(node);
                count += 1;
                iter(tree[node].children);
            }
        }
        iter(tree[start].children);
        return count;
    }

    getCutLocation(tree) {
        const allNodeCount = this.getAllNodeCount(tree, this.head, [this.head]);
        const visitNodes = [this.head];
        let lowest = allNodeCount;
        const iter = (arr) => {
            for (let key in arr) {
                const node = arr[key];
                if (visitNodes.includes(node)) continue;
                visitNodes.push(node);
                const nowNodeCount = this.getAllNodeCount(tree, node, visitNodes);
                console.log(arr, node, nowNodeCount);
                lowest = Math.min(lowest, Math.abs(allNodeCount - 2 * nowNodeCount));
                iter(tree[node].children);
            }
        };
        iter(tree[this.head].children);
        return lowest;
    }
}

function solution(n, wires) {
    const tree = {},
        head = wires[0][0];
    wires.forEach(([start, end]) => {
        if (!tree[start]) tree[start] = new Node(tree[start], head);
        if (!tree[end]) tree[end] = new Node(tree[end], head);
        tree[start].children.push(end);
        tree[end].children.push(start);
    });
    console.log(tree);
    return tree[Object.keys(tree)[0]].getCutLocation(tree);
}
