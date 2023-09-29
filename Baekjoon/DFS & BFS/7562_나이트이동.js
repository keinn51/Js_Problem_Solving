/**
 * N 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 G 0 0
 * 0 0 0 0 0 0 0 0
 */

function solution(input) {
    let num = Number(input[0]);
    let index = 1;

    for (let i = 0; i < num; i++) {
        let board_size = Number(input[index]);
        let board = new Array(board_size);
        for (let j = 0; j < board.length; j++) {
            board[j] = new Array(board_size).fill(0);
        }
        let [start_x, start_y] = input[index + 1].split(" ").map(Number);
        let [end_x, end_y] = input[index + 2].split(" ").map(Number);
        board[start_x][start_y] = 1;
        function BFS() {
            let count = 0;
            let dx = [2, 2, -2, -2, 1, 1, -1, -1];
            let dy = [1, -1, 1, -1, 2, -2, 2, -2];
            let queue = [[start_x, start_y]];
            while (queue.length) {
                let temp = [];
                let len = queue.length;
                for (let i = 0; i < len; i++) {
                    let [vx, vy] = queue[i];
                    if (vx === end_x && vy === end_y) {
                        return count;
                    }
                    for (let i = 0; i < 8; i++) {
                        let nx = vx + dx[i];
                        let ny = vy + dy[i];
                        if (
                            nx >= 0 &&
                            nx < board_size &&
                            ny >= 0 &&
                            ny < board_size &&
                            board[nx][ny] === 0
                        ) {
                            board[nx][ny] = 1;
                            temp.push([nx, ny]);
                        }
                    }
                }
                count++;
                queue = [...temp];
                temp = null;
            }
        }
        console.log(BFS());
        index += 3;
    }
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);

module.exports = solution;
