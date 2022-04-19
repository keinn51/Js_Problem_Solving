#### ☁︎ 소수판별

```javascript
숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
```

<details><summary><b>Answer</b></summary>
  <p>

```javascript
function isSosu() {
  let num = +prompt("Enter the number: ");

  if (num > 1 && num == parseInt(num, 10)) {
    let count = 0;
    for (i = 1; i < num + 1; i++) {
      if (num % i == 0) {
        count++;
      }
    }
    if (count == 2) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  } else {
    console.log("No");
  }
}

isSosu();
```

 </p>
 </details>

 <br>
 <br>

#### ☁︎ 다음 If절을 Switch절로 만들어 보세요.

```javascript
let a = prompt("a?");

if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}

if (a == 2 || a == 3) {
  alert("2,3");
}
```

<details><summary><b>Answer</b></summary>
<p>
    
```javascript
switch (a) {
  case a == 0:
    alert(0);
    break;
  case a == 1:
    alert(1);
    break;
  case a == 2 || a == 3:
    alert('2,3');
    break;
}
```

 </p>
 </details>
 <br>
 <br>

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

// getday를 안 쓰고 if와 switch로 나타내기
function solution() {
const a = +prompt('Enter the month: ');
const b = +prompt('Enter the date: ');
let datenum = 0;

// 월과 일을 숫자로 환산
if ((a % 2 == 1) && !(a == 2)) {
datenum = (((30 + 31) _ (parseInt(a / 2, 10)))) - 1 + b;
}
if ((a % 2 == 0) && !(a == 2)) {
datenum = ((30 _ (parseInt(a / 2, 10) - 1)) + (31 \* (parseInt(a / 2, 10)))) - 1 + b;
}
if (a == 2) {
datenum = 31 + b;
};

// 값에 맞는 요일을 출력
switch (datenum % 7) {
case (1):
console.log("WED")
break;
case (2):
console.log("THU");
break;
case (3):
console.log("FRI");
break;
case (4):
console.log("SAT");
break;
case (5):
console.log("SUN");
break;
case (6):
console.log("MON");
break;
case (0):
console.log("TUE");
break;

}

}

solution();

```

 </p>
 </details>

 <br>
 <br>
```
