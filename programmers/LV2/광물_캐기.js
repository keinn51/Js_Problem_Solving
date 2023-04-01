// function solution(picks, minerals) {
//     let answer = 0;
//     const picksSum = picks.reduce((acc, cur) => acc + cur, 0);
//     console.log("picksSum", picksSum);
//     // 곡갱이의 개수 만큼 minerals를 자름
//     const slicedMinerals = minerals.slice(0, picksSum * 5);
//     console.log("slicedMinerals", slicedMinerals);
//     // 곡갱이로 캘 때 캐는 광물 종류를 배열 아이템으로 설정
//     const countedMinerals = slicedMinerals.reduce((acc, cur, idx) => {
//         const index = Math.floor(idx / 5);
//         if (!acc[index]) acc[index] = [0, 0, 0];
//         if (cur === "diamond") acc[index][0]++;
//         else if (cur === "iron") acc[index][1]++;
//         else if (cur === "stone") acc[index][2]++;
//         return acc;
//     }, []);
//     console.log("countedMinerals", countedMinerals);

//     // countedMinerals의 0번째 인덱스 역순으로 정렬
//     const sortedMinerals = countedMinerals.sort((a, b) => {
//         if (b[0] === a[0]) {
//             return b[1] - a[1];
//         }
//         return b[0] - a[0];
//     });
//     console.log("sortedMinerals", sortedMinerals);
//     console.log("picks", picks);

//     for (const [dia, iron, stone] of sortedMinerals) {
//         if (picks[0]) {
//             answer += dia + iron + stone;
//             picks[0]--;
//         } else if (picks[1]) {
//             answer += dia * 5 + iron + stone;
//             picks[1]--;
//         } else if (picks[2]) {
//             answer += dia * 25 + iron * 5 + stone;
//             picks[2]--;
//         }
//     }
//     return answer;
// }

function solution(picks, minerals) {
    const countObj = { diamond: 0, iron: 1, stone: 2 };
    let total = minerals.length * 25;
    const picksSum = picks.reduce((acc, cur) => acc + cur, 0);
    minerals = minerals.slice(0, picksSum * 5);
    function iter(newPick, idx, res) {
        // 광물을 딱 맞게 다 캔 경우
        if (idx >= minerals.length) {
            total = Math.min(total, res);
            return;
        }
        for (let innerIdx = 0; innerIdx <= 2; innerIdx++) {
            if (newPick[innerIdx] !== 0) {
                let innerRes = res;
                for (let j = 0; j < 5; j++) {
                    // 광물을 중간에 다 캔 경우
                    if (idx + j >= minerals.length) {
                        total = Math.min(total, innerRes);
                        return;
                    }
                    let jisu = innerIdx - countObj[minerals[idx + j]];
                    if (jisu < 0) jisu = 0;
                    innerRes += Math.pow(5, jisu);
                }
                const newTemp = [...newPick];
                newTemp[innerIdx] -= 1;
                iter(newTemp, idx + 5, innerRes);
            }
        }
    }
    iter([...picks], 0, 0);
    return total;
}

// console.log(
//     solution(
//         [1, 3, 2],
//         ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]
//     )
// );

// console.log(
//     solution(
//         [0, 1, 1],
//         [
//             "diamond",
//             "diamond",
//             "diamond",
//             "diamond",
//             "diamond",
//             "iron",
//             "iron",
//             "iron",
//             "iron",
//             "iron",
//             "diamond",
//         ]
//     )
// );
// console.log(
//     solution(
//         [1, 0, 1],
//         [
//             "diamond",
//             "diamond",
//             "diamond",
//             "diamond",
//             "diamond",
//             "iron",
//             "iron",
//             "iron",
//             "iron",
//             "iron",
//             "diamond",
//         ]
//     )
// );

// console.log(solution([0, 1, 0], ["stone", "stone", "stone", "stone", "stone"]));
// console.log(solution([0, 0, 1], ["stone", "stone", "stone", "stone", "stone"]));
// console.log(solution([0, 1, 0], ["diamond", "diamond", "diamond", "diamond", "diamond"]));
console.log(
    solution(
        [1, 1, 0],
        [
            "iron",
            "iron",
            "iron",
            "iron",
            "iron",
            "stone",
            "diamond",
            "diamond",
            "diamond",
            "diamond",
        ]
    )
);
