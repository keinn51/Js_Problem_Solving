// problem

//1. 
/*함수 makeUser는 객체를 반환합니다.

이 객체의 ref에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까요?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // 결과가 어떻게 될까요?*/


//2.
/*calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.

read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
sum()은 저장된 두 값의 합을 반환합니다.
mul()은 저장된 두 값의 곱을 반환합니다.
let calculator = {
  // ... 여기에 답안 작성 ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/


//3.
/*올라가기(up)와 내려가기(down) 메서드를 제공하는 객체 ladder가 있습니다.

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
참고로 이런 방식은 자바스크립트 라이브러리에서 널리 사용됩니다.*/





// Answer

//1. 

/* Not To do
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
이 때 this는 함수 전체를 가져오는 값이 되어서 위와 같은 방식으로 사용이 불가능하다.
*/


function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert(user.ref().name); // John
/*this는 값을 설정할 때 객채 정의가 사용 되지 않는다. this는 호출 시점에 결정되는 값이다.
이 친구는 함수에가 ref()이기 때문에 이렇게 사용할 수 있는 것이다. */



//2.
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



//3.
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