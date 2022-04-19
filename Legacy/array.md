### 🎁 Array

대부분의 배열 문제들은 여기서 출처했습니다. <a href="https://www.notion.so/JS-100-94d97d294dd14c9b911a02c840fa9f2d">Notion</a>

<br>

### 난이도 : 🌶

<br>

#### ☁︎ 배열의 삭제

```javascript

다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

var nums = [100, 200, 300, 400, 500];

```

<details><summary><b>Answer</b></summary>
  <p>

```javascript
var nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);
console.log(nums);
```

 </p>
 </details>
 <br>
 <br>

#### ☁︎ 배열의 내장함수

```javascript

<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

***데이터***

var arr = [200, 100, 300];

//pass

console.log(arr);


***출력***

[200, 100, 10000, 300]

```

<details><summary><b>Answer</b></summary>

  <p>

```javascript
var arr = [200, 100, 300];

arr.splice(2, 0, 10000);

console.log(arr);
```

 </p>
 </details>
 <br>
 <br>

#### ☁︎ 변수의 타입

```javascript

다음 출력 값으로 올바른 것은?

var arr = [100, 200, 300];
console.log(typeof(arr));

1)  undefined
2)  string
3)  number
4)  object

```

<details><summary><b>Answer</b></summary>

  <p>

```javascript

4. Object

```

 </p>
 </details>
 <br>
 <br>

#### ☁︎ 변수의 타입2

```javascript

다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

1)  입력 : a =1,   출력 : number
2)  입력 : a = 2.22,   출력 : boolean
3)  입력 : a = 'p',   출력 : string
4)  입력 : a = [1, 2, 3],   출력 : object

```

<details><summary><b>Answer</b></summary>

  <p>

```javascript
2;
```

 </p>
 </details>

 <br>
 <br>
 
 
 #### ☁︎ 최댓값 구하기

```javascript
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

입출력

입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
```

<details><summary><b>Answer</b></summary>
<p>
  
```javascript
// (1) map을 쓰는 경우
let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
return parseInt(n, 10);
});

numbers.sort((a, b) => {
return b-a;
});

console.log(numbers[0]);

// (2) for을 쓰는 경우
function FindBiggest() {
let array = prompt("Enter the numbers: ").split(' ');
let result = 0;

for (let i = 0; i < array.length; i++) {
if (parseInt(array[i], 10) > result) {
// prompt로 받으면 무조건 문자이기 때문에 parseInt를 해줘야 한다.
result = array[i];
}
}
return console.log(result);
}

FindBiggest();

````

</p>
</details>

<br>
<br>


### 난이도 : 🌶🌶

<br>

#### ☁︎ 자바스크립트 자료형의 복잡도

```javascript
다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

1)  arr[i]
2)  arr.push(5)
3)  arr.slice()
4)  arr.pop()
5)  arr.includes(5)
```

<details><summary><b>Answer</b></summary>
  <p>

```javascript
/*
3번과 5번이다.
O(1)은 컴퓨터의 입장에서 한 번에 찾을 수 있는 데이터를 말한다. 2번 4번이야 그렇다 쳐도 1번은 헷갈릴 만하다.
하지만 인덱스가 주어진 배열에서 특정 값을 찾는 건 사람한테나 하나하나 세느라 어려운거지 컴퓨터는 한 번에 가능하다.
slice랑 includes는 컴퓨터가 배열에 들어가서 값들을 하나하나 뒤져봐야 하니까 오래 걸린다.
참고 : https://velog.io/@denmark-choco/javascript-Time-Complexity시간복잡도
      https://minhanpark.github.io/today-i-learned/javascript-big-o/*/
```

 </p>
 </details>

 <br>
 <br>

 #### ☁︎ 대소문자 바꿔서 출력하기


```javascript
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
````

<details><summary><b>Answer</b></summary>
<p>
  
```javascript
function ChangeUpLower() {
let str = prompt("Enter the string: ");
let array = str.split('');
let map1 = array.map(x => {
  if (x == x.toLowerCase()) {
    return x.toUpperCase();

}
else {
return x.toLowerCase();
}

});

return console.log(map1.join(''));

}

````

</p>
</details>

<br>
<br>

#### ☁︎ 객체 만들기

```javascript

첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.

function GetMathScore (){//여기에 입력}

**입력**
Yujin Hyewon
70 100

**출력**
{'Yujin': 70, 'Hyewon': 100}
```

<details><summary><b>Answer</b></summary>
  <p>

```javascript
function GetMathScore() {
  let key = prompt('Enter the Student name');
  let value = prompt('Enter the Student score');
  let result = {};

let keyArray = key.split(' ');
let valueArray = value.split(' ');

for (i = 0; i < keyArray.length; i++) {
result[keyArray[i]] = valueArray[i]
}

return console.log(result)
}

GetMathScore()

````

 </p>
 </details>

 <br>
 <br>

#### ☁︎ 놀이동산에 가자

```javascript
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
```

<details><summary><b>Answer</b></summary>
<p>
 
```javascript

function GotoLand() {

weight = +prompt("Enter the limit number: ");
num = +prompt("Enter the number of freinds: ")

function getRandomInt(min, max) {
return Math.floor(Math.random() \* (max - min) + 1) + min;
};

let Resultarray = [], i = 0;

while (i < num) {
Resultarray.push(getRandomInt(40, 120));
i++;
}

let map1 = Resultarray.filter(wgt => (wgt <= weight));

return console.log(map1.length)

}

GotoLand();

````

</p>
</details>

<br>
<br>


#### ☁︎ 로꾸거

```javascript

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

**입출력**

입력 : 거꾸로
출력 : 로꾸거

````

<details>
<summary><b>Answer</b></summary>

<p>

```javascript

function Reversing(str) {
  let words = str.split('')



  return console.log(words
  ​ .reverse()
  ​ .join(''))
  }

Reversing('거꾸로')

```

</p>
</details>
 <br>
 <br>

#### ☁︎ 거꾸로 출력하기

```javascript
한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

입출력

입력 : 1 2 3 4 5
출력 : 5 4 3 2 1

입력 : 2 4 6 7 8
출력 : 8 7 6 4 2
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
//(1) 배열로 안 바꾸는 경우
function ReveseString() {
  let word = prompt('Enter the string');
  let result = '';
  for (i = 0; i < word.length; i++) {
    result += word.slice(word.length - i - 1, word.length - i);
  }
  return console.log(result)
}

ReveseString()

//(2) 배열로 바꾸는 경우
const data33 = prompt('숫자를 입력하세요.').split(' ').reverse();
const result33 = '';

for (let i=0; i<data33.length; i++){
result33 += data33[i];
}

console.log(result33);

````

 </p>
 </details>

 <br>
 <br>

   #### ☁︎ array.reduce


 ```javascript
예제를 따온 곳 :
https://medium.com/@hongkevin/js-3-자바스크립트-배열-메서드-reduce-100-활용법-feat-egghead-io-97c679857ece

array.reduce를 votes에 사용하여 다음과 같이 출력되는 result를 구현하세요~

const votes = ["kim", "hong", "lee", "hong", "lee", "lee", "hong"];
*결과*
console.log(result); // { kim: 1, hong: 3, lee: 3 }
````

<details><summary><b>Answer</b></summary>
<p>
    
```javascript
let result = [];
const votes = ["kim", "hong", "lee", "hong", "lee", "lee", "hong"];

votes.reduce((a, b) => {
if (result[b] === undefined) {
result[b] = 1;
}
else {
result[b] += 1;
}
return result
}, {})

console.log(result)

````

 </p>
 </details>

 <br>
 <br>


  #### ☁︎ array.reduce2


 ```javascript
예제 따온 곳 :
https://velog.io/@from0/.reduce-메소드-심화-예시-자바스크립트

Array reduce를 사용합니다.

다음의 people 변수에서, age를 key로 해 새롭게 grouping한 groupedPeople를 만들어보세요.

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 33 },
  { name: 'Jane', age: 26 },
  { name: 'Steve', age: 33 },
  { name: 'Joseph', age: 80 }
];

// groupedPeople is:
// {
//   21: [
//     { name: 'Alice', age: 21 },
//   ],
//   33: [{ name: 'Bob', age: 33 },
//     { name: 'Steve', age: 33 },
//   ]
// ...
// }
````

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 33 },
  { name: 'Jane', age: 26 },
  { name: 'Steve', age: 33 },
  { name: 'Joseph', age: 80 }
];

let groupedPeople = {};

people.reduce((a, b) => {
if (groupedPeople[b.age] == undefined) {
groupedPeople[b.age] = new Array(b)
}
else {
groupedPeople[b.age].push(b)
}

return groupedPeople
}, {})

console.log(groupedPeople)

````

 </p>
 </details>

 <br>
 <br>


 #### ☁︎ 호준이의 아르바이트


```javascript
호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
**학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**

입출력

입력 : 97 86 75 66 55 97 85 97 97 95
출력 : 6
````

<details><summary><b>Answer</b></summary>
<p>
  
```javascript
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

// foreachd와 includes를 이용한 풀이

let scores = prompt('Enter the score: ');

let inputArr = scores.split(' ');
let copiedArr = [];

// 중복 요소 제거
inputArr.forEach(element => {
if (!copiedArr.includes(element)) {
copiedArr.push(element);
}
});

copiedArr.sort((a, b) => {
return b - a
})

let TopThree = [];
let ResultNum = 0;

// 상위 3요소 추출 및 결과값
for (j = 0; j < 3; j++) {
TopThree.push(copiedArr[j]);
inputArr.forEach(element => {
if (element === TopThree[j]) {
ResultNum += 1;
}
})
}

console.log(ResultNum)

```

</p>
</details>

<br>
<br>

```
