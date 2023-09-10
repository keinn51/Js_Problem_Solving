function solution(input) {
    const width = Number(input[0]);
    const map = [];

    for (let i = 0; i < width; i++) {
        const line = input[i + 1];
        map[i] = line.split("").map((e) => +e);
    }

    const result = [];

    const iter = (map, x, y, width) => {
        let count = 0;
        if (map[y][x]) {
            count += 1;
            map[y][x] = null;
            if (x > 0) count += iter(map, x - 1, y, width);
            if (x < width - 1) count += iter(map, x + 1, y, width);
            if (y > 0) count += iter(map, x, y - 1, width);
            if (y < width - 1) count += iter(map, x, y + 1, width);
        }
        return count;
    };

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < width; y++) {
            if (map[y][x]) {
                const count = iter(map, x, y, width);
                if (count > 0) result.push(count);
            }
        }
    }

    console.log(result.length);
    result.sort((a, b) => a - b);
    if (result.length > 0) {
        result.forEach((r) => console.log(r));
    }
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
