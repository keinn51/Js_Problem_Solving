function solution(input) {
    let target = Number(input[0].split(" ")[1]);
    let count = 0;
    for (let ii = input.length - 1; ii >= 1; ii--) {
        if (target === 0) break;
        while (Number(input[ii]) <= Number(target)) {
            const mok = Math.floor(Number(target) / Number(input[ii]));
            target -= mok * Number(input[ii]);
            count += mok;
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
