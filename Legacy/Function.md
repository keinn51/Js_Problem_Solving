 ### 🎁 Function
 
 <br>

 
 ### 난이도 : 🌶
 
 <br>
 
 #### ☁︎ 자기소개


```javascript

신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.

만약 입력으로 `김다정`이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게
해주세요.

**입출력**

입력 : 김다정
출력 : 안녕하세요. 저는 김다정입니다.

````

<details>
<summary><b>Answer</b></summary>

<p>

```javascript

function Introduce(name) {
  return console.log(`안녕하세요. 저는 ${name}입니다.`)
}

Introduce('김다정')

````

</p>
</details>
<br>
<br>
   
 
 #### ☁︎ 제곱을 구하자


 ```javascript
공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.
````

<details><summary><b>Answer</b></summary>
<p>
    
```javascript
let a19 = 4;
let b19 = 2;
function Zegop(a, b) {
  return console.log(Math.pow(a, b))
}

Zegop(a19, b19);
```

 </p>
 </details>

 <br>
 <br>
 
 #### ☁︎ Factory 함수 사용하기

```javascript
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
```

<details><summary><b>Answer</b></summary>
<p>
    
```javascript

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

````

</p>
 </details>

 <br>
 <br>

  #### ☁︎ 몫과 나머지


 ```javascript
공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
````

<details><summary><b>Answer</b></summary>
<p>
    
```javascript
let a20 = 10;
let b20 = 3;
function MocNamugee(a, b) {
  let moc = parseInt(a / b, 10);
  let namugee = a % b;
  return console.log(moc + ' ' + namugee)
}

MocNamugee(a20, b20);
```

 </p>
 </details>

 <br>
 <br>
 
   #### ☁︎ 대문자로 바꿔주세요!


 ```javascript
민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 
어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.

민지를 위해 **이름이 입력되면 전부 대문자로 출력되는 프로그램**을 만들어주세요.


**입출력**

입력 : mary
출력 : MARY
````

<details><summary><b>Answer</b></summary>
<p>
    
```javascript
function Upper(str) {
  return console.log(str.toUpperCase())
}

Upper('mary');
```

 </p>
 </details>

 <br>
 <br>

  #### ☁︎ 구구단 출력하기


 ```javascript
1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

**입출력**

입력 : 2
출력 : 2 4 6 8 10 12 14 16 18
````

<details><summary><b>Answer</b></summary>
<p>
    
```javascript
function GUGUDAN(n) {
  let result = n;
  for (i = 2; i < 10; i++) {
    result = result + ' ' + n * i
  };
  return console.log(result)
}

GUGUDAN(2)

````

 </p>
 </details>

 <br>
 <br>
 
   
 ### 난이도 : 🌶🌶
 
<br>

#### ☁︎ 평균 점수


 ```javascript
영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
**단, 소숫점 자리는 모두 버립니다.**


**입출력**

입력 : 20 30 40
출력 : 30
````

<details><summary><b>Answer</b></summary>
<p>
    
```javascript
function MakeCenter(국어, 수학, 영어) {
  return console.log(Math.floor((국어 + 수학 + 영어) / 3))
}

MakeCenter(23, 45, 21)
```

 </p>
 </details>

 <br>
 <br>

  #### ☁︎ 원의 넓이를 구하세요


 ```javascript
원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.
````

<details><summary><b>Answer</b></summary>
<p>
    
```javascript
function GetArea(num) {
  return console.log(Math.pow(num, 2) * 3.14)
}

GetArea(3);
```

 </p>
 </details>

 <br>
 <br>
 
   #### ☁︎ 대문자만 지나가세요


진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.


<details><summary><b>Answer</b></summary>
  <p>

```javascript
function IsUpperStirng(str) {
  if (str === str.toUpperCase()) {
    console.log("Yes")
  }
  else {
    console.log("No")
  }
}

IsUpperStirng("OH")
````

 </p>
 </details>

 <br>
 <br>

    
#### ☁︎ 놀이기구 키 제한

```javascript

유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

입력으로 키가 주어지면
키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

````

<details>
<summary><b>Answer</b></summary>

<p>

```javascript

function OverHeight(num) {
  if (num > 150) {
  console.log('Yes')
  }
  else {
  console.log('No')
  }
  }

  OverHeight(160)
  
````

</p>
</details>
<br>
<br>
 
#### ☁︎ 3의 배수 인가요?

```javascript

영희는 친구와 게임을 하고 있습니다.서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.
입력으로 랜덤한 숫자 n이 주어집니다.
만약 그 수가 ** 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력 ** 해 주세요.

    
** 입출력 **
입력 : 3
출력: 짝

입력: 2
출력: 2

````



<details>
<summary><b>Answer</b></summary>
<p>

```javascript

function ItIs369(num) {
  if (num % 3 === 0) {
    console.log('짝');
  }
  else {
    console.log(num)
  }
}

ItIs369(3);

````



</p>
</details>
<br>
<br>
 
 #### ☁︎ (Arrow) 다음 Function을 Arrow Function으로 만들어 보세요

 
 ```javascript
 
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "동의하십니까?",
    function () { alert("동의하셨습니다."); },
    function () { alert("취소 버튼을 누르셨습니다."); }
);

```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript

ask = ((question, yes, no) => {
  if (confirm(question)) yes()
  else no();
});

ask(
  "동의하십니까?",
  () => alert("동의하셨습니다."),
  () => alert("취소 버튼을 누르셨습니다.")
);

```

 </p>
 </details>
 
 <br>
 <br>
