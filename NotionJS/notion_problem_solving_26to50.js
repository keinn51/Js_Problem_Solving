// This is the Problem Solving JS file!
// You can get the problem easily at https://www.notion.so/JS-100-94d97d294dd14c9b911a02c840fa9f2d

/*
[문제26 : 행성 문제2](https://www.notion.so/26-2-a9ae3f90c41c4aef96af9c10f13a1d5d)
우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

**행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.
*/

// A26.
function GetPlanetEng(planet) {
  let planetK = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"]
  let planetE = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

  let result = {};
  planetK.forEach((a, i) => result[a] = planetE[i])

  return console.log(result[planet])
}

GetPlanetEng("수성")

/*
[문제27 : 객체 만들기](https://www.notion.so/27-1bdb95a6719049ceb820538eda42c3a8)
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.

```jsx
**입력**
Yujin Hyewon
70 100

**출력**
{'Yujin': 70, 'Hyewon': 100}
```
*/

// A.27

function Getobject() {
  let name = prompt("Enter name: ").split(' ');
  let score = prompt("Enter score: ").split(' ');

  let result = {}
  name.forEach((a, i) => result[a] = score[i]);
  return console.log(result)
}

Getobject()


/*
[문제28 : 2-gram](https://www.notion.so/28-2-gram-fb3e43a5c88f4745932844d1ebac7725)
**2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

```jsx
**입력**
Javascript

**출력**
J a
a v
v a
a s
s c
c r
r i
i p
p t
```
*/

// A.28

function TwoGram(str) {
  for (i = 0; i < str.length - 1; i++) {
    console.log(str.charAt(i) + ' ' + str.charAt(i + 1))
  }
}

TwoGram('Javascript')


/*
[문제29 : 대문자만 지나가세요](https://www.notion.so/29-ef7e9672d0db44efa3e69c4799aea12e)
진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

**알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램**을 만들어 주세요.
*/

// A.29

let input = prompt("Enter")
let IsUpperStirng = () => console.log((input == input.toUpperCase()) ? "Yes" : "No")

IsUpperStirng()

/*
[문제30 : 문자열 속 문자 찾기](https://www.notion.so/30-c0ce1df21dbb431c8eb356d0c47491ed)
문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
**그 문자가 시작하는 index를 반환하는 프로그램**을 만들어 주세요

입력
pineapple is yummy
apple

출력
4
*/

// A.30

let findstring = () => console.log(prompt("Enter letter").indexOf(prompt("Enter finding letter")));

findstring()



/*
[문제31 : 자바스크립트 자료형의 복잡도](https://www.notion.so/31-6772762cc7c7486a9643452a1baf5e1d)
다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

1)  arr[i]
2)  arr.push(5)
3)  arr.slice()
4)  arr.pop()
5)  arr.includes(5)
*/

// A.31
/*
3번과 5번이다.
O(1)은 컴퓨터의 입장에서 한 번에 찾을 수 있는 데이터를 말한다. 2번 4번이야 그렇다 쳐도 1번은 헷갈릴 만하다.
하지만 인덱스가 주어진 배열에서 특정 값을 찾는 건 사람한테나 하나하나 세느라 어려운거지 컴퓨터는 한 번에 가능하다.
slice랑 includes는 컴퓨터가 배열에 들어가서 값들을 하나하나 뒤져봐야 하니까 오래 걸린다.
참고 : https://velog.io/@denmark-choco/javascript-Time-Complexity시간복잡도
      https://blog.chulgil.me/algorithm/*/



/*
[문제32 : 문자열 만들기](https://www.notion.so/32-bc824f2a919e4f948441286bb253cef0)
취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다. 

혜림이를 위해 **문자열을 입력받으면 단어의 갯수를 출력하는 프로그램**을 작성해 주세요.

```jsx
**입출력**

입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
출력 : 5
```
*/

// A.32
let checkWord = () => console.log(prompt("Enter").split(' ').length)




/*
[문제33 : 거꾸로 출력하기](https://www.notion.so/33-e31451740a314d09ba074aac0a1002ed)
한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

입출력

입력 : 1 2 3 4 5
출력 : 5 4 3 2 1

입력 : 2 4 6 7 8
출력 : 8 7 6 4 2

*/

//A.33

let reverseWords = () => console.log(prompt("Enter").split(' ').reverse().join(' '))


/*
[문제34 : sort 구현하기](https://www.notion.so/34-sort-35f9e8bed7f34f5a8722588b400d0d8c)
민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.

민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)


입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES

*/

// A.34
let checkRideOver = () => {
  let a = prompt("Enter");
  let b = a.split(' ').sort((a, b) => a - b).join(' ');
  return console.log((a == b) ? "Yes" : "No")
}

CheckSort()


/*
[문제35 : Factory 함수 사용하기](https://www.notion.so/35-Factory-6a3a32fd25344c7e9e7ae5eaa7a37dc2)
2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.

<pass>에 코드를 작성하여 two함수를 완성하세요.


function one(n){
    function two(){
        //pass
    }
    return two;
}

const a = one(2);
*const b = one(3);
const c = one(4);*

console.log(a(10));
console.log(b(10));
console.log(c(10));

*/

// A.35

function one(n) {
  function two(num) {
    return Math.pow(num, n)
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

/*
[문제36 : 구구단 출력하기](https://www.notion.so/36-3a4189e2c35142f780f0b02b4c7b4bd8)
1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

**입출력**

입력 : 2
출력 : 2 4 6 8 10 12 14 16 18
*/

// A.36
let GUGUDAN = new Array(9).fill(+prompt("Enter")).map((a, i) => a * (i + 1))

/*
[문제37 : 반장 선거 ](https://www.notion.so/37-f56ab84018d44e7184c2307632a8c921)
새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

**입력**
원범 원범 혜원 혜원 혜원 혜원 유진 유진

**출력**
혜원(이)가 총 4표로 반장이 되었습니다.
*/

// A.37

function getBanjang() {
  let A = {};
  prompt("Enter").split(' ').forEach(a => A[a] ? (A[a] += 1) : A[a] = 1);
  return console.log(Object.entries(A).sort((a, b) => b[1] - a[1])[0][0])
}

getBanjang()


//----------

/* Object.keys와 Array.reduce를 알아야 한다!
Array.reduce는 배열 요소 각각의 전과 후를 비교해 비교-연산할 수 있다*/

const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = "";

for (let index in array) {
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);


/*
[문제38 : 호준이의 아르바이트](https://www.notion.so/38-371eb506b05f4b8db674569a08304799)
호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
**학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**

입출력

입력 : 97 86 75 66 55 97 85 97 97 95
출력 : 6
*/

// A.38


// foreach, entries, sort
function giveCandy() {
  let A = {};
  prompt("Enter").split(' ').forEach(a => A[a] ? (A[a] += 1) : (A[a] = 1));
  let B = Object.entries(A).sort((a, b) => b[1] - a[1]);
  return console.log(B[0][1] + B[1][1] + B[2][1])
}

giveCandy()
// calculatingTime: 7.290771484375 ms (100try)


// While과 Pop을 이용한 풀이 (이게 더 나은듯..)
const scores = prompt('점수입력').split(' ').map(function (n) {
  return parseInt(n, 10);
});

scores.sort((a, b) => {
  return a - b;
});

let count = 0;
let arr = [];

while (arr.length < 3) {
  let n = scores.pop();
  if (!arr.includes(n)) {
    arr.push(n);
  }
  count += 1;
}

console.log(count);
// calculatingTime: 6.587890625 ms (100try)




/*
[문제39 : 오타 수정하기](https://www.notion.so/39-e31823d5c6184efc95fdf78a86843414)
혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다.

그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다.
혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.

**문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.**

입력 : querty
출력 : euerty

입력 : hqllo my namq is hyqwon
출력 : hello my name is hyewon
*/

// A.39

//1. 함수 사용

let ChangeWord = () => console.log(prompt("Enter").replaceAll('q', 'e'));
// calculatingTime: 4.27099609375 ms (100)

//2. 정규식 사용
const word = prompt('입력하세요.');

console.log(word.replace(/q/gi, 'e'));
// calculatingTime: 5.274169921875 ms (100)


/*
[문제40 : 놀이동산에 가자](https://www.notion.so/40-592ce594719b4054a5bc4a38c5475ba5)
테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.

원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.
입력 몸무게의 범위는 40부터 120입니다.

입력
50
5
20
20
20
20
20

출력
2
*/

// A40.

let NotOver = +prompt("Enter over weight");
let NumFreind = +prompt("Enter number of freinds");
let SumWeight = +prompt("Enter your freind weight"), count = 0;
while (NotOver > SumWeight) {
  count += 1;
  if (NumFreind == count) {
    break;
  }
  SumWeight += +prompt("Enter your freind weight");
}
console.log(count)

/*
[문제41 : 소수판별](https://www.notion.so/41-994743b827054aadadbe471001b6531c)
숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/

// A.41
let num = +prompt("Enter"), Answer = "YES";

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    Answer = "NO";
  }
}

console.log(Answer)


/*
[문제42 : 2020년](https://www.notion.so/42-2020-ae1dd4dc05cd43dbb7475afb52bc00c4)
2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

**제한 조건**
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다.
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

// A.42
let time = new Date(`${+prompt("Enter")} ${+prompt("Enter")},2020`)
console.log(time.toString().slice(0, 3))


/*
[문제43 : 10진수를 2진수로](https://www.notion.so/43-10-2-ea6da83e61ba4b038841ec035a621fea)
우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

**사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**

*/

// A.43
function twostring() {
  let num = +prompt('Enter the number: ');
  return console.log(num.toString(2))
}

twostring();

// toString이 뭔데...
let num = +prompt("Enter"), n = 0;

while (true) {
  if (parseInt(num / Math.pow(2, n)) == 0) {
    break;
  }
  n += 1;
}

let arr = new Array(n).fill(0);

let minus = num;

for (let i = (n - 1); i >= 0; i--) {
  if ((minus - Math.pow(2, i)) >= 0) {
    arr[i] = 1;
    minus -= Math.pow(2, i);
  }
}

console.log(arr)

/*
[문제44 : 각 자리수의 합](https://www.notion.so/44-a15b4323690f449ebb91275d7d38662f)
사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

예를들어
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.

입출력

입력 : 18234
출력 : 18

입력 : 3849
출력 : 24
*/

// A.44

let SumLetters = () => console.log(+prompt("Enter").split('').reduce((pre, curr) => pre + parseInt(curr, 10), 0));

SumLetters()

/*
[문제45 : getTime()함수 사용하기](https://www.notion.so/45-getTime-88b0941980cc47859649df7576966391)
Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

이를 이용하여 **현재 연도(2019)를 출력해보세요.**
*/

// A.45
const date = new Date();

console.log(date);

let year = Math.floor(date.getTime() / (1000 * 3600 * 24 * 365) + 1970);

console.log(year);

/*
[문제46 : 각 자리수의 합 2](https://www.notion.so/46-2-1349c673327740de973e50d1297354f5)
1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
*/

// A.46
let num = '';
for (let i = 1; i <= 20; i++) {
  num += i;
}

console.log(num.split('').reduce((prev, curr) => prev + parseInt(curr, 10), 0));

/*
[문제47 : set 자료형의 응용](https://www.notion.so/47-set-8b73fa6b52114d128bba7bc6c6da83c6)
바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다.
**중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.**

아래 주어진 데이터들로부터 중복을 제거하여 **실제 접수 인원을 출력**해 주세요.

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
};

*/

// A.47

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
};

let DeleteSame = () => console.log(Object.entries(people).length);

DeleteSame(people);


/*
[문제48 : 대소문자 바꿔서 출력하기](https://www.notion.so/48-ab0fe531a1ca4042b9436c1e3dc5a75d)
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
*/

// A.48
let ChangeCase = prompt("Enter").split('').map((curr, i) => (curr == curr.toUpperCase()) ? curr.toLowerCase() : curr.toUpperCase()).join('');

console.log(ChangeCase)

/*
[문제49 : 최댓값 구하기](https://www.notion.so/49-2052f88fe90f4bde93cea5fb63627483)
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

입출력

입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
*/

// A.49
let CheckMax = prompt("Enter").split(' ').sort((a, b) => b - a)[0];
console.log(CheckMax)

/*
[문제50 : 버블정렬 구현하기](https://www.notion.so/50-bb22106895db4766b2517b0f61a8cc2d)
버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
https://img.scoop.it/omRChIeVtQY1Nodjul8eODl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9
아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.

function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (빈칸을 채워주세요.) {
      if (result[j] > result[j + 1]) {
        //빈칸을 채워주세요.
     }
   }
 }
 return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
 return parseInt(n, 10);
});

console.log(bubble(items));

*/

// A.50
function bubble(arr) {
  let result = arr.slice(); // 원본 배열 복사

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));


