// dfs

function solution(maps) {
    const graph = [];
    const limHei = maps.length;
    const limWid = maps[0].length;

    for (let i = 0; i < limHei; i++) {
        graph.push([]);
        for (let j = 0; j < limWid; j++) {
            graph[i][j] = maps[i][j];
        }
    }

    const px = [1, 0, -1, 0];
    const py = [0, 1, 0, -1];
    let total = 10001;

    function iter(x, y, cnt) {
        for (let i = 0; i < 4; i++) {
            let dx, dy;

            dx = x + px[i];
            dy = y + py[i];
            if (dx >= 0 && dx < limHei && dy >= 0 && dy < limWid) {
                if (dx === limHei - 1 && dy === limWid - 1) {
                    total = Math.min(total, cnt + 1);
                    return;
                }
                if (graph[dx][dy] === 1) {
                    graph[dx][dy] = 0;
                    iter(dx, dy, cnt + 1);
                    graph[dx][dy] = 1;
                }
            }
        }
    }
    iter(0, 0, 1);
    if (total === 10001) return -1;
    return total;
}

//bfs

function solution(maps) {
    const limHei = maps.length;
    const limWid = maps[0].length;

    const px = [1, 0, -1, 0];
    const py = [0, 1, 0, -1];
    const needVisitArr = [[0, 0]];

    while (needVisitArr.length > 0) {
        let [x, y] = needVisitArr.shift();
        for (let i = 0; i < 4; i++) {
            let dx, dy;

            dx = x + px[i];
            dy = y + py[i];
            if (dx >= 0 && dx < limHei && dy >= 0 && dy < limWid) {
                if (dx === limHei - 1 && dy === limWid - 1) {
                    return maps[x][y] + 1;
                }
                if (maps[dx][dy] === 1) {
                    maps[dx][dy] = maps[x][y] + 1;
                    needVisitArr.push([dx, dy]);
                }
            }
        }
    }
    return -1;
}
