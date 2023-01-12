const tempUser = [
    [40, 10000],
    [25, 10000],
];
const tempEmo = [7000, 9000];

// * start
const possibleDisCount = [10, 20, 30, 40];
let index = 0;

const disCountCases = [];
const innerArr = [];

const iterForDisCountArr = (startIdx, depLen, depth) => {
    if (depth === depLen) {
        disCountCases.push([...innerArr]);
        return;
    }
    for (let i = startIdx; i < 4; i++) {
        innerArr[depth] = possibleDisCount[i];
        iterForDisCountArr(startIdx, depLen, depth + 1);
    }
};

const makeDisCountArrFromUser = (users) => {
    let minDisCount = 40;
    const userLen = users.length;
    const result = [];
    users.forEach((userArr) => {
        const newDisCount = Math.ceil(Number(userArr[0]) / 10) * 10;
        if (newDisCount < minDisCount) minDisCount = newDisCount;
    });
    const startIdx = possibleDisCount.indexOf(minDisCount);
    iterForDisCountArr(startIdx, userLen, 0);
};

function solution(users, emoticons) {
    let answer = [];
    return answer;
}

makeDisCountArrFromUser(tempUser);
console.log(disCountCases);
