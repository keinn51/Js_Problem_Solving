// This is the Problem Solving JS file!
// You can get the problem easily at https://www.notion.so/JS-100-94d97d294dd14c9b911a02c840fa9f2d




/* 🛑
[문제1 : 배열의 삭제](https://www.notion.so/1-94677631c7b642a7bf3a60d93137f7b5)
다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

```jsx
var nums = [100, 200, 300, 400, 500];
```
*/


// A1.

var nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);
console.log(nums)



/* 🛑
[문제2 : 배열의 내장함수](https://www.notion.so/2-788973aacbf949dc81e98db31036d458)

<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

```jsx
**데이터**
var arr = [200, 100, 300];
//pass
console.log(arr);

**출력**
[200, 100, 10000, 300]
```
*/


// A2.

var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);


/* 🛑
[문제3 : 변수의 타입](https://www.notion.so/3-8c063316324b42239786fd2c3e7bc105)

다음 출력 값으로 올바른 것은?

```jsx
var arr = [100, 200, 300];
console.log(typeof(arr));
```

1)  undefined
2)  string
3)  number
4)  object
*/


// A3. = 4


/* 🛑
[문제4 : 변수의 타입2](https://www.notion.so/4-2-7c2a26a48d214a7d9e1c6d7164f76909)
다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

1)  입력 : a =1,   출력 : number

2)  입력 : a = 2.22,   출력 : boolean

3)  입력 : a = 'p',   출력 : string

4)  입력 : a = [1, 2, 3],   출력 : object
*/


// A4. =2


/* 🛑
[문제5 : for문 계산](https://www.notion.so/5-for-638d3381b00f4e1d89d4350b089d491a)
다음 코드의 출력 값으로 알맞은 것은?

```jsx
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);
```
*/


// A5. = 16



/* 🛑
[문제6 : False](https://www.notion.so/6-False-75e3067aaa0c48c98ba1e19ef086fb71)
다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

1)  NaN
2)  1
3)  ""
4)  0
5)  undefined
*/

// A6. = 2


/* 🛑🛑
[문제7 : 변수명](https://www.notion.so/7-ade1039d89a547ec861ecbae6575a0af)
다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

1)  age
2)  Age
3)  let
4)  _age
5)  1age
*/

// A7. 
/*
3)  let
5)  1age

정답은 '3번', '5번' 입니다.
JavaScript 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작해야하며
let 은 이미 JavaScript 문법에 존재하는 예약어라 사용이 불가능합니다.
*/

/* 🛑
[문제8 : 객체의 키 이름 중복](https://www.notion.so/8-c59d74ba23ed46b68d304fb03ac1b341)
자바스크립트 객체를 다음과 같이 만들었다. 
출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

```jsx
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);
```
*/

// A8. = 정답은 '84' 입니다. 
// 객체 내에서 중복 할당 가능하다.

/*  🛑
[문제9 : concat을 활용한 출력 방법](https://www.notion.so/9-concat-1f73859ed0714620b8fb88fd0800edaf)
다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

```jsx
**데이터**
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = //빈칸을 채워주세요

console.log(result);

**출력**
2019/04/26 11:34:27
```
*/

// A9.
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat("/", month, "/", day, " ", hour, ":", minute, ":", second)

console.log(result);


/* 🛑🛑
[문제10 : 별 찍기](https://www.notion.so/10-26e59abc17d6492eb8fe8f8c20c632ca)
크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 
온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

**은비를 위해 프로그램을 작성해 주세요.**

```jsx
**입력**
5

**출력**
    *
   ***
  *****
 *******
*********
```
*/

// A10.
function makeTree(num) {
  let result = '';
  for (i = 0; i < num; i++) {
    result += ' '.repeat(num - i - 1) + '*'.repeat(2 * i + 1) + '\n'
  }
  return console.log(result);
}

makeTree(20);

/* 🛑
[문제11 : for를 이용한 기본 활용](https://www.notion.so/11-for-e1aa3b5776fb4aa5b04addd81514f3a4)
1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.

```jsx
let s = 0;

//pass

console.log(s);
```
*/

// A11.
let s = 0;
for (i = 1; i < 101; i++) {
  s += i;
}
console.log(s);

/* 🛑
[문제12 : 게임 캐릭터 클래스 만들기](https://www.notion.so/12-428b1f00ec8e4199a62e512afc83ab0b)
다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
**주어진 소스 코드를 수정해선 안됩니다.**

```jsx
**데이터**
<여기에 class를 작성하세요.>

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

**출력**
545 210 10
파이어볼
```
*/

// A12.
class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }

  attack() {
    console.log(`파이어볼`);
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

/* 🛑
[문제13 : 몇 번째 행성인가요?](https://www.notion.so/13-d4c0ca85e92d4bcb90b6b2091a00b502)
우리 태양계를 이루고 있는 행성은 **수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성**으로 총 8개 입니다. 
저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 
출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

```jsx
**입출력**

입력 : 1
출력 : 수성
```
*/

// A13.
function Planet(num) {
  switch (num) {
    case 1:
      console.log('수성');
      break;
    case 2:
      console.log('금성');
      break;
    case 3:
      console.log('지구');
      break;
    case 4:
      console.log('화성');
      break;
    case 5:
      console.log('목성');
      break;
    case 6:
      console.log('토성');
      break;
    case 7:
      console.log('천왕성');
      break;
    case 8:
      console.log('혜왕성');
      break;
  }
}

Planet(1);

/* 🛑
[문제14 : 3의 배수 인가요?](https://www.notion.so/14-3-40c5e827e7954e969c4eb7554021dda6)
영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.

입력으로 랜덤한 숫자 n이 주어집니다.

만약 그 수가 **3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력**해 주세요.

```jsx
**입출력**

입력 : 3
출력 : 짝

입력 : 2
출력 : 2
```
*/

// A14.

function ItIs369(num) {
  if (num % 3 === 0) {
    console.log('짝');
  }
  else {
    console.log(num)
  }
}

ItIs369(3);

/* 🛑
[문제15 : 자기소개](https://www.notion.so/15-8226e8af98884b07a204bf746a13f270)
신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.

만약 입력으로 `김다정`이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 
해주세요.

```jsx
**입출력**

입력 : 김다정
출력 : 안녕하세요. 저는 김다정입니다.
```
*/

// A15.
function Introduce(name) {
  return console.log(`안녕하세요. 저는 ${name}입니다.`)
}

Introduce('김다정')

/* 🛑
[문제16 : 로꾸거](https://www.notion.so/16-6a79764cb50f4849ad35b30073d61df0)
문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

```jsx
**입출력**

입력 : 거꾸로
출력 : 로꾸거
```
*/

// A16.

prompt("입력 :").split('').reverse().join('');

/* 🛑
[문제17 : 놀이기구 키 제한](https://www.notion.so/17-a4f5e8077c1d4527b173f96858666127)
유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

입력으로 키가 주어지면
키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.
*/

// A17.
(+prompt("Enter key") >= 150) ? "Yes" : "No"


/* 🛑
[문제18 : 평균 점수](https://www.notion.so/18-4183c53d7a934f4da8fe54507dceb00a)
영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
**단, 소숫점 자리는 모두 버립니다.**

```jsx
**입출력**

입력 : 20 30 40
출력 : 30
```
*/

// A18.
function MakeCenter(국어, 수학, 영어) {
  return console.log(Math.floor((국어 + 수학 + 영어) / 3))
}

MakeCenter(23, 45, 21)

/* 🛑
[문제19 : 제곱을 구하자](https://www.notion.so/19-b268261747b3455a874b19f9dbb89ccf)
공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.
*/

// A19.
let Zegop = ((a, b) => Math.pow(a, b));


/* 🛑
[문제20 : 몫과 나머지](https://www.notion.so/20-62c820e571564b488e8136d7c1b7c46f)
공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
*/

// A20.
let Nanugi = ((a, b) => console.log(parseInt(a / b, 10), a % b))

Nanugi(3, 2)


/* 🛑🛑
[문제21 : set은 어떻게 만드나요?](https://www.notion.so/21-set-c8ff3a241cca477ab0c56d7e9a49e6b4)
다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();
*/

// A21. 3,5
// set은 object형태로 저장되어 있다!


/*
[문제22 : 배수인지 확인하기](https://www.notion.so/22-1b2b76da2aba48508e89b38d50b1af6c)
다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

1)  i / 6 == 0
2)  i % 6 == 0
3)  i & 6 == 0
4)  i | 6 == 0
5)  i // 6 == 0
*/

// A22. 2


/*
[문제23 : OX문제](https://www.notion.so/23-OX-f0a0a6971b1b4a76a7430e0ff128e515)
`console.log(10/3)`의 출력 결과는 **3**이다.
*/

// A23. X (3.33333333이다)


/*
[문제24 : 대문자로 바꿔주세요!](https://www.notion.so/24-bd6c963c0b294c8fa0b1c98f932dcc28)
민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 
어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.

민지를 위해 **이름이 입력되면 전부 대문자로 출력되는 프로그램**을 만들어주세요.

```jsx
**입출력**

입력 : mary
출력 : MARY
```
*/

// A24.
let toupper = console.log(prompt("Enter: ").toUpperCase())


/*
[문제25 : 원의 넓이를 구하세요](https://www.notion.so/25-a4d299898a4c4b2fb6615aa57b4c6f6f)
원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.
*/

// A25.
let GetArea = console.log(Math.pow(+prompt('Enter: '), 2) * 3.14)

