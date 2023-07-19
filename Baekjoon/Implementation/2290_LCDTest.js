function printer(arr, s) {
    const barWidth = Number(s);
    const alphaTuple = new Array(2 * barWidth + 3)
        .fill(0)
        .map((_) => new Array(barWidth + 2).fill(0));
    const width = alphaTuple[0].length,
        height = alphaTuple.length,
        middleIdx = barWidth + 1;
    arr.forEach((number) => {
        switch (number) {
            case 1:
                for (let i = 1; i < width - 1; i++) alphaTuple[0][i] = "-";
                break;
            case 2:
                for (let i = 1; i < middleIdx; i++) alphaTuple[i][0] = "|";
                break;
            case 3:
                for (let i = 1; i < width - 1; i++) alphaTuple[middleIdx][i] = "-";
                break;
            case 4:
                for (let i = 1; i < middleIdx; i++) alphaTuple[i][width - 1] = "|";
                break;
            case 5:
                for (let i = middleIdx + 1; i < height - 1; i++) alphaTuple[i][0] = "|";
                break;
            case 6:
                for (let i = 1; i < width - 1; i++) alphaTuple[height - 1][i] = "-";
                break;
            case 7:
                for (let i = middleIdx + 1; i < height - 1; i++) alphaTuple[i][width - 1] = "|";
                break;
        }
    });

    return alphaTuple;
}

function solution(input) {
    const [s, n] = input[0].split(" ");

    const mirror = {
        0: [1, 2, 4, 5, 6, 7],
        1: [4, 7],
        2: [1, 4, 3, 5, 6],
        3: [1, 4, 3, 7, 6],
        4: [2, 3, 4, 7],
        5: [1, 2, 3, 7, 6],
        6: [1, 2, 3, 5, 6, 7],
        7: [1, 4, 7],
        8: [1, 2, 3, 4, 5, 6, 7],
        9: [1, 2, 3, 4, 6, 7],
    };

    const tuples = [];
    for (let idx in n) {
        const word = n[idx];
        tuples.push(printer(mirror[word], s));
    }

    for (let i = 0; i < 2 * Number(s) + 3; i++) {
        let res = "";
        tuples.forEach((tuple, idx) => {
            const blank = idx !== tuples.length - 1 ? " " : "";
            res += tuple[i].join("").replaceAll("0", " ") + blank;
        });
        console.log(res);
    }
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
