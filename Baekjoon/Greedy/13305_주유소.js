function solution(input) {
    const centerCount = Number(input[0]);
    const roads = input[1].split(" ").map((e) => BigInt(e)); //0 1 2
    const centers = input[2].split(" ").map((e) => BigInt(e)); // 0 1 2 3
    let nowMoney = centers[0],
        stackMoney = BigInt(0);
    for (let ii = 0; ii < centerCount - 1; ii++) {
        const _money = centers[ii];
        if (_money < nowMoney) nowMoney = _money;
        stackMoney += nowMoney * roads[ii];
    }
    console.log(stackMoney.toString());
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
