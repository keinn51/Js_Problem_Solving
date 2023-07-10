const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";

function solution(input) {
    let [N, chains] = input;
    chains = chains.split(" ").map((e) => +e);
    chains.sort((a, b) => Number(a) - Number(b));
    let i = 0,
        count = 0;
    while (chains.length > 1) {
        if (chains[i] === 0) {
            i++;
            continue;
        }
        if (i >= chains.length) break;
        if (chains.length >= 2) {
            const a = chains.pop();
            const b = chains.pop();
            if (Number(b) === 0) break;
            chains.push(Number(a) + Number(b));
            count += 1;
            chains[i] -= 1;
        }
        if (chains.length === 1) break;
    }

    return count;
}

console.log(solution(require("fs").readFileSync(filename).toString().trim().split("\n")));
