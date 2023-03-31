// function solution(picks, minerals) {
//     /**
//      * 캔 미네랼 요소에는 undefined
//      *
//      */
//     let i = 0;
//     const countObj = { diamond: 2, iron: 1, stone: 0 };
//     let res = 0;
//     picks.forEach((pick, _order) => {
//         if (pick !== 0) {
//             const newOd = 2 - _order;
//             for (let j = 0; j < 5; j++) {
//                 res += Math.pow(5, newOd - countObj[minerals[i]]);
//                 i++;
//             }
//             picks[_order] -= 1;
//             if (pick !== 0) {
//             }
//         }
//     });
// }

function solution(picks, minerals) {
    const countObj = { diamond: 0, iron: 1, stone: 2 };
    let total = minerals.length * 25;
    function iter(newPick, idx, res) {
        let innerIdx = 0;
        for (let pick in newPick) {
            if (newPick[innerIdx] !== 0) {
                for (let j = 0; j < 5; j++) {
                    // 광물을 다 캔 경우
                    if (idx + j >= minerals.length) {
                        total = Math.min(total, res);
                        return;
                    }
                    let jisu = innerIdx - countObj[minerals[idx + j]];
                    if (jisu < 0) jisu = 0;
                    res += Math.pow(5, jisu);
                }
                const newTemp = [...newPick];
                newTemp[innerIdx] -= 1;
                iter(newTemp, idx + 5, res);
            }
            innerIdx++;
        }
        // 곡갱이를 다 쓴 경우
        total = Math.min(total, res);
    }
    iter([...picks], 0, 0);
    return total;
}

console.log(
    solution(
        [1, 3, 2],
        ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]
    )
);

console.log(
    solution(
        [0, 1, 1],
        [
            "diamond",
            "diamond",
            "diamond",
            "diamond",
            "diamond",
            "iron",
            "iron",
            "iron",
            "iron",
            "iron",
            "diamond",
        ]
    )
);
