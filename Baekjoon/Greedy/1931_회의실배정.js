function solution(input) {
    const [n, ...arr] = input;
    const map = arr.map((line) => line.split(" ").map((e) => +e));
    let nowTime = 0,
        count = 0;
    map.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        else return a[0] - b[0];
    });
    for (let i = 0; i < Number(n); i++) {
        const [start, end] = map[i];
        if (nowTime <= end && nowTime <= start) {
            count += 1;
            nowTime = end;
        }
    }
    console.log(count);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
