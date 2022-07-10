문제 위의 기호는 난이도입니다. 5점 만점에 n점입니다. (주관적!)

개인적으로는 27번에서 객체 개념, 28번이 한 번 볼만 하다고 생각합니다.

🛑
[문제20 : 몫과 나머지](https://www.notion.so/20-62c820e571564b488e8136d7c1b7c46f)

공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

<details>

<summary>code & explain</summary>

```js
let Nanugi = (a, b) => console.log(parseInt(a / b, 10), a % b);

Nanugi(3, 2);
```

</details>

<br/>


🛑🛑
[문제21 : set은 어떻게 만드나요?](https://www.notion.so/21-set-c8ff3a241cca477ab0c56d7e9a49e6b4)

다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();

<details>

<summary>code & explain</summary>

3,5

set은 object형태로 저장되어 있다!

</details>

<br/>



🛑
[문제22 : 배수인지 확인하기](https://www.notion.so/22-1b2b76da2aba48508e89b38d50b1af6c)

다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

1)  i / 6 == 0
2)  i % 6 == 0
3)  i & 6 == 0
4)  i | 6 == 0
5)  i // 6 == 0

<details>

<summary>code & explain</summary>

2

나머지.. 아시죠?

</details>

<br/>


🛑
[문제23 : OX문제](https://www.notion.so/23-OX-f0a0a6971b1b4a76a7430e0ff128e515)

`console.log(10/3)`의 출력 결과는 **3**이다.

<details>

<summary>code & explain</summary>

X (3.33333333이다)

자바스크립트는 int랑 int가 나뉜다고 int가 나오지 않습니다.

</details>

<br/>



🛑
[문제24 : 대문자로 바꿔주세요!](https://www.notion.so/24-bd6c963c0b294c8fa0b1c98f932dcc28)

민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 
어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.

민지를 위해 **이름이 입력되면 전부 대문자로 출력되는 프로그램**을 만들어주세요.

```jsx
**입출력**

입력 : mary
출력 : MARY
```

<details>

<summary>code & explain</summary>

```js
let toupper = console.log(prompt("Enter: ").toUpperCase());
```

</details>

<br/>

🛑
[문제25 : 원의 넓이를 구하세요](https://www.notion.so/25-a4d299898a4c4b2fb6615aa57b4c6f6f)

원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

<details>

<summary>code & explain</summary>

```js
let GetArea = console.log(Math.pow(+prompt("Enter: "), 2) * 3.14);
```

</details>

<br/>

🛑
[문제26 : 행성 문제2](https://www.notion.so/26-2-a9ae3f90c41c4aef96af9c10f13a1d5d)
우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

**행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.

<details>

<summary>code & explain</summary>

```js
function GetPlanetEng(planet) {
  let planetK = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"]
  let planetE = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

  return planetE[planetK.indexOf(planet)];
}
```

</details>

<br/>


🛑🛑
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

<details>

<summary>code & explain</summary>

```js
const getObject = function () {
    let name = prompt("Enter the names: ").split(' ');
    let scores = prompt('Enter the scores: ').split(' ');

    return Object.fromEntries(name.map((elem, i) => [elem, Number(scores[i])]));
}

console.log(getObject());
```

</details>

<br/>

🛑🛑
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

<details>

<summary>code & explain</summary>

```js
const	twoGram = function (str) {
	str.split('').forEach((a, i, arr) => (i + 1 < arr.length) ? console.log(arr[i], arr[i + 1]) : 0);
}

twoGram('Javascript');
```

</details>

<br/>

🛑
[문제29 : 대문자만 지나가세요](https://www.notion.so/29-ef7e9672d0db44efa3e69c4799aea12e)
진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

**알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램**을 만들어 주세요.

<details>

<summary>code & explain</summary>

```js
let input = prompt("Enter")
let IsUpperStirng = () => console.log((input == input.toUpperCase()) ? "Yes" : "No")

IsUpperStirng()
```

</details>

<br/>