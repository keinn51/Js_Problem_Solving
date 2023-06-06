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
 * 3. 각 요소의 value는 Node Class이다. 이 때 friends은 해당 요소가 이미 객체 안에 있으면 안 넣고 없으면 넣는다.
 * 4. 1번 노드의 Class는 {value: 1, friends:[3]} 이다
 *
 * end가 이미 있으면? end 칠드런에 start를 붙이는 것
 * end가 없으면 start 칠드런에 end를 붙이는 것
 */

class Node {
    constructor(value, head) {
        this.head = head;
        this.value = value;
        this.friends = [];
    }

    getAdjacentCount(tree, start, visitNodes) {
        let count = 1;
        const _visitNodes = new Set(visitNodes);
        function iter(arr) {
            for (let key in arr) {
                const node = arr[key];
                if (_visitNodes.has(node)) continue;
                _visitNodes.add(node);
                count += 1;
                iter(tree[node].friends);
            }
        }
        iter(tree[start].friends);
        return count;
    }

    getCutLocation(tree, n) {
        const visitNodes = new Set();
        visitNodes.add(this.head);
        let lowest = n;
        const iter = (arr) => {
            for (let key in arr) {
                const node = arr[key];
                if (visitNodes.has(node)) continue;
                visitNodes.add(node);
                const nowNodeCount = this.getAdjacentCount(tree, node, visitNodes);
                lowest = Math.min(lowest, Math.abs(n - 2 * nowNodeCount));
                iter(tree[node].friends);
            }
        };
        iter(tree[this.head].friends);
        return lowest;
    }
}

function solution(n, wires) {
    const tree = {},
        head = wires[0][0];
    wires.forEach(([start, end]) => {
        if (!tree[start]) tree[start] = new Node(tree[start], head);
        if (!tree[end]) tree[end] = new Node(tree[end], head);
        tree[start].friends.push(end);
        tree[end].friends.push(start);
    });
    return tree[head].getCutLocation(tree, n);
}

console.log(
    solution(9, [
        [1, 3],
        [2, 3],
        [3, 4],
        [4, 5],
        [4, 6],
        [4, 7],
        [7, 8],
        [7, 9],
    ])
);
