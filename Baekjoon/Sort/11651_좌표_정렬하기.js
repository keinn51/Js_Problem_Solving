/**
 *
 */
function solution(input) {
    const [N, ...arr] = input;
    const entries = arr.map((nums) => nums.split(" ").map((e) => +e));

    entries.sort((a, b) => {
        if (Number(a[1]) > Number(b[1])) return 1;
        if (Number(a[1]) < Number(b[1])) return -1;
        if (Number(a[0]) > Number(b[0])) return 1;
        if (Number(a[0]) < Number(b[0])) return -1;
        return 0;
    });

    console.log(entries.map((e) => e.join(" ")).join("\n"));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
