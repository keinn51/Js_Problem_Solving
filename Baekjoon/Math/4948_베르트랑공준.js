const inputArr = require('fs').readFileSync('text.txt').toString().trim().split('\n');

/**
 * * 개념 분석
 * 소수란, 1과 자기 자신으로 밖에 나누어지지 않는 수
 * - 1은 소수가 아니다
 * * 로직 생각
 * iterate하면서 소수 찾음. 이 때, 두 숫자의 중간까지만 돌아도 됨
 */

inputArr.pop()

// 소수 찾는 함수

function isSosu(num) {
    let currNum = 2;
    if (num === 1) return false
    while(currNum <= (num / 2)) {
        if (num % currNum === 0) return false;
        currNum++;
    }
    return true;
}

// console.log(isSosu(10))
// console.log(isSosu(3))
// console.log(isSosu(2))
// console.log(isSosu(1))

// iterate하면서 소수 찾음. 이 때, 두 숫자의 중간까지만 돌아도 됨

function getSosuArr(maxNum) {
    let currNum = 2;
    const resultArr = [];
    while(currNum <= (maxNum)) {
        if (isSosu(currNum)) resultArr.push(currNum);
        currNum +=1 
    }
    return resultArr
}

// console.log(getSosuArr(26))

const newArr = [...inputArr];
newArr.sort((a,b) => b - a);
const sosuArr = getSosuArr(Number(newArr[0]) * 2);

console.log(inputArr.map((num) => {
    let currNum = +num;
    const endNum = 2 * Number(num);
    let result = 0;
    currNum +=1;
    while (currNum <= endNum) {
        if (sosuArr.includes(currNum)) result += 1
        currNum += 1
    }
    return result;
}).join('\n'))

// ! 너무 느림. ON3의 알고리즘을 가지고 있다.
