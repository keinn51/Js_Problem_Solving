const tempUser = [
    [40, 10000],
    [25, 10000],
];
const tempEmo = [7000, 9000];

// * start
const possibleDisCount = [10, 20, 30, 40];
let index = 0;

const iterForDisCountArr = (startDis, arrLen, result) => {
    // ! DFS 를 해야 해서 잡시 쉬어갑니다
    for (i = startDis; i <= 40; i += 10) {
        result[index].push(i);
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
    // console.log(minDisCount); //good
};

function solution(users, emoticons) {
    let answer = [];
    return answer;
}

makeDisCountArrFromUser(tempUser);
