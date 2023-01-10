const input = require("fs").readFileSync("text.txt").toString().trim().split("\n");

input.pop();

const checkAround = (i, j, map) => {
    /**
     * - map[i][j]가 1이면 재귀, 0이면 지나감
     */
    map[i][j] = 0;
    if (map[i - 1] !== undefined) {
        if (map[i - 1][j - 1] !== undefined && map[i - 1][j - 1] === 1)
            checkAround(i - 1, j - 1, map);
        if (map[i - 1][j] !== undefined && map[i - 1][j] === 1) checkAround(i - 1, j, map);
        if (map[i - 1][j + 1] !== undefined && map[i - 1][j + 1] === 1)
            checkAround(i - 1, j + 1, map);
    }
    if (map[i + 1] !== undefined) {
        if (map[i + 1][j - 1] !== undefined && map[i + 1][j - 1] === 1)
            checkAround(i + 1, j - 1, map);
        if (map[i + 1][j] !== undefined && map[i + 1][j] === 1) checkAround(i + 1, j, map);
        if (map[i + 1][j + 1] !== undefined && map[i + 1][j + 1] === 1)
            checkAround(i + 1, j + 1, map);
    }
    if (map[i][j - 1] !== undefined && map[i][j - 1] === 1) checkAround(i, j - 1, map);
    if (map[i][j + 1] !== undefined && map[i][j + 1] === 1) checkAround(i, j + 1, map);
};

const getNum = (widht, height, map) => {
    let result = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < widht; j++) {
            if (map[i][j] === 1) {
                result += 1;
                checkAround(i, j, map);
            }
        }
    }
    return result;
};

const getResult = () => {
    let resultArr = [];
    for (let i = 0; i < input.length; i++) {
        const entry = input[i].split(" ").map((str) => Number(str));
        const [widht, height] = entry;
        const startIdx = i + 1;
        const endIdx = startIdx + height;
        const newMap = [];
        for (let j = startIdx; j < endIdx; j++) {
            newMap.push(input[j].split(" ").map((str) => Number(str)));
        }
        resultArr.push(getNum(widht, height, newMap));
        i += height;
    }
    console.log(resultArr.join("\n"));
};

getResult();
