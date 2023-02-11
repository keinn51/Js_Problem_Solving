function solution(n, k, enemy) {
    const sortedEnemy = [...enemy].sort((a, b) => b - a);
    const defenseObj = {};
    let round = 0;
    for (let i = 0; i < k; i++) {
        if (defenseObj[sortedEnemy[i]] === undefined) defenseObj[sortedEnemy[i]] = 1;
        else defenseObj[sortedEnemy[i]] += 1;
    }
    for (let item of enemy) {
        round += 1;
        if (defenseObj[item] !== undefined && defenseObj[item] !== 0) {
            defenseObj[item] -= 1;
            continue;
        }
        n -= item;
        if (n <= 0) {
            round -= 1;
            break;
        }
    }
    return round;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
console.log(solution(4, 3, [2, 1, 2, 1, 7, 8, 9]));
console.log(solution(2, 4, [3, 3, 3, 3]));
