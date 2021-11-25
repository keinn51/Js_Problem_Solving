### 🎁 Variable

<br>

### 난이도 : 🌶

<br>

#### ☁︎ Var & Let (1)

```javascript
//무엇이 출력 될까요?

function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` 그리고 `undefined`
- B: `Lydia` 그리고 `ReferenceError`
- C: `ReferenceError` 그리고 `21`
- D: `undefined` 그리고 `ReferenceError`

<details><summary><b>Answer</b></summary>
  <p>
    

#### 정답: D

<a href="https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html">개념 참고 사이트</a>

호이스팅(Hoisting)이란 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것을 말합니다. 이 때 '선언'만 끌어 올려지며, '할당'은 끌어올려지지 않습니다.

함수 내에서, 우선 `var` 키워드를 사용해 `name` 변수를 선언합니다. 이것은 변수가 정의된 행에 실제로 도달할 때까지, `undefined`의 기본값으로 호이스팅 되는 것을 의미해요. name이라는 변수를 선언해준 var이 함수 어딘가에 있기는 하기 때문에 메모리 공간이 설정은 되었어요. 하지만 `name` 변수를 출력하려는 줄에서 아직 변수를 정의하고 있지 않기 때문에, `undefined` 값을 유지하고 있어요.

`let` 키워드(그리고 `const`)를 가지는 변수들은, `var`와는 달리, 호이스팅 되지만 초기화되지 않아요. 그것들을 선언(초기화)하는 줄 전에는 접근할 수 없어요. 이것은 "일시적 사각지대"라고 불려요. 선언되기 전 변수에 접근하려고 하면, JavaScript는 `ReferenceError`를 던져요.



 </p>
 </details>

 <br>
 <br>

```

#### ☁︎ Var & Let (2)

```javascript
// 무엇이 출력될까요?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` 그리고 `0 1 2`
- B: `0 1 2` 그리고 `3 3 3`
- C: `3 3 3` 그리고 `0 1 2`

<details><summary><b>Answer</b></summary>
  <p>

#### 정답: C

<a href="https://developer.mozilla.org/ko/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout">개념 참고 사이트1 </a>

<a href=" https://www.bangseongbeom.com/javascript-var-let.html#fn:create-per-iteration-environment">개념 참고 사이트2</a>


<br>
<b>setTimeout 기본 구문</b>
=> window.setTimeout(function, milliseconds);
=> milliseconds후에 function을 호출하겠다!
<br>

첫 번째의 루프 변수 `i`는 `var` 키워드를 사용해 선언되어 있기 때문에, 이 값은 <b>전역 변수</b>가 됩니다.

루프 동안, 단항 연산자 `++`를 사용하여, 매번 `i`의 값을 `1`씩 증가했어요. 그러니까 세 번의 setTimeout을 통해 1밀리초 뒤에 console을 세 번 실행할 때에는, 루프를 이미 세 번 돌았기 때문에 i는 3이 되어 있는 거에요.

두 번째 루프에서, 변수 `i`는 `let` 키워드를 사용해 선언되었어요: `let`(그리고 `const`) 키워드로 선언된 변수는 블록 범위예요(블록은 `{ }` 사이의 모든 것). 여기서 가장 중요한 건, 이 때의 let은 각각의 반복 동안, `i`는 새로운 값이라는 거에요. 

i=0, i=1, i=2 라고 할 때 각각의 i는 새로운 i라는 거죠. var에서 전역변수 i를 설정해주고 이 값을 하나씩 추가해준 것과는 다르답니다. 그렇기 때문에 나중에 불러온 setTimeout 함수에서도 0,1,2가 그대로 남아 있는 거에요!

 </p>
 </details>

 <br>
 <br>

````

### 🎁 Basic

<br>

### 난이도 : 🌶

<br>

#### ☁︎ Is string Boolean?

```javascript
// 무엇이 출력 될까요?

+true;
!"Lydia";
````

- A: `1` 그리고 `false`
- B: `false` 그리고 `NaN`
- C: `false` 그리고 `false`

<details><summary><b>Answer</b></summary>
  <p>
    
#### 정답 : A
    
단항 더하기는 피연산자를 숫자로 변환하려 시도해요. `true`는 `1`이고, `false`는 `0`이에요.

예를 들어 prompt(...)는 사용자의 입력을 string으로 받아들이는데(숫자를 입력해도 문자로!), +prompt(...)을 한다면 숫자는 숫자로 받아들인답니다.

문자열 `'Lydia'`는 참 같은 값이에요. 실제로는, "이 참 같은 값이 거짓 같은 값인가?"를 물어보고 있어요. 이것은 `false`를 리턴해요.

값이 없거나 0, -0, null, false, NaN, undefined, 빈 문자열 ("")이라면 객체의 초기값은 false가 됩니다.
문자열 "false"를 포함한 그 외 모든 다른 값은 초기값을 true로 설정합니다.

 </p>
 </details>

 <br>
 <br>

````

### 🎁 this

<br>

### 난이도 : 🌶

<br>

#### ☁︎ 객체의 메소드로서 this

```javascript
// 무엇이 출력 될까요?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());
````

- A: `20` 그리고 `62.83185307179586`
- B: `20` 그리고 `NaN`
- C: `20` 그리고 `63`
- D: `NaN` 그리고 `63`

<details><summary><b>Answer</b></summary>
  <p>
    
#### 정답: B

<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this">참고 사이트 </a>

`diameter`의 값은 정규 함수지만, `perimeter`의 값은 화살표 함수라는 점을 유의하세요.

화살표 함수에서, `this` 키워드는 통상적인 함수와는 다르게 현재 주위의 범위를 참조해요! 이것은 `perimeter`를 부르면, shape 객체가 아닌 그 주위의 범위(예를 들면 window)를 참조하는 것을 의미해요.

그 객체에는 `radius`라는 값은 없기 때문에 `undefined`를 리턴해요.

함수를 어떤 객체의 메서드로 호출하면 this의 값은 그 객체를 사용합니다. (사이트 참고!)

 </p>
 </details>

 <br>
 <br>

````

### 🎁 object

<br>

### 난이도 : 🌶

<br>

#### ☁︎ 객체의 키

```javascript
// 정답은 어느 것일까요?

const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
````

- A: `mouse.bird.size` 는 유효하지 않아요
- B: `mouse[bird.size]` 는 유효하지 않아요
- C: `mouse[bird["size"]]` 는 유효하지 않아요
- D: 이 모든 것들은 유효해요.

<details><summary><b>Answer</b></summary>
  <p>
    
#### 정답 :  A

JavaScript에서, 모든 객체 키는 문자열이에요 (심볼이 아닌 한). 비록 그것을 문자열 _형_ 으로 입력하지 않아도, 항상 내부적으로 문자열로 변환돼요.

JavaScript는 문장을 해석(또는 박스 해제)해요. 대괄호 표기를 사용하면, 첫 번째 열린 대괄호 `[`를 보고 닫힌 대괄호 `]`를 찾을 때까지 진행해요. 그때에만, 그 문장을 평가할 거예요.

`mouse[bird.size]`: 먼저 `"small"`인 `bird.size`를 평가해요. `mouse["small"]` 은 `true`를 리턴해요.

<br>

그러나, 닷 표기법에서, 이것은 발생하지 않아요, `mouse`는 `bird`라고 불리는 키를 가지고 있지 않아요. 즉, `mouse.bird`는 `undefined`를 의미해요. 그 후, 닷 표기법을 사용해 `size`를 물어봐요.

`mouse.bird.size`. `mouse.bird`는 `undefined`로, 실제로는 `undefined.size`를 물어보고 있어요. 이것은 유효하지 않기 때문에, `Cannot read property "size" of undefined`와 비슷한 에러를 던질 거예요.


 </p>
 </details>

 <br>
 <br>

```

#### ☁︎ 객체의 복사 방법

```javascript
// 무엇이 출력 될까요?

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

- A: `Hello`
- B: `Hey!`
- C: `undefined`
- D: `ReferenceError`
- E: `TypeError`

<details><summary><b>Answer</b></summary>
  <p>
    
#### 정답: A

<a href="https://ko.javascript.info/object-copy">개념 참고 사이트</a>

객체와 원시 타입의 근본적인 차이 중 하나는 객체는 ‘참조에 의해(by reference)’ 저장되고 복사된다는 것입니다.

원시값(문자열, 숫자, 불린 값)은 ‘값 그대로’ 저장·할당되고 복사되는 반면에 말이죠.

같은 상황에서 다음과 같이 했다면 어땠을까요?

```javascript
let c = 4;
let d;

d = c;
c = 5;
console.log(d);
```

d는 그대로 4가 나올 것입니다. c의 값을 그대로 복사해와서 d에 저장했기 때문에, c의 변화와 상관 없이 d는 이미 4로 고정되어 있습니다.

그런데 객체의 동작방식은 이와 다릅니다.

변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소’인 객체에 대한 '참조 값’이 저장됩니다.

<br>

우선 변수 `c`는 객체에 대한 값을 유지해요. 그 후, `c`와 동일한 객체 참조를 `d`에 할당해요.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

한 개의 객체를 변경하면, 그것들 모두 변경해요.

 </p>
 </details>

 <br>
 <br>
