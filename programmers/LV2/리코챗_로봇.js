/**
 * 재귀문제 (dfs)
 * 일단 방문한 곳을 체크하는 map을 만들어야 함
 * 막혀있거나 끝이거나, 이미 왔던 방향은 가지 못 함
 *  나머지 방향으로, 장애물이나 끝이 될 때까지 전진
 *  전진이 끝나면 방문한 곳을 체크
 *  방문한 곳이 이전에 방문한 곳이라면 재귀를 나와야 함
 * 어딘가에서 goal에 도달했다면 도착한 발걸음 수를 저장
 * 모든 재귀가 끝났는데 발걸음 수가 기존과 같다면 -1 리턴
 *
 * 재귀함수 매개변수는 (x,y, 발걸음 수, 이전에 왔던 방향(e,w,s,n))
 *
 * ! 왜인지 73점 밖에 나오지 않음
 */

// function boardToString(arr) {
//     let res = "";
//     arr.forEach((line) => {
//         res += line.join("");
//         res += "\n";
//     });
//     return res;
// }

// function solution(board) {
//     const visitBoard = new Array(board.length).fill([]).map((line, idx) => {
//         return new Array(board[idx].length).fill("_");
//     });
//     let res = 100000000;
//     const width = board[0].length,
//         height = board.length;

//     let startX, startY;

//     board.forEach((line, y) => {
//         const x = line.indexOf("R");
//         if (x !== -1) {
//             startX = x;
//             startY = y;
//         }
//     });

//     function iter(x, y, count, dir) {
//         if (board[y][x] === "G") {
//             res = Math.min(res, count);
//             return;
//         }
//         if (count >= res) return;

//         visitBoard[y][x] = "V";
//         let ex = x,
//             wx = x,
//             sy = y,
//             ny = y;

//         while (ex < width - 1 && board[y][ex + 1] !== "D" && dir !== "w") ex += 1;
//         if (ex !== x && visitBoard[y][ex] === "_") iter(ex, y, count + 1, "e");
//         while (wx > 0 && board[y][wx - 1] !== "D" && dir !== "e") wx -= 1;
//         if (wx !== x && visitBoard[y][wx] === "_") iter(wx, y, count + 1, "w");
//         while (sy < height - 1 && board[sy + 1][x] !== "D" && dir !== "n") sy += 1;
//         if (sy !== y && visitBoard[sy][x] === "_") iter(x, sy, count + 1, "s");
//         while (ny > 0 && board[ny - 1][x] !== "D" && dir !== "s") ny -= 1;
//         if (ny !== y && visitBoard[ny][x] === "_") iter(x, ny, count + 1, "n");
//         visitBoard[y][x] = "_";
//     }

//     iter(startX, startY, 0, null);

//     if (res === 100000000) return -1;
//     return res;
// }

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
console.log(solution([".D.R", "..G.", "..D.", "...D"]));
console.log(solution([".D.R", "....", "..D.", "..GD"]));
console.log(solution([".D.R.", ".....", "..D..", "...D.", "D.G.."]));
console.log(solution(["GD.R.", ".....", "..D..", "...D.", "D...."]));
console.log(solution([".D.R.", "D....", "..D..", "...D.", "DG..."]));
console.log(solution([".D.R.", "D....", "..D..", ".G.D.", "....."]));
console.log(solution([".D.R..", "D.....", "..D..D", "...D.G", "......"]));
