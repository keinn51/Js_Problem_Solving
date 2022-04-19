문제 위의 기호는 난이도입니다. 5점 만점에 n점입니다. (주관적!)


🛑
[문제1 : 배열의 삭제](https://www.notion.so/1-94677631c7b642a7bf3a60d93137f7b5)

다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

```jsx
var nums = [100, 200, 300, 400, 500];
```


<details>

<summary>code & explain</summary>

```js
var nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);
console.log(nums)
```

</details>

<br/>


🛑
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

<details>

<summary>code & explain</summary>

```js
var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);
```

</details>

<br/>


🛑
[문제3 : 변수의 타입](https://www.notion.so/3-8c063316324b42239786fd2c3e7bc105)

다음 출력 값으로 올바른 것은?

```jsx
var arr = [100, 200, 300];
console.log(typeof(arr));
```

1)  undefined
2)  string
3)  array
4)  object


<details>

<summary>code & explain</summary>
4

배열도 결국 객체입니다! 그리고 array라는 타입은 없읍니다.
</details>

<br/>


🛑
[문제4 : 변수의 타입2](https://www.notion.so/4-2-7c2a26a48d214a7d9e1c6d7164f76909)
    
다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

1)  입력 : a =1,   출력 : number

2)  입력 : a = 2.22,   출력 : boolean

3)  입력 : a = 'p',   출력 : string

4)  입력 : a = [1, 2, 3],   출력 : object



// A4. =2


🛑
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

<details>

<summary>code & explain</summary>

16

i는 1이랑 3밖에 돌지 않습니다.

</details>

<br/>


🛑
[문제6 : False](https://www.notion.so/6-False-75e3067aaa0c48c98ba1e19ef086fb71)

다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

1)  NaN
2)  1
3)  ""
4)  0
5)  undefined


<details>

<summary>code & explain</summary>

2

</details>

<br/>


🛑🛑
[문제7 : 변수명](https://www.notion.so/7-ade1039d89a547ec861ecbae6575a0af)

다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

1)  age
2)  Age
3)  let
4)  _age
5)  1age


// A7. 
/*
3)  let
5)  1age

<details>

<summary>code & explain</summary>

정답은 '3번', '5번' 입니다.
JavaScript 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작해야하며
let 은 이미 JavaScript 문법에 존재하는 예약어라 사용이 불가능합니다.

</details>

<br/>




🛑
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

<details>

<summary>code & explain</summary>

정답은 '84' 입니다. 
객체 내에서 중복 할당 가능!

</details>

<br/>

 🛑
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

<details>

<summary>code & explain</summary>

```js
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat("/", month, "/", day, " ", hour, ":", minute, ":", second)

console.log(result);
```

</details>

<br/>



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
