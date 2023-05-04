// 1차 시도 실패
// function solution(targets) {
//     targets.sort((a, b) => {
//         const [startA, endA] = a;
//         const [startB, endB] = b;
//         if (startA !== startB) return startA - startB;
//         if (endA !== endB) return endA - endB;
//         return 0;
//     });
//     const deleteChart = {};
//     let startLim = 100000000,
//         endLim = 0;
//     targets.forEach(([start, end]) => {
//         if (deleteChart[start]) deleteChart[start].push(end);
//         else deleteChart[start] = [end];
//         startLim = Math.min(startLim, start);
//         endLim = Math.max(endLim, end);
//     });
//     const shotChart = {};
//     const seChart = {};
//     Object.keys(deleteChart).forEach((start) => {
//         deleteChart[start].forEach((end) => {
//             for (let i = start; i < end; i++) {
//                 if (shotChart[i]) shotChart[i].push([start, end]);
//                 else shotChart[i] = [[start, end]];
//             }
//             if (seChart[start]) seChart[start] += 1;
//             else seChart[start] = 1;
//             if (seChart[end - 1]) seChart[end - 1] += 1;
//             else seChart[end - 1] = 1;
//         });
//     });
//     const manyChart = {};
//     Object.keys(shotChart).forEach((key) => {
//         const many = shotChart[key].length;
//         if (manyChart[many]) manyChart[many][key] = shotChart[key];
//         else {
//             manyChart[many] = {};
//             manyChart[many][key] = shotChart[key];
//         }
//     });
//     const manyKeyArr = Object.keys(manyChart).sort((a, b) => b - a);
//     const manySeArr = Object.keys(seChart).sort((a, b) => b - a);
//     let result = 0;
//     let te = [];
//     manyKeyArr.forEach((key) => {
//         const _keyArr = Object.keys(manyChart[key]);
//         _keyArr.sort((a, b) => seChart[b] - seChart[a]);
//         te.push(_keyArr);
//         // _key : 4 5 6 11
//         _keyArr.forEach((_key) => {
//             let res = 0;
//             // manyChart[key][_key] : [["3",7],["4",5],["4",8]]
//             manyChart[key][_key].forEach(([start, end]) => {
//                 deleteChart[start].forEach((_end) => {
//                     if (end === _end) {
//                         res += 1;
//                         let idx = deleteChart[start].findIndex((el) => el === _end);
//                         if (idx !== -1) deleteChart[start].splice(idx, 1);
//                     }
//                 });
//                 // te.push([start, end, res, result])
//             });
//             if (res > 0) result += 1;
//         });
//     });

//     return result;
// }

function pasteDelChart(chart) {
    const newChart = {};
    Object.keys(chart).forEach((key) => {
        newChart[key] = [];
        chart[key].forEach((num) => {
            if (newChart[key]) newChart[key].push(num);
            else newChart[key] = [num];
        });
    });
    return newChart;
}

function checkEmpty(obj) {}

function solution(targets) {
    let deleteChart = {};
    targets.sort((a, b) => {
        const [startA, endA] = a;
        const [startB, endB] = b;
        if (startA !== startB) return startA - startB;
        if (endA !== endB) return endB - endA;
        return 0;
    });
    targets.forEach(([start, end]) => {
        if (deleteChart[start]) deleteChart[start].push(end);
        else deleteChart[start] = [end];
        // startLim = Math.min(startLim, start);
        // endLim = Math.max(endLim, end);
    });
    console.log("deleteChart", deleteChart);
    const lenChart = {};
    Object.keys(deleteChart).forEach((key) => {
        const arr = deleteChart[key];
        for (let i = arr.length - 1; i >= 0; i--) {
            const _len = arr[i] - Number(key);
            if (lenChart[_len]) lenChart[_len].push(Number(key));
            else lenChart[_len] = [Number(key)];
        }
    });
    console.log("lenChart", lenChart);
    console.log("pasteDelChart", pasteDelChart(deleteChart));
    let shotNum = 0,
        tempChart = {},
        result = 0;
    function iter(arr, key, num, deleteChart) {
        const _cpArr = [...arr]; // [11, 2]
        const startNum = _cpArr.pop(); //2
        if (deleteChart.length === 0) return true;
        else result += 1;
        console.log("_cpArr / delChart", _cpArr, deleteChart);
        // _cpArr = [11]
        // 2 ~ 4
        for (let i = startNum; i < startNum + Number(key); i++) {
            const _cpChart = pasteDelChart(deleteChart);
            // i ~ i+1 을 쏜 것
            // 쏴서 맞은 것들 딜리트 차트에서 없애기
            // 맞춘 것 num으로 추가하기
            // 바뀐 딜리트 차트 복사본도 재귀에 넘거야 함
            Object.keys(_cpChart).forEach((key) => {
                const _innerArr = _cpChart[key];
                _innerArr.forEach((_num) => {
                    const lastNum = _cpChart[key][_cpChart[key].length - 1];
                    // key : 1, lastNum : 4, i : 2
                    // _cpChart[1] : [4]
                    console.log("key / i / lastNum", key, i, lastNum, _cpChart);
                    if (Number(key) <= i && lastNum >= i + 1) {
                        _cpChart[key].pop();
                        num += 1;
                    }
                });
                // _cpChart[1] : []
            });
            console.log("num / chart", num, _cpChart);
            // num : 해당 i~i+1에서 맞은 값
            if (_cpArr.length) {
                if (iter(_cpArr, key, num, _cpChart)) return true;
            } else {
                if (num > shotNum) {
                    shotNum = num;
                    tempChart = _cpChart;
                }
            }
        }
        return false;
    }
    Object.keys(lenChart).forEach((key) => {
        console.log("lenChart[key]", lenChart[key]);
        if (iter(lenChart[key], key, 0, deleteChart)) {
            return result;
        }
        shotNum = 0;
        deleteChart = tempChart;
        tempChart = {};
        // 해당 길이의 차트에서 모든 딜리트 차트를 맞추었다면 최솟값을 반환하고 종료
        // 왜냐하면 이전 것들은 무조건 요격해야 하는 것들이기 때문
    });
    return 0;
}

console.log(
    "res",
    solution([
        [4, 5],
        [4, 8],
        [10, 14],
        [11, 13],
        [5, 12],
        [3, 7],
        [1, 4],
    ])
);
