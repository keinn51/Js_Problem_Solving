### 🎁 Object
 
 <br>
 
 ### 난이도 : 🌶

<br>

 #### ☁︎ 객체야 안녕?

 
 ```javascript
 
코드 한 줄로 아래 문제를 각각 풀어보세요.

빈 객체 user를 만듭니다.
user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
name의 값을 Pete로 수정해보세요.
user에서 프로퍼티 name을 삭제하세요.

```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

```

 </p>
 </details>
 
 <br>
 <br>
 
 
 #### ☁︎ 객체의 키 이름 중복


```javascript

자바스크립트 객체를 다음과 같이 만들었다. 
출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

````

<details><summary><b>Answer</b></summary>

  <p>

```javascript

정답은 '84' 입니다.

````

 </p>
 </details>
 <br>
 <br>
 
  #### ☁︎ concat을 활용한 출력 방법

 ```javascript

다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

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

````



<details><summary><b>Answer</b></summary>

<p>


```javascript

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat("/", month, "/", day, " ", hour, ":", minute, ":", second)

console.log(result);

````


 </p>
 </details>
 <br>
 <br>
 
  #### ☁︎ 프로퍼티 합계 구하기


 ```javascript

모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요. sum엔 390이 저장되어야겠죠?

주의: salaries가 비어있다면 sum에 0이 저장되어야 합니다.

```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
let sum = 0;
for (let value in salaries) {
  sum = sum + salaries[value];
}
console.log(sum);
```

 </p>
 </details>
 
 <br>
 <br>
 
 #### ☁︎ 프로퍼티 값 두 배로 부풀리기

 
 ```javascript

객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.

예시:

// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

multiplyNumeric은 아무것도 반환하지 않아도 괜찮습니다. 객체 자체를 수정해주기만 하면 됩니다.

힌트) typeof를 사용하면 프로퍼티 값이 숫자인지 확인할 수 있습니다.

```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
multiplyNumeric = ((menu) => {
  for (let key in menu) {
    if ((typeof menu[key]) == 'number') {
      menu[key] = menu[key] * 2;
    }
  };
  return menu;
});

multiplyNumeric(menu);

console.log(menu);
```

 </p>
 </details>

<br>
<br>



### 난이도:🌶🌶

#### ☁︎ 중복 제거 

Set 도 사용해보세요!

```javascript
바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다.
**중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.**

아래 주어진 데이터들로부터 중복을 제거하여 **실제 접수 인원을 출력**해 주세요.

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
};
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
// Object.entries를 사용하는 경우
function DeleteSame(people) {
  let A = Object.entries(people);
  let result = A.length;
  // Object.entries는 중복을 제거해줍니다.

return console.log(result);
}

const people = {
이호준: "01050442903",
이호상: "01051442904",
이준호: "01050342904",
이호준: "01050442903",
이준: "01050412904",
이호: "01050443904",
이호준: "01050442903"
};

DeleteSame(people);

// Set을 사용하는 경우.
const people = {
이호준: "01050442903",
이호상: "01051442904",
이준호: "01050342904",
이호준: "01050442903",
이준: "01050412904",
이호: "01050443904",
이호준: "01050442903"
};

// set 역시 중복값을 모두 제거해준다.
let result = new Set();
for (let key in people) {
result.add(key);
}
console.log(result);
console.log(result.size);

````

 </p>
 </details>

 <br>
 <br>
