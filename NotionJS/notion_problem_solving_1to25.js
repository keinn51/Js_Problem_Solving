/* 🛑
[문제20 : 몫과 나머지](https://www.notion.so/20-62c820e571564b488e8136d7c1b7c46f)
공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
*/

// A20.
let Nanugi = (a, b) => console.log(parseInt(a / b, 10), a % b);

Nanugi(3, 2);

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

/* 🛑
[문제22 : 배수인지 확인하기](https://www.notion.so/22-1b2b76da2aba48508e89b38d50b1af6c)
다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

1)  i / 6 == 0
2)  i % 6 == 0
3)  i & 6 == 0
4)  i | 6 == 0
5)  i // 6 == 0
*/

// A22. 2

/* 🛑
[문제23 : OX문제](https://www.notion.so/23-OX-f0a0a6971b1b4a76a7430e0ff128e515)
`console.log(10/3)`의 출력 결과는 **3**이다.
*/

// A23. X (3.33333333이다)

/* 🛑
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
let toupper = console.log(prompt("Enter: ").toUpperCase());

/* 🛑
[문제25 : 원의 넓이를 구하세요](https://www.notion.so/25-a4d299898a4c4b2fb6615aa57b4c6f6f)
원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.
*/

// A25.
let GetArea = console.log(Math.pow(+prompt("Enter: "), 2) * 3.14);
