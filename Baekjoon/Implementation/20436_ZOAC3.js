const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

/**
 * 거리를 가는 x y 만큼 시간이 걸린다
 * 키를 누르는 데에 시간이 1 걸린다
 * 시간의 최솟값이라고는 하지만 딱히.. 그냥 걸리는 시간 구하면 됨
 * 최소랄만한게 없는게 어떤 문자를 먼저 입력할까? 도 아니고
 * 왼손 오른손 중에 가까운 것을 선택(그리디)도 아님
 * 그냥 걸리는 시간을 구하면 됨
 */

function solution() {
    let [nlword, nrword] = input.shift().split(" ");
    const str = input[0];
    const jaeum = {
        q: [0, 0],
        w: [1, 0],
        e: [2, 0],
        r: [3, 0],
        t: [4, 0],
        a: [0, 1],
        s: [1, 1],
        d: [2, 1],
        f: [3, 1],
        g: [4, 1],
        z: [0, 2],
        x: [1, 2],
        c: [2, 2],
        v: [3, 2],
    };
    const moeum = {
        y: [5, 0],
        u: [6, 0],
        i: [7, 0],
        o: [8, 0],
        p: [9, 0],
        h: [5, 1],
        j: [6, 1],
        k: [7, 1],
        l: [8, 1],
        b: [4, 2],
        n: [5, 2],
        m: [6, 2],
    };
    let count = 0;
    for (let idx in str) {
        count += 1;
        const _word = str[idx];
        if (jaeum[_word]) {
            const [wdposx, wdposy] = jaeum[_word];
            const [nlposx, nlposy] = jaeum[nlword];
            count += Math.abs(wdposx - nlposx) + Math.abs(wdposy - nlposy);
            nlword = _word;
        } else if (moeum[_word]) {
            const [wdposx, wdposy] = moeum[_word];
            const [nrposx, nrposy] = moeum[nrword];
            count += Math.abs(wdposx - nrposx) + Math.abs(wdposy - nrposy);
            nrword = _word;
        }
    }
    return count;
}

console.log(solution(input));
