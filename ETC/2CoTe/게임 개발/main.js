/**
 *  a : height
 *  b: widtj
 * 왼쪽으로 돈다 무조건, 왼쪽에 없으면 왼 쪽으로 한 번더 간다.
 * 있으면 해당 방향으로 움직인다.
 * 그냥 dfs네?
 *
 */
const solution = (input) => {
    input = input.split("\n");
    const [height, width] = input[0].split(" ");
    const [sy, sx, sp] = input[1].split(" ");
    const map = [];
    for (let i = 2; i < input.length; i++) {
        map.push(input[i].split(" "));
    }
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    let count = 0;
    const iter = (x, y) => {
        count++;
        map[y][x] = "1";
        for (let i = 0; i < 4; i++) {
            const nx = Number(x) + dx[i];
            const ny = Number(y) + dy[i];
            if (ny >= 0 && ny < height && nx >= 0 && nx < width && map[ny][nx] !== "1") {
                iter(nx, ny);
            }
        }
    };
    iter(sx, sy);
    console.log("count", count);
};

solution(`4 4
1 1 0
1 1 1 1
1 0 0 1
1 1 0 1
1 1 1 1`);
