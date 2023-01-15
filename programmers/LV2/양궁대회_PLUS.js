function solution(n, info) {
    let maxDiff = 0;
    const ryonInfo = Array(11).fill(0);
    let resultInfo;

    const shot = (peachScore, ryonScore, arrowCount, idx, board) => {
        if (arrowCount > n) return;
        // (1) 재귀의 탈출조건
        if (idx > 10) {
            let diff = ryonScore - peachScore;
            if (diff > maxDiff) {
                board[10] = n - arrowCount;
                maxDiff = diff;
                resultInfo = board;
            }
            return;
        }

        // (2) 라이언이 점수를 획득
        if (n > arrowCount) {
            let board2 = [...board];
            board2[10 - idx] = info[10 - idx] + 1;
            shot(peachScore, ryonScore + idx, arrowCount + info[10 - idx] + 1, idx + 1, board2);
        }

        // (3) 피치가 점수를 획득
        if (info[10 - idx] > 0) {
            shot(peachScore + idx, ryonScore, arrowCount, idx + 1, board);
        } else {
            shot(peachScore, ryonScore, arrowCount, idx + 1, board);
        }
    };
    shot(0, 0, 0, 0, ryonInfo);

    if (maxDiff <= 0) return [-1];
    else return resultInfo;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
