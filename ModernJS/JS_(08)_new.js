// problem

//1.
/*new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
만약 가능하다면, 실행 가능한 예시를 작성해 보세요.*/


// Answer
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