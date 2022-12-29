// https://www.acmicpc.net/problem/2309

const input = require("fs").readFileSync("text.txt").toString().split("\n");

function checkSum100(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0) === 100;
}

function swapAndCheck(arr, idx, elem) {
  const tempArr = Object.assign([], arr);
  tempArr[idx] = elem;
  return checkSum100(tempArr);
}

function doubleSwapAndCheck(arr, idx1, idx2, elem1, elem2) {
  const tempArr = Object.assign([], arr);
  tempArr[idx1] = elem1;
  tempArr[idx2] = elem2;
  return checkSum100(tempArr);
}

function printResult(intArr) {
  intArr.forEach((elem) => console.log(elem));
}

function getNanjang_e() {
  const intArr = [];
  let OtherNUM1;
  let OtherNUM2;

  for (i = 0; i < 9; i++) {
    intArr.push(parseInt(input[i]));
  }
  intArr.sort((a, b) => a - b);
  OtherNUM2 = intArr.pop();
  OtherNUM1 = intArr.pop();
  if (!checkSum100(intArr)) {
    for (i = 0; i < 7; i++) {
      if (swapAndCheck(intArr, i, OtherNUM1)) {
        intArr[i] = OtherNUM1;
        intArr.sort((a, b) => a - b);
        return printResult(intArr);
      }
      if (swapAndCheck(intArr, i, OtherNUM2)) {
        intArr[i] = OtherNUM2;
        intArr.sort((a, b) => a - b);
        return printResult(intArr);
      }
      for (j = i + 1; j < 7; j++) {
        if (doubleSwapAndCheck(intArr, i, j, OtherNUM1, OtherNUM2)) {
          intArr[i] = OtherNUM1;
          intArr[j] = OtherNUM2;
          intArr.sort((a, b) => a - b);
          return printResult(intArr);
        }
      }
    }
  } else {
    return printResult(intArr);
  }
}

getNanjang_e();
