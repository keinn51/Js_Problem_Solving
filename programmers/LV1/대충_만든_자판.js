/**
 *
 * @param {*} keymap
 * @param {*} targets
 * @returns
 */
function solution(keymap, targets) {
    const idxObj = {},
        resArr = [];
    keymap.forEach((line) => {
        for (let idx in line) {
            const word = line[idx];
            if (idxObj[word]) idxObj[word] = Math.min(idxObj[word], Number(idx) + 1);
            else idxObj[word] = Number(idx) + 1;
        }
    });

    for (let i = 0; i < targets.length; i++) {
        let res = 0,
            isErr = false;
        const line = targets[i];
        for (let idx in line) {
            const word = line[idx];
            if (!idxObj[word]) {
                resArr.push(-1);
                isErr = true;
                break;
            }
            res += idxObj[word];
        }
        if (!isErr) resArr.push(res);
    }

    return resArr;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
