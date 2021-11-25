// 👺 problem

//1.
/*new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
만약 가능하다면, 실행 가능한 예시를 작성해 보세요.*/


//2.
/*
계산기 만들기
중요도: 5
아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.

read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장합니다.
sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다.
예시:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/


//3.
/*
누산기 만들기
중요도: 5
생성자 함수 Accumulator(startingValue)를 만들어 보세요.

Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건을 충족해야 합니다.

프로퍼티 value에 현재 값(current value)을 저장합니다. 
최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아옵니다.
메서드 read()에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더해줍니다.
프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장됩니다.

데모를 위한 코드는 다음과 같습니다.

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함
*/



//---------------------------------------------------------------------------------------------



// 👺 Answer

// 1. 
let X = {};

function A() {
  return X;
}
function B() {
  return X;
}

let a = new A;
let b = new B;

alert(a == b); // true

// 객체를 반환하게 하면 두 함수가 같은 것이 가능하다...! (변수는 같지 않다!)



//2.
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



//3.
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