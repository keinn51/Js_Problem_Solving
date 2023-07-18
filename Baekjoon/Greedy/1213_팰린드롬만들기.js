function solution(input) {
    const [words] = input;
    const checker = {};
    let oddAlpha = null;
    for (let idx in words) {
        const word = words[idx];
        if (checker[word]) checker[word] += 1;
        else checker[word] = 1;
    }
    const keys = Object.keys(checker).sort((a, b) => (a > b ? 1 : -1));
    if (
        keys.reduce((prev, curr) => {
            if (checker[curr] % 2 === 1) {
                oddAlpha = curr;
                return prev + 1;
            }
            return prev;
        }, 0) >= 2
    ) {
        console.log("I'm Sorry Hansoo");
        return;
    }
    if (oddAlpha) checker[oddAlpha] -= 1;
    let head = "",
        tail = "";
    keys.forEach((key) => {
        head += key.repeat(checker[key] / 2);
        tail = key.repeat(checker[key] / 2) + tail;
    });
    console.log(head + (oddAlpha || "") + tail);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
