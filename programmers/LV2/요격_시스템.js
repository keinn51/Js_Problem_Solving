// 1차 시도 실패
function solution(targets) {
    targets.sort((a, b) => {
        const [startA, endA] = a;
        const [startB, endB] = b;
        if (startA !== startB) return startA - startB;
        if (endA !== endB) return endA - endB;
        return 0;
    });
    const deleteChart = {};
    let startLim = 100000000,
        endLim = 0;
    targets.forEach(([start, end]) => {
        if (deleteChart[start]) deleteChart[start].push(end);
        else deleteChart[start] = [end];
        startLim = Math.min(startLim, start);
        endLim = Math.max(endLim, end);
    });
    const shotChart = {};
    const seChart = {};
    Object.keys(deleteChart).forEach((start) => {
        deleteChart[start].forEach((end) => {
            for (let i = start; i < end; i++) {
                if (shotChart[i]) shotChart[i].push([start, end]);
                else shotChart[i] = [[start, end]];
            }
            if (seChart[start]) seChart[start] += 1;
            else seChart[start] = 1;
            if (seChart[end - 1]) seChart[end - 1] += 1;
            else seChart[end - 1] = 1;
        });
    });
    const manyChart = {};
    Object.keys(shotChart).forEach((key) => {
        const many = shotChart[key].length;
        if (manyChart[many]) manyChart[many][key] = shotChart[key];
        else {
            manyChart[many] = {};
            manyChart[many][key] = shotChart[key];
        }
    });
    const manyKeyArr = Object.keys(manyChart).sort((a, b) => b - a);
    const manySeArr = Object.keys(seChart).sort((a, b) => b - a);
    let result = 0;
    let te = [];
    manyKeyArr.forEach((key) => {
        const _keyArr = Object.keys(manyChart[key]);
        _keyArr.sort((a, b) => seChart[b] - seChart[a]);
        te.push(_keyArr);
        // _key : 4 5 6 11
        _keyArr.forEach((_key) => {
            let res = 0;
            // manyChart[key][_key] : [["3",7],["4",5],["4",8]]
            manyChart[key][_key].forEach(([start, end]) => {
                deleteChart[start].forEach((_end) => {
                    if (end === _end) {
                        res += 1;
                        let idx = deleteChart[start].findIndex((el) => el === _end);
                        if (idx !== -1) deleteChart[start].splice(idx, 1);
                    }
                });
                // te.push([start, end, res, result])
            });
            if (res > 0) result += 1;
        });
    });

    return result;
}
