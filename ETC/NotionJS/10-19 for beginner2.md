문제 위의 기호는 난이도입니다. 5점 만점에 n점입니다. (주관적!)

개인적으로는 12, 16번이 한 번 볼만 하다고 생각합니다.

🛑🛑
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

<details>

<summary>code & explain</summary>

```js
function makeTree(num) {
  let result = '';
  for (i = 0; i < num; i++) {
    result += ' '.repeat(num - i - 1) + '*'.repeat(2 * i + 1) + '\n'
  }
  return console.log(result);
}

makeTree(20);
```

</details>

<br/>

🛑
[문제11 : for를 이용한 기본 활용](https://www.notion.so/11-for-e1aa3b5776fb4aa5b04addd81514f3a4)

1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.

```jsx
let s = 0;

//pass

console.log(s);
```


<details>

<summary>code & explain</summary>

```js
let s = 0;
for (i = 1; i < 101; i++) {
  s += i;
}
console.log(s);
```

</details>

<br/>


🛑
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
<details>

<summary>code & explain</summary>

```js
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
```

</details>

<br/>

🛑
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

<details>

<summary>code & explain</summary>

```js
function Planet(num) {
  switch (num) {
    case 1:
      console.log("수성");
      break;
    case 2:
      console.log("금성");
      break;
    case 3:
      console.log("지구");
      break;
    case 4:
      console.log("화성");
      break;
    case 5:
      console.log("목성");
      break;
    case 6:
      console.log("토성");
      break;
    case 7:
      console.log("천왕성");
      break;
    case 8:
      console.log("혜왕성");
      break;
  }
}

Planet(1);
```

</details>

<br/>


🛑
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

<details>

<summary>code & explain</summary>

```js
function ItIs369(num) {
  if (num % 3 === 0) {
    console.log("짝");
  } else {
    console.log(num);
  }
}

ItIs369(3);
```

</details>

<br/>


🛑
[문제15 : 자기소개](https://www.notion.so/15-8226e8af98884b07a204bf746a13f270)

신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.

만약 입력으로 `김다정`이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 
해주세요.

```jsx
**입출력**

입력 : 김다정
출력 : 안녕하세요. 저는 김다정입니다.
```

<details>

<summary>code & explain</summary>

```js

function Introduce(name) {
  return console.log(`안녕하세요. 저는 ${name}입니다.`);
}

Introduce("김다정");

```

</details>

<br/>


🛑
[문제16 : 로꾸거](https://www.notion.so/16-6a79764cb50f4849ad35b30073d61df0)

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

```jsx
**입출력**

입력 : 거꾸로
출력 : 로꾸거
```

<details>

<summary>code & explain</summary>

```js
prompt("입력 :")
  .split("")
  .reverse()
  .join("");
```

</details>

<br/>


🛑
[문제17 : 놀이기구 키 제한](https://www.notion.so/17-a4f5e8077c1d4527b173f96858666127)

유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

입력으로 키가 주어지면
키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

<details>

<summary>code & explain</summary>

```js
+prompt("Enter key") >= 150 ? "Yes" : "No";
```

prompt 앞에 + 가 붙으면 이를 숫자로 받아들입니다.

</details>

<br/>


🛑
[문제18 : 평균 점수](https://www.notion.so/18-4183c53d7a934f4da8fe54507dceb00a)

영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
**단, 소숫점 자리는 모두 버립니다.**

```jsx
**입출력**

입력 : 20 30 40
출력 : 30
```

<details>

<summary>code & explain</summary>

```js
function MakeCenter(국어, 수학, 영어) {
  return console.log(Math.floor((국어 + 수학 + 영어) / 3));
}

MakeCenter(23, 45, 21);
```

</details>

<br/>


🛑
[문제19 : 제곱을 구하자](https://www.notion.so/19-b268261747b3455a874b19f9dbb89ccf)

공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

<details>

<summary>code & explain</summary>

```js
let Zegop = (a, b) => Math.pow(a, b);
```

</details>

<br/>