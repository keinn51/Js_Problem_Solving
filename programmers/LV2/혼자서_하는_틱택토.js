/**
 * 판에다가 아예 잘못 두었다
 * 잘못 두었다는 근거는 무엇?
 * 1. O의 승리로 끝났는데 X를 표시한 상황
 *  O와 X의 개수가 같고, O가 승리
 * 2. X의 승리로 끝이 났는데 O를 표시한 상황
 *  O의 개수가 X보다 하나 많고, X가 승리
 * 3. O의 개수는 X와 같거나 하나 크다 (다른 경우는 모두 에러)
 *
 * 이 정도인 듯한데 이를 어떻게 검증한담?
 * 1. 모두 순회해서 O와 X의 카운트를 변수에 담아둠
 * 2. O와 X의 승리 여부도 알아야 하느데 어떻게..?
 *  3*3 배열이어서 시간초과가 날 일이 절대 없을 것 같은데?
 *  카운트랑 성공 로직을 따로 두어도 괜찮을듯?
 *  성공 로직은 그냥 무식하게 여섯가지 다 해보기
 * 3. 실패 조건을 체크
 * @param {*} board
 * @returns
 */

function solution(board) {
    let oCount = 0,
        xCount = 0,
        oWin = false,
        xWin = false;

    board.forEach((line) => {
        for (let idx in line) {
            const word = line[idx];
            if (word === "O") oCount += 1;
            if (word === "X") xCount += 1;
        }
    });

    // 카운트 계산
    if (oCount > xCount + 1) return 0;
    if (oCount < xCount) return 0;

    // lime
    for (let y = 0; y < 3; y++) {
        let lineBingo = true;
        const firstWord = board[y][0];
        for (let x = 0; x < 3; x++) {
            const word = board[y][x];
            if (word !== firstWord) {
                lineBingo = false;
                break;
            }
        }

        if (lineBingo) {
            if (firstWord === "O") oWin = true;
            if (firstWord === "X") xWin = true;
        }
    }

    // column
    for (let x = 0; x < 3; x++) {
        let lineBingo = true;
        const firstWord = board[0][x];
        for (let y = 0; y < 3; y++) {
            const word = board[y][x];
            if (word !== firstWord) {
                lineBingo = false;
                break;
            }
        }

        if (lineBingo) {
            if (firstWord === "O") oWin = true;
            if (firstWord === "X") xWin = true;
        }
    }

    // left top to right bottom
    let lineBingo = true;
    const firstWord = board[0][0];
    for (let i = 0; i < 3; i++) {
        const word = board[i][i];
        if (word !== firstWord) {
            lineBingo = false;
            break;
        }
    }
    if (lineBingo) {
        if (firstWord === "O") oWin = true;
        if (firstWord === "X") xWin = true;
    }

    let lineBingo2 = true;
    const firstWord2 = board[0][2];
    for (let i = 0; i < 3; i++) {
        const word = board[i][2 - i];
        if (word !== firstWord2) {
            lineBingo2 = false;
            break;
        }
    }
    if (lineBingo2) {
        if (firstWord2 === "O") oWin = true;
        if (firstWord2 === "X") xWin = true;
    }

    if (oWin && xWin) return 0;
    if (oCount === xCount && oWin) return 0;
    if (oCount === xCount + 1 && xWin) return 0;
    return 1;
}

console.log(solution(["O.X", ".O.", "..X"]));
