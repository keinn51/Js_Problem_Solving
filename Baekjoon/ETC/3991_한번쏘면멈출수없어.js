function solution(input) {
    const [h, w, c] = input[0].split(" ").map((e) => +e);
    const colors = input[1].split(" ").map((e) => +e);
    const map = new Array(h).fill(0).map((_) => new Array(w).fill(0));

    let counter = 0,
        colorIdx = 0,
        colorCounter = 0;
    let x = 0,
        y = 0;

    while (counter < h * w) {
        if (colorCounter >= colors[colorIdx]) {
            colorCounter = 0;
            colorIdx += 1;
        }
        if (colorCounter < colors[colorIdx]) {
            map[y][x] = colorIdx + 1;
            colorCounter += 1;
        }

        if (x + 1 < w && map[y][x + 1] === 0) x += 1;
        else if (x > 0 && map[y][x - 1] === 0) x -= 1;
        else if (y + 1 < h && map[y + 1][x] === 0) y += 1;

        counter++;
    }
    map.forEach((line) => console.log(line.join("")));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
