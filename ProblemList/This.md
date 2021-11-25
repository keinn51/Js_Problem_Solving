 ### 🎁 This
 
 https://ko.javascript.info/object-methods 여기서 한 번 읽어보시는 걸 추천합니다😄
 
 <br>

 ### 난이도 : 🌶
 
 <br>

 
 #### ☁︎ 객체 리터럴에서 'this' 사용하기


 ```javascript

함수 makeUser는 객체를 반환합니다.

이 객체의 ref에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까요?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // 결과가 어떻게 될까요?
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript

에러가 발생하는 이유는 this 값을 설정할 땐 객체 정의가 사용되지 않기 때문입니다. this 값은 호출 시점에 결정됩니다.

위 코드에서 makeUser() 내 this는 undefined가 됩니다. 메서드로써 호출된 게 아니라 함수로써 호출되었기 때문입니다.

this 값은 전체 함수가 됩니다. 코드 블록과 객체 리터럴은 여기에 영향을 주지 않습니다.

따라서 ref: this는 함수의 현재 this 값을 가져옵니다.

this의 값이 undefined가 되게 함수를 다시 작성하면 다음과 같습니다.


 function makeUser(){
  return this; // 이번엔 객체 리터럴을 사용하지 않았습니다.
}

alert( makeUser().name ); // Error: Cannot read property 'name' of undefined

보시다시피 alert( makeUser().name )와 위쪽에서 살펴본 alert( user.ref.name )의 결과가 같은 것을 확인할 수 있습니다.

에러가 발생하지 않게 하려면 코드를 다음과 같이 수정하면 됩니다.


 function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert( user.ref().name ); // John

이렇게 하면 user.ref()가 메서드가 되고 this는 . 앞의 객체가 되기 때문에 에러가 발생하지 않습니다.

```

 </p>
 </details>
 
 <br>
 <br>
 
 
 ### 난이도 : 🌶🌶
 
 <br>
 
 #### ☁︎ 게임 캐릭터 클래스 만들기


```javascript

다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
**주어진 소스 코드를 수정해선 안됩니다.**

**데이터**
<여기에 class를 작성하세요.>

  const x = new Wizard(545, 210, 10);
  console.log(x.health, x.mana, x.armor);
  x.attack();

  **출력**
  545 210 10
  파이어볼

 ````

<details>
<summary><b>Answer</b></summary>

<p>

```javascript

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

````

</p>
</details>
<br>
<br>
 

 #### ☁︎ 체이닝


 ```javascript

올라가기(up)와 내려가기(down) 메서드를 제공하는 객체 ladder가 있습니다.

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    alert( this.step );
  }
};

메서드를 연이어 호출하고자 한다면 아래와 같이 코드를 작성할 수 있습니다.

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

up, down, showStep을 수정해 아래처럼 메서드 호출 체이닝이 가능하도록 해봅시다.

ladder.up().up().down().showStep(); // 1

참고로 이런 방식은 자바스크립트 라이브러리에서 널리 사용됩니다.

```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    alert(this.step);
  }
};

ladder.up().up().down().showStep();

```

 </p>
 </details>
 
 <br>
 <br>
 

#### ☁︎ 계산기 만들기

 
 ```javascript
 
calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.

read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
sum()은 저장된 두 값의 합을 반환합니다.
mul()은 저장된 두 값의 곱을 반환합니다.
let calculator = {
  // ... 여기에 답안 작성 ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
let calculator = {


  read() {
    this.a = +prompt('Enter the number1');
    this.b = +prompt('Enter the number2');
    // 문자열 앞에 +를 붙여주면 문자 -> 숫자로 변환한다!!!
    return this.a, this.b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

```

 </p>
 </details>
 
 <br>
 <br>
 
 
 
 #### ☁︎ 누산기 만들기


 
 ```javascript

생성자 함수 Accumulator(startingValue)를 만들어 보세요.

Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건을 충족해야 합니다.

프로퍼티 value에 현재 값(current value)을 저장합니다. 최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아옵니다.
메서드 read()에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더해줍니다.
프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장됩니다.

데모를 위한 코드는 다음과 같습니다.


let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.a = +prompt('Accumulator: Enter the number');
    this.value += this.a;
    return this.value;
  }
}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value);
```

 </p>
 </details>
 
 <br>
 <br>
 
 
 ### 난이도 : 🌶🌶🌶

<br>
 
 #### ☁︎ 계산기 만들기2
 
 
 ```javascript
// 아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.


read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장합니다.
sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다.
예시:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

<details><summary><b>Answer</b></summary>
 <p>
    
```javascript
function Calculator() {

  this.read = function () {
    this.a = +prompt('Enter the number1');
    this.b = +prompt('Enter the number2');
    // 문자열 앞에 +를 붙여주면 문자 -> 숫자로 변환한다!!!
    return this.a, this.b;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  }
};

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
```

 </p>
 </details>
 
 <br>
 <br>
