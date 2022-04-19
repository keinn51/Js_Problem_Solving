### 🎁 Method


<br>

### 난이도 : 🌶

#### ☁︎ 2020년

```javascript
2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

**제한 조건**
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다.
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
```

<details><summary><b>Answer</b></summary>
<p>

```javascript
const date = prompt('일을 입력하세요.');

function solution(a, b) {
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const x = new Date('2020-' + a + '-' + b);
return day[x.getDay()];
}
console.log(solution(month, date));

````

</p>
</details>

<br>
<br>


#### ☁︎ 10진수를 2진수로

```javascript
우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

**사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**
````

<details><summary><b>Answer</b></summary>
 <p>
   
```javascript
function twostring() {
 let num = +prompt('Enter the number: ');
 return console.log(num.toString(2))
}

twostring();

````

</p>
</details>

<br>
<br>


#### ☁︎ getTime()함수 사용하기


```javascript
Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

이를 이용하여 **현재 연도(2019)를 출력해보세요.**
````

<details><summary><b>Answer</b></summary>
<p>

```javascript
const date = new Date();

console.log(date);

let year = Math.floor(date.getTime() / (1000 _ 3600 _ 24 \* 365) + 1970);

console.log(year);

````

</p>
</details>

<br>
<br>



<br>

### 난이도 : 🌶🌶

<br>

### 난이도 : 🌶🌶🌶

<br>

