function solution(commands) {
    const map = new Array(51).fill(0).map((_) => new Array(51).fill(null));
    const result = [];

    commands.forEach((cmdLine) => {
        const splittedArr = cmdLine.split(" ");
        const command = splittedArr.shift();
        const merge = [];
        if (command === "UPDATE") {
            if (splittedArr.length === 3) {
                const [r, c, value] = splittedArr;
                map[r][c] = value;
            } else if (splittedArr.length === 2) {
                const [value1, value2] = splittedArr;
                for (let i = 1; i < 51; i++) {
                    for (let j = 1; j < 51; j++) {
                        if (map[i][j] === value1) map[i][j] = value2;
                    }
                }
            }
        } else if (command === "MERGE") {
            const [r1, c1, r2, c2] = splittedArr;
            if (r1 === r2 && c1 === c2) return;
            let newVal;

            if (map[r1][c1] === null && map[r2][c2] === null) newVal = null;
            else if (map[r1][c1] !== null && map[r2][c2] !== null) newVal = map[r1][c1];
            else if (map[r1][c1] !== null) newVal = map[r1][c1];
            else if (map[r2][c2] !== null) newVal = map[r2][c2];

            if (merge.length > 1) {
                for (let i = 0; i < merge.length; i++) {
                    const group = merge[i];
                    let isEnd = false;
                    for (let j = 0; j < group.length; j++) {
                        if (group[j][0] === r2 && group[j][1] === c2) {
                            group.push([r2, c2]);
                            isEnd = true;
                            map[r1][c1];
                            break;
                        }
                    }
                    if (isEnd === true) return;
                    if (i === merge.length - 1)
                        merge.push([
                            [r1, c1],
                            [r2, c2],
                        ]);
                }
            } else {
                map[r1][c1] = newVal;
                map[r2][c2] = newVal;
                merge.push([
                    [r1, c1],
                    [r2, c2],
                ]);
            }
        } else if (command === "UNMERGE") {
            const [r, c] = splittedArr;

            if (merge.length > 1) {
                for (let i = 0; i < merge.length; i++) {
                    const group = merge[i];
                    let isEnd = false;
                    let deleteIdx = -1;
                    for (let j = 0; j < group.length; j++) {
                        if (group[j][0] === r && group[j][1] === c) {
                            deleteIdx = i;
                            isEnd = true;
                            group.forEach(([_r, _c]) => {
                                if (_r !== r || _c !== c) {
                                    map[_r][_c] = null;
                                }
                            });
                            break;
                        }
                    }
                    if (isEnd === true) {
                        merge.splice(i, 1);
                        return;
                    }
                }
            }
        } else if (command === "PRINT") {
            const [r, c] = splittedArr;
            if (map[r][c]) result.push(map[r][c]);
            else result.push("EMPTY");
        }
    });
    console.log(map.toString(), map[1][3], map[1][4]);
    return result;
}

console.log(
    solution([
        "UPDATE 1 1 menu",
        "UPDATE 1 2 category",
        "UPDATE 2 1 bibimbap",
        "UPDATE 2 2 korean",
        "UPDATE 2 3 rice",
        "UPDATE 3 1 ramyeon",
        "UPDATE 3 2 korean",
        "UPDATE 3 3 noodle",
        "UPDATE 3 4 instant",
        "UPDATE 4 1 pasta",
        "UPDATE 4 2 italian",
        "UPDATE 4 3 noodle",
        "MERGE 1 2 1 3",
        "MERGE 1 3 1 4",
        "UPDATE korean hansik",
        "UPDATE 1 3 group",
        "UNMERGE 1 4",
        "PRINT 1 3",
        "PRINT 1 4",
    ])
);
