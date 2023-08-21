const dfs = (map, v) => {
    if (!map[v]) {
        console.log(v);
        return;
    }
    const visits = { [v]: true };
    const stack = [v];
    const _iter = (target) => {
        target.forEach((val) => {
            if (visits[val]) return;
            visits[val] = true;
            stack.push(val);
            _iter(map[val]);
        });
    };
    _iter(map[v]);
    console.log(stack.join(" "));
};

const bfs = (map, v) => {
    if (!map[v]) {
        console.log(v);
        return;
    }
    const visits = { [v]: true };
    const stack = [v];
    const needVisitArr = [...map[v]];

    while (needVisitArr.length > 0) {
        const num = needVisitArr.shift();
        if (visits[num]) continue;
        visits[num] = true;
        stack.push(num);
        needVisitArr.push(...map[num]);
    }

    console.log(stack.join(" "));
};

function solution(input) {
    // map 만들기
    const [n, m, v] = input
        .shift()
        .split(" ")
        .map((e) => +e);
    const map = {};
    for (let ii = 0; ii < input.length; ii++) {
        const [key, value] = input[ii].split(" ").map((e) => +e);
        if (map[key] === undefined) map[key] = new Set([value]);
        if (map[value] === undefined) map[value] = new Set([key]);
        map[key].add(value);
        map[value].add(key);
    }
    for (let index in map) {
        map[index] = Array.from(map[index]);
        map[index].sort((a, b) => a - b);
    }
    dfs(map, v);
    bfs(map, v);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
