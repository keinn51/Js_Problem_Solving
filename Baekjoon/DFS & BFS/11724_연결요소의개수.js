/**
 * 일단 주어진 정보들로 간선 자료구조를 만드는 것이 중요
 * 1 : [2,5]
 * 2 : [1, 5]
 * 3 : [4]
 * ....
 *
 * 자료구조를 순회하면서 연결 개수를 체크하면 됨
 */

function solution(input) {
    const [info, ...arr] = input;
    const [N, M] = info.split(" ").map((e) => +e);
    const mirror = {};
    const visit = {}; // visit 을 true로 만들고, true인 곳은 가지 않기로 한다.
    let count = 0;

    for (let key = 1; key <= N; key++) {
        mirror[key] = [];
        visit[key] = false;
    }

    arr.forEach((info) => {
        const [a, b] = info.split(" ").map((e) => +e);
        mirror[a].push(b);
        mirror[b].push(a);
    });

    while (1) {
        const needToVisit = []; // visit 에서 아직 안 들어간 것 중 아무거나 하나

        for (let key in visit) {
            if (visit[key] === false) {
                needToVisit.push(key);
                break;
            }
        }

        if (needToVisit.length === 0) break;

        while (needToVisit.length > 0) {
            const _key = needToVisit.pop();
            visit[_key] = true;

            mirror[_key].forEach((_next) => {
                if (visit[_next] === true) return;
                needToVisit.push(_next);
            });
        }

        count += 1;
    }

    console.log(count);
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split(`\n`)
);
