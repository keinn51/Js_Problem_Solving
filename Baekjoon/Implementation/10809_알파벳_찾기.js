function solution(input) {
    const words = input[0];
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const mirror = {};
    const stack = [];
    for (let index in alpha) {
        const word = alpha[index];
        mirror[word] = -1;
    }
    for (let index in words) {
        const word = words[index];
        if (mirror[word] === -1) mirror[word] = index;
    }
    for (let index in alpha) {
        const word = alpha[index];
        stack.push(mirror[word]);
    }
    console.log(stack.join(" "));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
