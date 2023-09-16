function solution(input) {
    const [N, ...arr] = input;
    const sorted = arr.map((m) => m.split(" ").map((e) => +e));
    sorted.sort((a, b) => {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        return 0;
    });
    console.log(sorted.map((l) => l.join(" ")).join("\n"));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
