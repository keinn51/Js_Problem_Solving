function getCount(startX, startY, maps, target) {
    const visitMap = new Array(maps.length)
        .fill(null)
        .map((_) => new Array(maps[0].length).fill("O"));
    const stampMap = new Array(maps.length)
        .fill(null)
        .map((_) => new Array(maps[0].length).fill(0));
    const needVisitArr = [[startX, startY]];
    const roundVisitArr = [];
    visitMap[startY][startX] = "V";
    const width = maps[0].length,
        height = maps.length;
    let count = -1;
    while (needVisitArr.length) {
        const [x, y] = needVisitArr.pop();
        const dx = [1, 0, -1, 0];
        const dy = [0, 1, 0, -1];

        if (maps[y][x] === target) {
            count = stampMap[y][x];
            startX = x;
            startY = y;
            break;
        }
        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];
            if (
                newX >= 0 &&
                newX < width &&
                newY >= 0 &&
                newY < height &&
                maps[newY][newX] !== "X" &&
                visitMap[newY][newX] !== "V"
            ) {
                visitMap[newY][newX] = "V";
                stampMap[newY][newX] = stampMap[y][x] + 1;
                roundVisitArr.push([newX, newY]);
            }
        }
        if (needVisitArr.length === 0) {
            while (roundVisitArr.length) needVisitArr.push(roundVisitArr.pop());
        }
    }
    if (count === -1) return [-1, startX, startY];
    return [count, startX, startY];
}

function solution(maps) {
    let startX, startY;
    maps.forEach((line, y) => {
        const x = line.indexOf("S");
        if (x !== -1) {
            startX = x;
            startY = y;
        }
    });

    let [lCnt, lX, lY] = getCount(startX, startY, maps, "L");
    if (lCnt === -1) return -1;
    let [eCnt] = getCount(lX, lY, maps, "E");
    if (eCnt === -1) return -1;
    return lCnt + eCnt;
}

// solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]);
// solution(["OXXOS", "OLXOX", "OOOOO", "XOOXO", "OXOEO"]);
// solution(["OOOOS", "XXXOO", "LOEOO", "XXXOO", "OOOOO"]);
// solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]);
// solution(["OOOOOL", "OXOXOO", "OOSXOX", "OXXXOX", "EOOOOX"]);
