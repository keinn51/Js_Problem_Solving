// problem

// 01.
/* 두 번 resolve 하기?
아래 코드의 실행 결과를 예측해보세요.

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
*/


// 02.
/* 프라미스로 지연 만들기
내장 함수 setTimeout은 콜백을 사용합니다. 프라미스를 기반으로 하는 동일 기능 함수를 만들어보세요.

함수 delay(ms)는 프라미스를 반환해야 합니다. 반환되는 프라미스는 아래와 같이 .then을 붙일 수 있도록 ms 이후에 이행되어야 합니다.

function delay(ms) {
  // 여기에 코드 작성
}

delay(3000).then(() => alert('3초후 실행'));
*/



// 03.
// 다음의 콜백 지옥을 promise로 고치기
/*
//✅ Callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
        onSuccess(id);
        // = onSuccess((id) => {})   빈 body를 반환해줄 때 이렇게 쓸 수 있는 것 같다.
      }
      // 콜백함수다! onSuccess라는 함수에 id를 입력하는 행위. password도 같이 불러도 상관 없는데
      // 안 부른 이유는 id만 있어도 되는 식을 Roles에서 구성했기 때문!
      else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      }
      else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}



const userStorage = new UserStorage();
const id = prompt('Enter your id');
const password = prompt('Enter you password');

userStorage.loginUser(
  id,
  password,
  success => {
    userStorage.getRoles(
      success,  //이 안에는 id 값이 들어있다.
      usergetrole => {
        alert(
          `Hello ${usergetrole.name}, you have a ${usergetrole.role}`
        );
      },
      fail2 => {
        console.log(fail2);
      }
    )
  },
  fail => {
    console.log(fail);
  }

);

*/



// 04.
// 다음의 콜백 지옥을 promise로 고치기

/*
setTimeout(
  (name) => {
    let coffeeList = name;
    console.log(coffeeList);

    setTimeout(
      (name) => {
        coffeeList += ', ' + name;
        console.log(coffeeList);

        setTimeout(
          (name) => {
            coffeeList += ', ' + name;
            console.log(coffeeList);

            setTimeout(
              (name) => {
                coffeeList += ', ' + name;
                console.log(coffeeList);
              },
              500,
              'Latte',
            );
          },
          500,
          'Mocha',
        );
      },
      500,
      'Americano',
    );
  },
  500,
  'Espresso',
);

*/



//Answer

// 01.
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);   // =1  resolve를 두 번 쓰면 앞에 것만 인식이 된다.



// 02.

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}

delay(3000).then(() => alert('3초후 실행'));


// 03.

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
        setTimeout(() => {
          resolve(id, password);
        }, 2000)
      }

      else {
        setTimeout(() => {
          reject(new Error('not found'));
        }, 1000);
      }
    }
    )
  }


  getRoles = user => {
    return new Promise((resolve, reject) => {
      if ((user === 'ellie')) {
        resolve({ name: 'ellie', role: 'admin' })
      }
      else {
        reject(new Error('no access'))
      }
    }
    )
  }
}


const id = prompt('Enter your id');
const password = prompt('Enter you password');
let userStorage = new UserStorage();
let user;

userStorage.loginUser(id, password)
  .then(user => userStorage.getRoles(user))
  .then(user => alert(`Hello ${user.name}, you have a ${user.role}`))
  .then(null, console.log)



// 04.

let Getcoffee = new Promise((resolve, reject) => {
  let coffeeList;
  let name = prompt('Enter the coffee name');
  coffeeList = name;

  while (true) {
    if (name === null || name === '') {
      break;
    }
    else {
      name = prompt('Enter the coffee name');
      coffeeList += ', ' + name
    }
  };


  setTimeout(() => resolve(coffeeList), 500)
})

Getcoffee.then(value => console.log(value))
