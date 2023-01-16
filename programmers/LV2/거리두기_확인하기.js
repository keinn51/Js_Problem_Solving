function solution(places) {
    const dx = [1, 0, -1, 0];
    const dy = [0, -1, 0, 1];
    const ROOM_COUNT = 5;

    return places.map((place) => {
        const queue = [];

        for (let i = 0; i < ROOM_COUNT; i++) {
            for (let j = 0; j < ROOM_COUNT; j++) {
                if (place[i][j] === "P") {
                    queue.push([i, j]);
                }
            }
        }

        while (queue.length) {
            const [i, j] = queue.shift();
            for (let k = 0; k < 4; k++) {
                const nx = i + dx[k];
                const ny = j + dy[k];
                if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
                if (place[nx][ny] === "X") continue;
                if (place[nx][ny] === "P") return 0;
                for (let l = 0; l < 4; l++) {
                    const newNx = nx + dx[l];
                    const newNy = ny + dy[l];
                    if (newNx < 0 || newNx >= 5 || newNy < 0 || newNy >= 5) continue;
                    if (newNx === i && newNy === j) continue;
                    if (place[newNx][newNy] === "P") return 0;
                }
            }
        }
        return 1;
    });
}

function temp(places) {
    const dx = [1, 0, -1, 0];
    const dy = [0, -1, 0, 1];
    const ROOM_COUNT = 5;
    const notVisitIndex = {
        0: 2,
        1: 3,
        2: 0,
        3: 1,
    };

    // const result = [];

    let i = 0,
        j = 0;
    while (i < places.length) {
        while (j < ROOM_COUNT) {
            console.log("i", i, "j", j);
            if (places[i][j] === "P") {
                for (let k = 0; k < 4; k++) {
                    if (
                        places[i + dy[k]] === undefined ||
                        places[i + dy[k]][j + dx[k]] === undefined ||
                        places[i + dy[k]][j + dx[k]] === "X"
                    )
                        continue;
                    else if (places[i + dy[k]][j + dx[k]] === "P") return 0;
                    else {
                        for (let l = 0; l < 4; l++) {
                            if (l === notVisitIndex[k]) continue;
                            if (
                                places[i + dy[k] + dy[l]] === undefined ||
                                places[i + dy[k] + dy[l]][j + dx[k] + dx[l]] === undefined
                            )
                                continue;
                            if (places[i + dy[k] + dy[l]][j + dx[k] + dx[l]] === "P") return 0;
                        }
                    }
                }
            }
            j++;
        }
        i++;
    }
    return 1;
}

// console.log(temp(["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"]));

console.log(
    solution([
        ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
        ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
        ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
        ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
        ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
        // ["PPPPP", "PPPPP", "PPPPP", "PPPPP", "PPPPP"],
        // ["XXXXX", "XXXXX", "XXXXX", "XXXXX", "XXXXX"],
    ])
);
