/* 🔥🔥🔥
[문제51 : merge sort를 만들어보자](https://www.notion.so/51-merge-sort-217249ae47f2424baeab023685c90830)
병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.


function mergeSort(arr){
  if (arr.length <= 1){
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let result = [];

  while (빈칸을 채워주세요 && 빈칸을 채워주세요){
    if (빈칸을 채워주세요){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    빈칸을 채워주세요
  }
  while (right.length) {
    빈칸을 채워주세요
  }

  return result;
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));

*/

// A.51
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(mergeSort(array));

/* 🔥🔥
[문제52 : quick sort](https://www.notion.so/52-quick-sort-46b7823bdea64ddfb6a6c7083be7cba9)
다음 빈 칸을 채워 퀵 정렬을 완성해주세요.


function quickSort(arr){
  if (arr.length <= 1){
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i=1; i<arr.length; i++){
    if(빈칸을 채워주세요){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return 빈칸을 채워주세요
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array));

*/

// A.52
function quickSort(arr) {
  // 배열의 요소가 하나만 남으면 값을 반환 후 종료된다.
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; //기준점
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
  // return에서 다시 함수를 불러와 배열의 요소가 하나만 남을 때까지 돌린다.
}

const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(quickSort(array));

/* 🔥🔥
[문제53 : 괄호 문자열](https://www.notion.so/53-8776d8e89b91496cb7a3bfa09a84fe49)
괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자.

(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
(해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

**입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**
*/

// A.53
function CheckRightParen() {
  let parentheses = prompt("Enter the parentheses: ").split("");
  let parenLength = parentheses.length;
  let countleft = 0,
    countright = 0;

  for (let i = 0; i < parenLength; i++) {
    if (parentheses[i] == "(") {
      countleft++;
    } else {
      countright++;
    }

    if (countright > countleft) {
      return console.log("No");
    }
  }

  if (!(countleft == countright)) {
    return console.log("No");
  } else {
    return console.log("Yes");
  }
}

CheckRightParen();

// ([{}]) added version!
const checkBracket = function (str) {
  const temp_bracket = { "(": 0, ")": 0, "[": 0, "]": 0, "{": 0, "}": 0 };
  let i = 0;
  let result_arr;

  while (i < str.length) {
    str[i] == "(" || str[i] == "[" || str[i] == "{"
      ? (temp_bracket[str[i]] += 1)
      : str[i] == ")" || str[i] == "]" || str[i] == "}"
      ? (temp_bracket[str[i]] -= 1)
      : 0;
    result_arr = [
      temp_bracket["("] + temp_bracket[")"],
      temp_bracket["["] + temp_bracket["]"],
      temp_bracket["{"] + temp_bracket["}"],
    ];
    if (result_arr.some((e) => e < 0)) {
      return "NO";
    }
    i++;
  }
  return result_arr.every((e) => !e) ? "YES" : "NO";
};

console.log(checkBracket("({[]})(}"));

/* 💥💥
[문제54 : 연속되는 수](https://www.notion.so/54-169748106ffe46b6bed0e62ced61d4d5)
은주는 놀이공원 아르바이트를 하고 있다. 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다. 
그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.

스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오
입력1
1 2 3 4 5

출력1
YES


입력2
1 4 2 6 3

출력2
NO
*/

// A.54
const checkStamp = function (str) {
  let i = 0;
  const new_str = str.replaceAll(" ", "");

  while (i + 1 < new_str.length) {
    if (!(Number(new_str[i]) + 1 == Number(new_str[i + 1]))) return "NO";
    i++;
  }
  return "YES";
};

console.log(checkStamp("1 2 3 4 5")); //YES
console.log(checkStamp("1 4 2 6 3")); //No

/* 💥💥💥💥💥
[문제55 : 하노이의 탑](https://www.notion.so/55-105b77098f7e4b99a156280ee0550866)
하노이의 탑은 프랑스 수학자 에두아르드가 처음으로 발표한 게임입니다. 하노이의 탑은 A, B, C 3개의 기둥과 기둥에 꽂을 수 있는 N 개의 원판으로 이루어져 있습니다. 
이 게임에서는 다음의 규칙을 만족해야 합니다.

> 1. 처음에 모든 원판은 A 기둥에 꽂혀 있다.
2. 모든 원판의 지름은 다르다.
3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다.
4. 작은 원반 위에 큰 원반을 놓을 수 없다.
5. 한 번에 하나의 원판(가장 위에 있는 원판)만을 옮길 수 있다.

이 규칙을 만족하며 A 기둥에 있는 원반 N 개를 모두 C 원반으로 옮기고 싶습니다.
모든 원반을 옮기기 위해 실행되어야 할 최소 원반 이동 횟수를 계산하는 프로그램을 완성해 주세요.

const route = [];

function hanoi(num, start, end, temp){
  //원판이 한 개일 때에는 바로 옮기면 됩니다.
  if (num === 1) {
    route.push([start, end]);
    return NaN;
  }

  //원반이 n-1개를 경유기둥으로 옮기고
  hanoi(내용을 채워주세요.);
  //가장 큰 원반은 목표기둥으로
  route.push(내용을 채워주세요.);
  //경유기둥과 시작기둥을 바꿉니다.
  hanoi(내용을 채워주세요.);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);
*/

// A.55

// https://shoark7.github.io/programming/algorithm/tower-of-hanoi

const route = [];

function hanoi(num, start, end, temp) {
  //원판이 한 개일 때에는 바로 옮기면 됩니다.
  if (num === 1) {
    route.push([start, end]);
    return NaN;
  }

  //원반이 n-1개를 경유기둥으로 옮기고
  hanoi(num - 1, start, temp, end);
  //가장 큰 원반은 목표기둥으로
  route.push([start, end]);
  //경유기둥과 시작기둥을 바꿉니다.
  hanoi(num - 1, temp, end, start);
}

hanoi(3, "A", "B", "C");
console.log(route);
console.log(route.length);

/* 💥💥
[문제56 : 객체의 함수 응용](https://www.notion.so/56-abc381f5916d4775804fbae9365ad0e6)
다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

```jsx
**데이터**
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

**출력**
England 22023
```
*/

// A.56

nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

let w = nationWidth.korea;

delete nationWidth.korea;

let diffObjArr = Object.entries(nationWidth);
let diffArr = diffObjArr.map((a) => Math.abs(a[1] - w));
let diff = Math.min.apply(null, diffArr);
let diffCountry = diffObjArr[diffArr.indexOf(diff)][0];

console.log(diffCountry, diff);

/* 💥💥💥
[문제57 : 1의 개수](https://www.notion.so/57-1-35ac8107242f4e1da2f8fd57ad2a8d1d)
**0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 예를 들어 0부터 20까지 1의 개수를 세어본다면 
1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.
*/

// A.57

let sumOfString1000 = "";
for (let i = 0; i <= 1000; i++) {
  sumOfString1000 += i.toString();
}

let result = sumOfString1000.split("").filter((a) => a == "1").length;

console.log(result);

/* 💥💥💥💥
[문제58 : 콤마 찍기](https://www.notion.so/58-4152dead59ad4ab7801752d6604e037d)
원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.

*/

// A.58

const getNumber = function (str) {
  let result = str.split("").reverse();

  for (let i = 0; i <= result.length; i++) {
    if (i % 4 == 3) {
      if (i != result.length) {
        result.splice(i, 0, ",");
      }
    }
  }
  return result.reverse().join("");
};

console.log(getNumber("123456"));

// 5.27 ms (100 try)

// 재귀함수 사용 🔥🔥🔥🔥🔥
const comma = function (s) {
  if (s.length <= 3) {
    return s;
  } else {
    return comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
  }
};

console.log(comma("123456"));
// 4.67 ms (100try)

/*
[문제59 : 빈칸채우기](https://www.notion.so/59-5e36b2d5c7a34a3999812f8f9e56eb52)
총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

입력
hi

출력
========================hi========================
*/

// A.59

let input = prompt("Enter").split(""),
  arr = "=".repeat(50).split("");

arr.splice(0, input.length);

arr.splice(parseInt((50 - input.length) / 2, 10), 0, input);
let result = arr.flat().join("");

console.log(result);

// padStart 쓰면 돼...
const str = prompt("문자열을 입력해주세요.");

const n = 25 + parseInt(str.length / 2, 10);

//왼쪽부터 채우기
const a = str.padStart(n, "=");

//오른쪽까지 채워서 출력
console.log(a.padEnd(50, "="));

/*
[문제60 : 번호 매기기](https://www.notion.so/60-8b2e85dd50e84cd0bc77d1e67dbace70)
새 학기가 되어 이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다.
데이터에 입력된 이름을 아래와 같이 출력해 주세요.

데이터
students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연']


출력
번호: 1, 이름: 강은지
번호: 2, 이름: 강채연
번호: 3, 이름: 권윤일
번호: 4, 이름: 김민호
번호: 5, 이름: 김유정
번호: 6, 이름: 김진이
번호: 7, 이름: 김채리
번호: 8, 이름: 박지호
번호: 9, 이름: 박현서
번호: 10, 이름: 최성훈
번호: 11, 이름: 한지호
번호: 12, 이름: 홍유진
*/

//

students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
];

students.sort().forEach((a, i) => console.log(`번호: ${i + 1}, 이름: ${a}`));

/*
[문제61 : 문자열 압축하기](https://www.notion.so/61-c6532ffce7464fa197852eed3ac09086)
문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

입력
aaabbbbcdddd

출력
a3b4c1d4
*/

// A.61

// 내 풀이
let A = "aaabbbcccdddeee".split("");

let B = [[A[0]]],
  innerIndex = 0,
  count = 0;

while (A.length != 0) {
  if (B[innerIndex][0] == A[0]) {
    count++;
    A.shift();
    if (A.length == 0) {
      B[innerIndex][1] = count;
    }
  } else {
    B[innerIndex][1] = count;
    innerIndex++;
    count = 0;
    B[innerIndex] = [A[0]];
  }
}

console.log(B.flat(2).join(""));
// 0.47 ms

// 답안

const user_s = new String(prompt("문자열을 입력하세요"));
let result_s = "";
let store_s = user_s[0];
let count = 0;

for (let i of user_s) {
  if (i === store_s) {
    count += 1;
  } else {
    result_s += store_s + String(count);
    store_s = i;
    count = 1;
  }
}

result_s += store_s + String(count);
console.log(result_s);
// 0.25 ms

/*
[문제62 : 20190923출력하기](https://www.notion.so/62-20190923-536feccb025549db9e6c0d1f54766f13)
`20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.

1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20190923)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.
*/

// A.62

let strArr = "aacdddddddddfffffffffgghhh".split("");
let str = "abcdefgh";
let result = "";
for (let i of str) {
  result += strArr.filter((inner) => inner == i).length;
}

console.log(result);

/*
[문제63 : 친해지고 싶어](https://www.notion.so/63-547ef2776652413293c4737bc92619b7)
한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
딸은 '**복잡한 세상 편하게 살자**'라는 문장을 '**복세편살**'로 줄여 말합니다.

교수님이 줄임말을 배우기 위해 아래와 같이 **어떤 입력이 주어지면 앞 글자만 줄여 출력**하도록 해주세요.
입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.

입력
복잡한 세상 편하게 살자

출력
복세편살
*/

// A.63

console.log(
  prompt("Enter")
    .split(" ")
    .map((a) => a[0])
    .join(""),
);

/*
[문제64 : 이상한 엘레베이터](https://www.notion.so/64-a116e985b125441d9480e953ff6c9f55)
정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

입력
정량 N이 입력됩니다.

출력
가장 적게 옮길 수 있는 횟수를 출력합니다.
만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
*/

// A.64

let LowerTimeCarry = (N) => {
  let a, b, middleNum;
  a = parseInt(N / 7, 10);
  middleNum = N % 7;
  if (middleNum % 3 != 0) {
    return console.log(-1);
  } else {
    b = parseInt(middleNum / 3, 10);
    return console.log(a + b);
  }
};

LowerTimeCarry(21);

/*
[문제65 : 변형된 리스트](https://www.notion.so/65-3df145826a1d4a759f31d6145e35df4b)
a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

// A.65

let a = [1, 2, 3, 4],
  b = ["a", "b", "c", "d"];
console.log(
  a.map((elem, index) =>
    index % 2 == 0 ? [elem, b[index]] : [b[index], elem],
  ),
);

/*
[문제66 : 블럭탑쌓기](https://www.notion.so/66-5ef70cd266994056a4831cc0da15092f)
탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.

예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다.

입력
탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
규칙 = "ABD"

출력
["가능", "불가능", "가능", "가능", "가능"]
*/

// A.66

function solution(전체블록, 규칙) {
  let answer = [];
  for (let 부분블록 of 전체블록) {
    answer.push(블록순서체크(부분블록, 규칙));
  }
  return answer;
}

function 블록순서체크(부분블록, 규칙) {
  let 임시변수 = 0;
  for (let 문자 of 부분블록) {
    if (규칙.includes(문자)) {
      if (임시변수 > 규칙.indexOf(문자)) {
        return "불가능";
      }
      임시변수 = 규칙.indexOf(문자);
    }
  }
  return "가능";
}

const 전체블록 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const 규칙 = "ABD";

console.log(solution(전체블록, 규칙));
//["가능", "불가능", "가능", "가능", "불가능"]

/*
[문제67 : 민규의 악수](https://www.notion.so/67-0d9ed353a2df4b04aa9f3a60c39c74c7)
광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.

이 행사에서 진행된 악수는 총 n번이라고 했을 때,
민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
그리고 민규를 포함한 행사 참가자는 몇 명일까요?

- 악수는 모두 1대 1로 진행이 됩니다.
- 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
- 같은 상대와 중복된 악수는 카운트 하지 않습니다.
- 민규를 제외한 참가자는 행사를 모두 마쳤습니다.


예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.

행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.

입력
59

출력
[4, 12] // [악수 횟수, 행사 참가자 수]
*/

// A.67
let handShakeChecker = (n) => {
  let a = 0,
    count = 0;
  while (a < n) {
    a += ++count;
  }
  return console.log([n % (a - count), ++count]);
};

/*
[문제68 : 버스 시간표](https://www.notion.so/68-e9da4bcbd44d4f9e99c3882a04e2a342)
학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

- 버스 시간표와 현재 시간이 입력으로 주어집니다.
- 출력 포맷은 "00시 00분"입니다.
   만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.

입력
["12:30", "13:20", "14:13"]
"12:40"

출력
['지나갔습니다', '00시간 40분', '01시간 33분']
*/

// A.68

let busTimeChecker = (arr, now) => {
  arr = strToTime(arr);
  now = strToTime([now])[0];

  return arr.map((elem) => {
    if (elem[0] == now[0] && elem[1] < now[1]) {
      return "지나갔습니다";
    }

    let dateChecker = new Date(
      2021,
      04,
      29,
      elem[0] - now[0],
      elem[1] - now[1],
    );

    return `${dateChecker.getHours()}시간 ${dateChecker.getMinutes()}분`;
  });
};

let strToTime = (arr) => {
  return arr.map((elem) => [elem.slice(0, 2), elem.slice(3, 5)]);
};

/*
[문제69 : 골드바흐의 추측](https://www.notion.so/69-418c74bcce5941a18cb855fdb13d51c3)
골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

예)
100 == 47 + 53
56 == 19 + 37

2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를 작성하세요. 

* 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.
*/

// A.69

// Check All Prime numbers below the number
let FindPrime = (num) => {
  let result = [];
  for (let i = 2; i < num; i++) {
    for (let j = 2; j <= i; j++) {
      if (i == j) {
        result.push(i);
      }

      if (i % j == 0) {
        break;
      }
    }
  }
  return result;
};

// Check partions and return the result
let GoldbachChecker = (arr, num) => {
  let result = [];
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num / 2) {
      break;
    }

    if (arr.findIndex((e) => e == num - arr[i]) != -1) {
      result.push([arr[i], num - arr[i]]);
    }
  }
  return result;
};

// Solution
let GoldbachConj = (num) => {
  return GoldbachChecker(FindPrime(num), num);
};

console.log(GoldbachConj(100));

/*
[문제70 : 행렬 곱하기](https://www.notion.so/70-0fac9f804935478a9ed6f18b6e2f5f7e)
행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

```jsx
**입력**
a = [[1, 2],
    [2, 4]]

b = [[1, 0],
    [0, 3]]

**출력
[**[1, 6], [2, 12]]
```
*/

// A.70
let example1 = [
  [
    [1, 2],
    [2, 4],
  ],
  [
    [1, 0],
    [0, 3],
  ],
];
let example2 = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [[1], [1], [1]],
];
let example3 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6, 7],
    [8, 9, 10],
  ],
];
let example4 = [
  [
    [1, 2],
    [3, 4],
  ],
  [[5, 6, 7]],
];

let SupplyMatrix = (M1, M2) => {
  if (M1[0].length == M2.length) {
    let resultMatrix = Array.from(Array(M1.length), () => new Array());
    for (let i = 0; i < M1.length; i++) {
      for (let j = 0; j < M2[0].length; j++) {
        for (let k = 0; k < M1.length; k++) {
          resultMatrix[i][j] = resultMatrix[i][j]
            ? (resultMatrix[i][j] += M1[i][k] * M2[k][j])
            : M1[i][k] * M2[k][j];
        }
      }
    }
    return resultMatrix;
  } else {
    return -1;
  }
};

console.log(SupplyMatrix(example1[0], example1[1])); // [[1, 6], [2, 12]]
console.log(SupplyMatrix(example2[0], example2[1])); // [[6],[15],[24]]
console.log(SupplyMatrix(example3[0], example3[1])); // [[21,24,27],[47,54,61]]
console.log(SupplyMatrix(example4[0], example4[1])); // -1

/*
[문제71 : 깊이 우선 탐색](https://www.notion.so/71-967ad5bdc2ce41ab86546397a0493f95)
**깊이 우선 탐색**이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22aa2540-0fa0-4fc2-8953-4222bf62f824/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22aa2540-0fa0-4fc2-8953-4222bf62f824/Untitled.png)

다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.
객체와 시작점을 제공합니다.

graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}


출력
E D F A C B
*/

// A.71

// 재귀함수 활용법
// 함수 내부에서 순환하는 재귀함수
// object의 value에서 0번 인덱스는 출력하고 1번 인덱스부터는 차례대로 들어간다.
// 예를 들어 ['E', 'D', 'A']이면 E는 출력하고 D를 key로 설정헤 들어간다.
// 이후 A를 key로 설정해 들어가며 순차적으로 순연한다.
let innerFunc = (obj, elem, result) => {
  obj[elem].forEach((a, i) => {
    if (i >= 1) {
      innerFunc(obj, a, result);
    }
    result.push(a);
  });
};

// 본체 함수이다.
// highest를 사전에 설정해 최상단 노드를 설정해주어야, 결과값이 순서대로 출력된다.
let DeepSearch = (nodes, start) => {
  let result = [];
  nodes[start].forEach((e) => {
    innerFunc(nodes, e, result);
    result.push(e);
  });
  result = Array.from(new Set(result)).join(" ");
  return result;
};

// 배열 활용법
function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    let n = stack.pop();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x));
      for (let i of sub) {
        stack.push(i);
      }
    }
  }
  return visited.join(" ");
}

// 실행 예시
let graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

let graph2 = {
  E: ["A", "B", "C"],
  A: ["E", "D", "K"],
  D: ["A", "F"],
  F: ["D"],
  K: ["A"],
  B: ["E", "G", "H"],
  G: ["B"],
  H: ["B"],
  C: ["E", "I"],
  I: ["C", "J"],
  J: ["I"],
};

let graph3 = {
  E: ["D", "A"],
  D: ["E", "F"],
  F: ["D"],
  A: ["E", "C", "B", "W"],
  C: ["A", "J"],
  B: ["A", "I"],
  W: ["A", "K"],
  J: ["C"],
  I: ["B"],
  K: ["W"],
};

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//

/*

*/

//
