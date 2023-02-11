function solution(n, k, enemy) {
    let [left, right] = [0, enemy.length];
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        const curSlice = enemy.slice(0, mid).sort((a, b) => b - a);
        let noDie = k;
        const curEnemy = curSlice.reduce((acc, cur) => {
            if (noDie > 0) {
                noDie--;
                return acc;
            }
            return acc + cur;
        }, 0);
        if (n >= curEnemy) left = mid + 1;
        else right = mid - 1;
        mid = Math.floor((left + right) / 2);
    }
    return left - 1;
}

// let temp = [2, 4, 25, 33, 100];
// binaryInsert(temp, 44);
// console.log(temp);

// console.log(binaryInsert([2, 4, 25, 33, 100], 44));

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]), 5);
console.log(solution(4, 3, [2, 1, 2, 1, 7, 8, 9]), 6);
console.log(solution(2, 4, [3, 3, 3, 3]), 4);
