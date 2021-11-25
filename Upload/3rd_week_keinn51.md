### 🎁 Array

<br>

### 난이도 : 🌶🌶

<br>

#### ☁︎ 마라톤 미완주 선수 찾기

```javascript
꼭 사이트에 들어가셔서 먼저 풀어보시고 코드 채점 받아보세요!

/*https://programmers.co.kr/learn/courses/30/parts/12077"*/

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항

마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

// 입출력 예

<1>
participant: ["leo", "kiki", "eden"] completion : ["eden", "kiki"] return : "leo"

<2>
participant: ["marina", "josipa", "nikola", "vinko", "filipa"] completion : ["josipa", "filipa", "marina", "nikola"] return : "vinko"

<3>
participant: ["mislav", "stanko", "mislav", "ana"] completion : ["stanko", "ana", "mislav"] return : "mislav"

// 입출력 예 설명

예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
```

<details><summary><b>Answer</b></summary>
  <p>

##### 📌 array의 method인 filter나 find를 사용, 답은 맞지만 비효율적인 코드.

```javascript
function solution(participant, completion) {
  var answer = "";

  for (let i = 0; i < participant.length; i++) {
    if (
      // 동명이인이 없는 경우
      !(
        typeof completion.find((element) => element == participant[i]) ==
        "string"
      )
    ) {
      answer = participant[i];
      return answer;
    }

    if (
      // 동명이인의 경우
      participant.filter((element) => element == participant[i]).length == 2
    ) {
      answer = participant[i];
      return answer;
    }
  }
}
```

그러나 위의 식은 반복문을 세 번이나 쓰기 때문에 비효율적인 코딩입니다.  
반복문을 최대한 줄여 시간 효율적인 코드를 구성해야 하므로 다른 방법을 생각해봅니다.

##### 📌 sort를 사용하는 방법

```javascript
function solution(participant, completion) {
  var answer;

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
}
```

반복문을 한 번만 사용해 시간을 절약할 수 있습니다.

##### 📌 프로그래머스 1티어 풀이

```javascript
let solution = (participant, completion) =>
  participant.find(
    (name) => !completion[name]--,
    completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
  );

// map : 배열의 각 요소에 함수를 적용하고, 그 결과를 모아 배열로 반환.
// find : 조건에 맞는 첫 번째 요소를 반환.
```

array도 object이기 때문에, key-value로 이루어진 쌍을 받을 수 있습니다.  
(completion[name] | 0) + 1 에서 name이라는 key를 가진 요소가 completion에 있다면 그 value에 1을 더해줍니다.

value값이 없었다면 0 + 1 을 통해 value값이 1이 됩니다.
그 결과의 예를 들면 ['cake', 'ball', 'sauce', 'cake', cake: 2, ball: 1, sauce: 1] 이런 식입니다.

map이 끝났다면 find로 이어지는데, completion의 요소 중 false가 되는 값을 찾으면 그 값에 !을 붙여 true로 만들어줍니다.  
그렇다면 completion요소 중에서 false가 나오는 값이 최종 답이 될 것입니다.  
우리는 평소 false로 칭해지는 값들은 (false, 0, -0, NaN, null, undefined, '')라고 알고 있습니다.

find(name => 여기에서 부르는 name은 participant 요소들의 name 입니다.

여기서부터는 예를 들어서 설명해봅니다.

> 동명이인이 없는 경우

participant : ['cake', 'ball', 'sauce', 'carrot']  
completion : ['cake', 'ball', 'sauce']  
인 경우

- participant의 name으로 completion의 key값을 부르는 것인데, carrot은 participant에만 있고 completion에는 없는 값이라서 undefined가 반환됩니다.

> 동명이인이 있는 경우

participant : ['cake', 'ball', 'sauce', 'cake']  
completion : ['cake', 'ball', 'sauce']  
인 경우

- cake의 value가 이전에 이미 1-- 을 통해 0이 되었으므로, cake을 다시 불러줬을 때 그 값은 0이어서 false가 됩니다.

 </p>
 </details>
 <br>
 <br>

#### ☁︎ 배열의 정렬

```javascript
부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

// 문제 설명

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항

array의 길이는 1 이상 100 이하입니다.
array의 각 원소는 1 이상 100 이하입니다.
commands의 길이는 1 이상 50 이하입니다.
commands의 각 원소는 길이가 3입니다.

// 입출력 예

array: [1, 5, 2, 6, 3, 7, 4] commands: [[2, 5, 3], [4, 4, 1], [1, 7, 3]] return:  [5, 6, 3]

// 입출력 예 설명

[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.

[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.

[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.
```

 <details><summary><b>Answer</b></summary>

   <p>

##### 📌 가장 간결한 풀이

```javascript
function solution(array, commands) {
  var answer = [];
  for (let a of commands) {
    answer.push(array.slice(a[0] - 1, a[1]).sort((a, b) => a - b)[a[2] - 1]);
  }
  return answer;
}
```

array를 slice로 베껴 sort로 정렬시킵니다.  
숫자 관련 sort를 핧 시에는 무조건 sort안에 (a, b) => a - b 를 넣어주는 것이 좋습니다.

넣어주지 않는다면 유니코드 해석 순서상 80이 9보다 먼저 오는 특이한 상황이 발생합니다.  
참고 : <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">MDN</a>

##### 📌 새로운 개념 풀이

```javascript
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
```

제가 푼 건 아니지만 신기학게 풀어서 가져와 봤습니다.  
const [sPosition, ePosition, position] = command 어떻게 이런 생각을...  
함수에서 filter요소를 다루는 것도 색달랐습니다~

  </p>
  </details>
  <br>
  <br>

#### ☁︎ 반장 선거

Object 내장 함수도 사용하는 문제입니다.

```javascript
새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.
그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

**입력**
원범 원범 혜원 혜원 혜원 혜원 유진 유진

**출력**
혜원(이)가 총 4표로 반장이 되었습니다.
```

 <details><summary><b>Answer</b></summary>

   <p>

```javascript
function voteLeader() {
  let votes = prompt("Enter the result of vote: "),
    resultArr = [],
    result;

  votes.split(" ").forEach((element) => {
    resultArr[element] = (resultArr[element] | 0) + 1;
  });

  result = Object.entries(resultArr).sort((a, b) => b[1] - a[1])[0];

  return console.log(
    `${result[0]}(이)가 총 ${result[1]}표로 반장이 되었습니다.`
  );
}
```

  </p>
  </details>
  <br>
  <br>

### 🎁 This

<br>

### 난이도 : 🌶

#### ☁︎ 화살표 함수에서 this

```javascript
// 다음 함수의 출력값은?

window.myName = "Hannah";
var obj = {
  myName: "Barbie",
  logName: () => {
    console.log(this.myName);
  },
};

obj.logName();
```

- A: window
- B: Barbie
- C: undefined
- D: Hannah

 <details><summary><b>Answer</b></summary>

   <p>

##### 정답 : D

<a href="https://velog.io/@grinding_hannah/JavaScript-화살표함수arrow-function-알기">화살표함수(arrow function) 알기</a>

this의 사용법 중 두 개만 뽑아서 보자면,

1. 일반함수 실행 : 함수실행에서의 This는 전역객체(window)이다.

2. 메소드 실행 : 메소드란, 객체의 속성으로 정의된 함수이다. 이 경우, This는 '해당 메소드를 소유하고 있는 객체'가 된다.

이렇게 된다. 그리고 This의 가장 중요한 속성은 <b> This는 호출 시점에서 실행함수가 가르키는 객체라는 사실이다</b>

<br>

위의 문제에서 의도한 대로 barbie가 나오게 만들고 싶었다면 다음과 같이 코딩해야 한다.

```javascript
var obj = {
  myName: "Barbie",
  logName: function () {
    console.log(this.myName);
  },
};

obj.logName(); //"Barbie"
```

이렇게 해야 obj메소드로 this를 사용하면서 Barbie라는 값을 얻을 수 있는 것이다.

<br>

그런데 화살표 함수는 '익명 함수'이다. 함수를 재사용하려고 만드는 목적이 없기 때문에 함수명을 지정해주지 않는다는 말이다.

> 화살표 함수는 this를 사용할 때 obj의 method로 인식되지 못한다.

문제의 console.log(this.myName); 얘는 메소드 함수 안의 this가 아닌 것으로 간주된다.

문제의 식은 아래와 같은 식과 결과가 똑같다.

```javascript
window.myName = "Hannah";
var obj = {
  myName: "Barbie",
  logName: this.myName,
};

console.log(obj.logName);
```

  </p>
  </details>
  <br>
  <br>

### 🎁 Basic

<br>

### 난이도 : 🌶🌶

<br>

#### ☁︎ Call by value & Call by reference

이 문제의 답을 모르겠다면!

<a href="https://perfectacle.github.io/2017/10/30/js-014-call-by-value-vs-call-by-reference/ "> 참고 </a>

```javascript
각 세 문제의 출력 결과를 예측해보세요.

<1>
var a = 1;
var func = function (b) { // callee
  b = b + 1;
}
func(a); // caller
console.log(a); // =?

<2>
var a = {};
var func = function (b) { // callee
  b.c = 1;
}
func(a); // caller
console.log(a.c); // =?

<3>
var a = {};
var func = function (b) {
  b = (b.a = 1);
  b.b = 2;
}
func(a);
console.log(a); // =?

```

<details><summary><b>Answer</b></summary>
<p>

##### <1> : 1

기본적으로 자바스크립트는 원시값을 arguments로 넘겨주면 call by value의 형태로 작동한다.

따라서 caller가 1을 arguments로 넘겨줘도 그 값은 복사되어 넘어오기 때문에

callee 내부에서 지지고 볶고 해도 전혀 영향을 받지 않아서 결과적으로 a 값은 원래 값인 1이 찍히게 된다.

##### <2> : 1

b의 값이 a가 가리키는 메모리 주소이기 때문에, b.c 이런 식으로 설정해주는 것은 a의 {}값을 바꾸는 것과 같다.

따라서 a = {c:1} 이 된다.

##### <3> : {a:1}

b.a에서 a와 같이 바라보고 있는 참조값 안에 key = a, value = 1 이라는 요소를 넣어준다.

그 다음 b에 b.a의 요소인 1이 들어가면서, b.b가 먹히지 않는 것이다.

이 때 b는 이미 1이기 때문이다. (새로운 참조대상으로의 이동)

</p>
</details>

<br>
<br>

### 🎁 If & Switch

<br>

### 난이도 : 🌶

<br>

#### ☁︎ 프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요

```javascript


사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요.

이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요.

틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.

비밀번호 확인 절차는 다음과 같습니다.

- 맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
- 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
- 빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.


중첩 if 블록을 사용하고, 코드 전체의 가독성을 고려해 답안을 작성하세요.

힌트: 프롬프트 창에 아무것도 입력하지 않으면 빈 문자열인 ''가, ESC를 누르면 null이 반환됩니다.

```

<details><summary><b>Answer</b></summary>
<p>

```javasript
let Admin = prompt(`who's there?`);

if (Admin == 'Admin') {
  let Password = prompt('Password?');
  if (Password == 'TheMaster') {
    alert('Welcome!');
  }
  else if (Password == '' || Password == null) {
    alert('Cancleled');
  }
  else {
    alert('Wrong Password');
  }
}
else if (Admin == '' || Admin == null) {
  alert('Cancleled');
}
else {
  alert(`I don't know you`);
}
```

</p>
</details>
<br>
<br>

### 🎁 If & Switch

<br>

### 난이도 : 🌶

<br>

#### ☁︎ 프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요

```javascript


사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요.

이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요.

틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.

비밀번호 확인 절차는 다음과 같습니다.

- 맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
- 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
- 빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.


중첩 if 블록을 사용하고, 코드 전체의 가독성을 고려해 답안을 작성하세요.

힌트: 프롬프트 창에 아무것도 입력하지 않으면 빈 문자열인 ''가, ESC를 누르면 null이 반환됩니다.

```

<details><summary><b>Answer</b></summary>
<p>

```javasript
let Admin = prompt(`who's there?`);

if (Admin == 'Admin') {
  let Password = prompt('Password?');
  if (Password == 'TheMaster') {
    alert('Welcome!');
  }
  else if (Password == '' || Password == null) {
    alert('Cancleled');
  }
  else {
    alert('Wrong Password');
  }
}
else if (Admin == '' || Admin == null) {
  alert('Cancleled');
}
else {
  alert(`I don't know you`);
}
```

</p>
</details>
<br>
<br>
