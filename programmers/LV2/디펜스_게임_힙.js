// https://cocococo.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-Lv2-%EB%94%94%ED%8E%9C%EC%8A%A4-%EA%B2%8C%EC%9E%84
class Heap {
    constructor() {
        // index의 시작은 0으로 계산의 편의성을 위해 첫 번째를 비워둔다. (1번이 1번 index)
        this.heap = [null];
    }

    size() {
        return this.heap.length - 1;
    }

    getMin() {
        return this.heap[1] ? this.heap[1] : null;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    push(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;

        // 부모가 노드가 제일 작아야 하므로, 부모노드가 현재노드보다 큰 지  반복하여 체크한다.
        while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
            // 구조분해 할당을 이용해 부모와 자식을 swap 한다.
            this.swap(parIdx, curIdx);
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }

    pop() {
        // 배열 첫 원소를 비워두므로 root는 heap[1]에 항상 위치한다.
        const min = this.heap[1];

        /*  
            배열 마지막 원소를 root 위치에 배치 과정.
            if-else로 분기되는 이유는 추후 heap이 비었는지 아닌지 확인하기 위해 
            size 체크 함수를 만들때 -1을 통해 0을 만들어주기 때문.
        */
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        if (!this.heap[leftIdx]) return min;
        // 왼쪽 자식이 없다는 것은 오른쪽 자식도 없는, 즉 루트만 있는 상태이므로 바로 반환!
        if (!this.heap[rightIdx]) {
            if (this.heap[leftIdx] < this.heap[curIdx]) {
                // 오른쪽 자식이 없다면 왼쪽 자식하나만 있다는 것을 의미한다.
                this.swap(leftIdx, curIdx);
            }
            return min;
        }

        // 위에 조건에 걸리지 않는 경우 왼쪽과 오른쪽 자식이 모두 있는 경우이다.
        // 따라서 현재 노드가 왼쪽 또는 오른쪽 보다 큰 지 작은지를 검사하며 반복한다.
        while (this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            // 왼쪽과 오른쪽 자식 중에 더 작은 값과 현재 노드를 교체하면 된다.
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }
}

function solution(n, k, enemy) {
    // 2) Heap 객체를 생성한다.
    let heap = new Heap();
    let answer = 0;

    // 3) 공격 횟수 만큼 반복문 생성
    for (let i = 0; i < enemy.length; i++) {
        // 4) Heap 안에 무적권(k) 갯수 만큼 담는다.
        if (heap.size() < k) {
            heap.push(enemy[i]);
            answer++;
        } else {
            console.log(heap);
            // 5) Heap의 최솟 값을 찾는다.
            let min = heap.getMin();

            // 6) Heap의 최솟 값이 공격하는 값보다 작을 때
            if (enemy[i] > min) {
                // 7) 보유한 병사(n)수에 최솟 값을 뺀다.
                n -= min;

                // 8) Heap 최솟 값을 공격 값과 교체
                heap.pop(min);
                heap.push(enemy[i]);
            } else {
                // 9) Heap의 최솟 값보다 크면 해당 공격 값을 보유한 병사(n)수에서 뺀다.
                n -= enemy[i];
            }
            // 10) 보유한 병사(n)수가 0보다 클때만 라운드(answer) 증가
            n >= 0 && answer++;
        }
    }
    return answer;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]), 5);
