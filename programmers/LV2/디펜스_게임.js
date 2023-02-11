function binaryInsert(arr, num) {
    let startIdx = 0;
    let endIdx = arr.length - 1;
    let midIdx = Math.floor((startIdx + endIdx) / 2);
    while (startIdx <= endIdx) {
        if (num === arr[midIdx]) {
            arr.splice(midIdx, 0, num);
            return;
        }
        if (num < arr[midIdx]) endIdx = midIdx - 1;
        else startIdx = midIdx + 1;
        midIdx = Math.floor((startIdx + endIdx) / 2);
    }
    arr.splice(midIdx + 1, 0, num);
}

function solution(n, k, enemy) {
    // 2) Heap 객체를 생성한다.
    let heap = [];
    let answer = k;

    heap = enemy.slice(0, k).sort((a, b) => a - b);
    for (let i = k; i < enemy.length; i++) {
        let min = heap[0];
        if (enemy[i] > min) {
            n -= min;
            heap.shift();
            binaryInsert(heap, enemy[i]);
        } else {
            n -= enemy[i];
        }
        if (n >= 0) answer++;
    }
    return answer;
}

// let temp = [2, 4, 25, 33, 100];
// binaryInsert(temp, 44);
// console.log(temp);

// console.log(binaryInsert([2, 4, 25, 33, 100], 44));

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]), 5);
console.log(solution(4, 3, [2, 1, 2, 1, 7, 8, 9]), 6);
console.log(solution(2, 4, [3, 3, 3, 3]), 4);
