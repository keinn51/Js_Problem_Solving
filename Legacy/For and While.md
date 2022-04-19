### 🎁 For And While

<br>

### 난이도 : 🌶

<br>

#### ☁︎ for문 계산


 ```javascript

다음 코드의 출력 값으로 알맞은 것은?


var a = 10;
var b = 2;
for(var i=1; i<5; i+=2){
 a += i;
}
console.log(a+b);

````



<details><summary><b>Answer</b></summary>

  <p>

```javascript
5
````

 </p>
 </details>
 <br>
 <br>
 
 #### ☁︎ for를 이용한 기본 활용

```javascript

1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.
  let s = 0;
  //pass
  console.log(s);
  ````

<details>
<summary><b>Answer</b></summary>
<p>

```javascript
let s = 0;
for (i = 1; i < 101; i++) {
s += i; 

console.log(s);
```` 

</p>
</details>
<br>
<br>

#### ☁︎ for 반복문을 이용하여 짝수 출력하기

 ```javascript
for 반복문을 이용하여 2부터 10까지 숫자 중 짝수만을 출력해보세요.
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
for (i = 2; i < 11; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(i);
}
```

 </p>
 </details>
 
 <br>
 <br>
 
 

### 난이도 : 🌶🌶

<br>


#### ☁︎ 각 자리수의 합


```javascript
사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

예를들어
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.

입출력

입력 : 18234
출력 : 18

입력 : 3849
출력 : 24
````

<details><summary><b>Answer</b></summary>
<p>
  
```javascript
let n = prompt('숫자를 입력하세요.');
let sum = 0;

while(n !== 0){
sum += (n % 10);
n = Math.floor(n/10);
}

console.log(sum);

````

</p>
</details>

<br>
<br>


#### ☁︎ 'for' 반복문을 'while' 반복문으로 바꾸기

 ```javascript
for 반복문을 while 반복문으로 바꾸되, 동작 방식에는 변화가 없도록 해보세요. 출력 결과도 동일해야 합니다.

 for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
while (i < 3) {
  console.log(`number ${++i}`);
}
```

 </p>
 </details>
 
 <br>
 <br>


#### ☁︎ 각 자리수의 합


```javascript
1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
````

<details><summary><b>Answer</b></summary>
<p>
  
```javascript
function Sum1to20() {
let str = '';
let SumArray = [];
let sum = 0;

for (i = 1; i <= 20; i++) {
str += i;
};

SumArray = str.split('');

for (i = 0; i < SumArray.length; i++) {
sum += parseInt(SumArray[i], 10);
}

return console.log(sum)
}

Sum1to20();

````

</p>
</details>

<br>
<br>


  #### ☁︎ 2-gram 2

**2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.


 ```javascript
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
````

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
function TwoGram(str) {
  for (i = 0; i < str.length - 1; i++) {
    console.log(str.charAt(i) + ' ' + str.charAt(i + 1))
  }
}

TwoGram('Javascript')

````

 </p>
 </details>

 <br>
 <br>

#### ☁︎ 반복문의 마지막 값


```javascript
아래 코드를 실행했을 때 얼럿 창에 마지막으로 뜨는 값은 무엇일까요? 이유도 함께 설명해보세요.

let i = 3;

while (i) {
  console.log(i--);
}

```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
let i = 3;

while (i) {
  alert( i-- );
}

// 반복이 하나씩 끝날 때마다 i는 1씩 줄어듭니다. while(i)은 i = 0일 때 멈춥니다.

// 따라서 전체 반복문은 아래 순서를 따라 실행됩니다.

let i = 3;

alert(i--); // 3이 출력되고 i는 2로 줄어듭니다.

alert(i--) // 2가 출력되고 i는 1로 줄어듭니다.

alert(i--) // 1이 출력되고 i는 0으로 줄어듭니다.

// i가 0이 되었기 때문에 while(i)는 종료됩니다.
```

 </p>
 </details>
 
<br>
<br>
 
 #### ☁︎ while 반복문의 출력값 예상하기

 
 ```javascript
while 반복문이 순차적으로 실행될 때마다 얼럿 창에 어떤 값이 출력될지 예상해보세요. 아래 두 예시는 같은 값을 출력할까요?

i = 0;
while (++i < 5) console.log(i);


i = 0;
while (i++ < 5) console.log(i);
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
//(1) 전위형 증가 연산자를 사용한 경우엔 1부터 4까지 출력됩니다.

 let i = 0;
while (++i < 5) alert( i );
/*
++i는 i를 먼저 증가시키고 새로운 값을 반환하기 때문에 첫 번째 while 반복문에선 1과 5를 비교(1 < 5)하고, 얼럿 창엔 1이 출력됩니다.

1에 이어서 2, 3, 4…이 출력됩니다. i 앞에 ++가 붙어있기 때문에 5는 항상 증가 이후의 값과 비교됩니다.

i = 4 이후에 i의 값이 5로 증가하면 while(5 < 5)안의 비교가 실패하기 때문에 반복문은 멈춥니다. 따라서 5는 출력되지 않습니다.

후위형 증가 연산자를 사용한 경우엔 1부터 5까지 출력됩니다.
*/

 let i = 0;
while (i++ < 5) alert( i );

/*
후위 증가 연산자를 적용하면 i++는 i를 증가시키긴 하지만 기존 값을 반환합니다. 따라서 첫 번째 while 반복문에선 0과 5를 비교(0 < 5)합니다. 이 점이 전위 증가 연산자와의 차이입니다.

그런데 alert문은 조건문과 별개의 문이므로 얼럿창엔 1이 출력됩니다. i는 이미 증가한 이후이기 때문이죠.

1이 출력된 이후에 2, 3, 4…가 이어서 출력됩니다.

i = 4일 때 잠시 생각을 가다듬어 봅시다. 전위 증가 연산자(++i)를 사용하면 값이 먼저 증가하기 때문에 5와 5를 비교하게 되는데, 여기선 후위 증가 연산자(i++)를 사용하고 있으므로 i는 증가하지만 기존 값인 4가 비교에 사용됩니다. 따라서 while(4 < 5)가 되고, 해당 조건은 참이므로 하단 블록이 실행되어 alert 창이 뜨게 됩니다.

다음 반복문은 while(5 < 5)이므로 마지막 출력되는 값은 5가 됩니다.
*/
```

 </p>
 </details>
 
 <br>
 <br>
 
 #### ☁︎ 'for' 반복문의 출력값 예상하기

 
 ```javascript
(3)for 반복문이 순차적으로 실행될 때마다 얼럿 창에 어떤 값이 출력될지 예상해보세요. 아래 두 예시는 같은 값을 출력할까요?

for (i = 0; i < 5; i++) console.log(i);

for (i = 0; i < 5; ++i) console.log(i);
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
// 두 경우 모두 0부터 4까지 출력됩니다.

 for (let i = 0; i < 5; ++i) alert( i );

 for (let i = 0; i < 5; i++) alert( i );

for문의 알고리즘을 떠올려보면 쉽게 추론할 수 있는 문제입니다.

- 모든 작업이 시작되기 전 일단 i = 0입니다.
- i < 5 조건을 만족하는지 확인합니다.
- 위 조건이 true이면 반복문의 본문 alert(i)가 실행되고, 그 이후 i++가 실행됩니다.

i++는 위 알고리즘의 두 번째 단계(조건 확인)와 별개로 실행됩니다. 전혀 다른 구문이기 때문이죠.

증가 연산자가 반환하는 값은 (2) 에서 쓰이지 않기 때문에 i++와 ++i에 차이가 없습니다.

```

 </p>
 </details>
 
 <br>
 <br>
 
 
 
 #### ☁︎ 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기

 
 
 ```javascript
 
사용자가 100보다 큰 숫자를 입력하도록 안내하는 프롬프트 창을 띄워보세요. 사용자가 조건에 맞지 않은 값을 입력한 경우 반복문을 사용해 동일한 프롬프트 창을 띄워줍시다.

사용자가 100을 초과하는 숫자를 입력하거나 취소 버튼을 누른 경우, 혹은 아무것도 입력하지 않고 확인 버튼을 누른 경우엔 더는 프롬프트 창을 띄워주지 않아도 됩니다.

사용자가 오직 숫자만 입력한다고 가정하고 답안을 작성하도록 해봅시다. 숫자가 아닌 값이 입력되는 예외 상황은 처리하지 않아도 됩니다.
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
let a = prompt('100을 초과하는 숫자를 입력해 주세요.');
if (a <= 100) {
  while (a <= 100 && a) {
    a = prompt('100을 초과하는 숫자를 입력해 주세요.');
  }
}

```

 </p>
 </details>
 
 <br>
 <br>
 
  #### ☁︎ 객체가 비어있는지 확인하기

 
 ```javascript

객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.

아래와 같이 동작해야 합니다.

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
isEmpty = ((schedule) => {
  for (let key in schedule) {
    return false;
  }

  return true;
})

let schedule = {};


console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

```

 </p>
 </details>
 
 <br>
 <br>
 
 #### ☁︎ 버블정렬 구현하기


```javascript
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
````

<details><summary><b>Answer</b></summary>
 <p>
   
```javascript
function bubble(arr) {
 let result = arr.slice();

for (let i = 0; i < result.length - 1; i++) {
for (let j = i; j < result.length - 1; j++) {
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

````

</p>
</details>

<br>
<br>

#### ☁︎ merge sort를 만들어보자


```javascript
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
````

<details><summary><b>Answer</b></summary>
<p>
  
```javascript
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
result.push(left.shift())
}
while (right.length) {
result.push(right.shift())
}

return result;
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));

````

</p>
</details>

<br>
<br>
 
 ### 난이도 : 🌶🌶🌶
 
 <br>
 
 #### ☁︎ 소수 출력하기

 
 ```javascript
소수(prime number)는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수입니다.
다시 말해서 1과 그 수 자신 이외의 자연수로는 나눌 수 없는 자연수를 소수라고 부르죠.

5는 2나 3, 4로 나눌 수 없기 때문에 소수입니다. 5를 이들 숫자로 나누면 나머지가 있기 때문이죠.
2부터 n까지의 숫자 중 소수만 출력해주는 코드를 작성해봅시다.

n = 10이라면 결과는 2,3,5,7이 되어야겠죠.
주의: 작성한 코드는 임의의 숫자 n에 대해 동작해야 합니다.
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
let num = Number(prompt('Enter the number you wanna know!'));
let checkEven = 0;

for (i = 1; i < num + 1; i++) {
  for (l = 1; l < i + 1; l++) {
    if (i % l == 0) {
      checkEven = ++checkEven
    }
  }
  if (checkEven == 2) {
    console.log(i);
  }
  checkEven = 0;
}
```

 </p>
 </details>
 
 <br>
 <br>
 
 #### ☁︎ 별 찍기 

```javascript

크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다.
온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다.

**은비를 위해 프로그램을 작성해 주세요.**


**입력**
5

**출력**
    *
   ***
  *****
 *******
*********


````

<details>
  <summary><b>Answer</b></summary>

  <p>

```javascript
    
function makeTree(num) {
  let result = '';
  for (i = 0; i < num; i++) {
    result += ' '.repeat(num - i - 1) + '*'.repeat(2 * i + 1) + '\n'
  } return
  console.log(result);
} 

makeTree(20);
    
````

</p>
</details>
<br>
<br>
