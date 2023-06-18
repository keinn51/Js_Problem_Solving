const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");
/**
 * 1. map을 그린다. 숫자로 가득 채워놓는다
 * 2. 부르는 수에 맞는 map의 위치는 null로 채운다.
 *      만약 해당 수를 넣고 빙고가 되었는지 살펴본다.
 *      대부분 수직-수평 빙고만 확인하면 되는데, 대각선 빙고도 체크해야할 곳이 있다.
 *      x === y 이거나 n - x === y 일 때이다. 이 때에만 대각선 빙고를 체크한다. (함수로 미리 만들면 편할듯)
 * 3. 이미 빙고였던 것은 체크하면 안 되니까 기억해두어야 함
 *      bingoBoard에 추가해두면 될 듯
 *      count도 만들어서 빙고 개수 세어주다가 3되면 리턴때리기
 */

function checkBingo(map, x, y) {
    const n = map[0].length;
    let vBingo = true,
        pBingo = true;
    for (let _x = 0; _x < n; _x++) {
        if (map[_x][y] !== null) vBingo = false;
    }
    for (let _y = 0; _y < n; _y++) {
        if (map[x][_y] !== null) pBingo = false;
    }
    // 대각선 빙고 확인
    let ldBingo = false,
        rdBingo = false;
    if (x === y) {
        rdBingo = true;
        for (let _xy = 0; _xy < n; _xy++) {
            if (map[_xy][_xy] !== null) rdBingo = false;
        }
    }
    if (n - (x + 1) === y) {
        ldBingo = true;
        for (let _i = 0; _i < n; _i++) {
            if (map[_i][n - _i - 1] !== null) ldBingo = false;
        }
    }

    return { v: vBingo, p: pBingo, ld: ldBingo, rd: rdBingo };
}

function solution(board, calls) {
    let count = 0,
        bingoStatus = { v: {}, p: {}, ld: false, rd: false },
        idxStatus = {};
    board = board.map((line) => line.split(" "));
    calls = calls.map((line) => line.split(" "));
    board.forEach((_arr, i) => {
        _arr.forEach((num, j) => {
            idxStatus[num] = [i, j];
        });
    });
    for (let i = 0; i < 5; i++) {
        bingoStatus.v[i] = false;
        bingoStatus.p[i] = false;
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const call = calls[i][j];
            const [x, y] = idxStatus[call];
            board[x][y] = null;
            const res = checkBingo(board, x, y);
            if (res.v === true) {
                if (bingoStatus.v[y] === false) count += 1;
                bingoStatus.v[y] = true;
            }
            if (res.p === true) {
                if (bingoStatus.p[x] === false) count += 1;
                bingoStatus.p[x] = true;
            }
            if (res.ld === true) {
                if (bingoStatus.ld === false) count += 1;
                bingoStatus.ld = true;
            }
            if (res.rd === true) {
                if (bingoStatus.rd === false) count += 1;
                bingoStatus.rd = true;
            }
            if (count >= 3) {
                return 5 * i + (j + 1);
            }
        }
    }
}

console.log(solution(input.slice(0, 5), input.slice(5, input.length)));
