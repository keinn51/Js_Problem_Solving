### 🎁 Promise

이 파트는 개인적으로 리얼 어려웠기 때문에 개념공부가 많이 필요합니다...😅

<br>

### 난이도 : 🌶🌶 

<br>

  #### ♠︎ Coffee 주문 받기 

예제 따온 주소 : https://velog.io/@yujo/JS콜백-지옥과-비동기-제어

 ```javascript
 커피를 받으려는데 식이 이렇게 Callback 지옥이라니.. promise chaning으로 한 번 바꿔볼까?

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
              prompt('Next..?')
            );
          },
          500,
          prompt('Next..?')
        );
      },
      500,
      prompt('Next..?')
    );
  },
  500,
  prompt('Enter the first coffee: ')
);
````

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
let Coffeelist = '';
function GetCoffee(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str)
      str += ',' + prompt('Next..?')
      resolve(str);
    }, 500)
  }
  )
}

Coffeelist = prompt('Enter the first coffee: ')
GetCoffee(Coffeelist)
.then(value => GetCoffee(value))
.then(value => GetCoffee(value))
.then(value => console.log(value))

````

 </p>
 </details>

 <br>
 <br>

### 난이도 : 🌶🌶🌶 

<br>

#### ☁︎ Callback to Promise 

다음 콜백지옥을 promise로 교체해보세요~

```javascript
function delay(sec, callback) {
  return setTimeout(() => {
    callback(new Date());
  }, sec * 1000);
}

delay(1, function (result) {
  console.log(1, result);
  delay(1, function (result) {
    console.log(2, result);
    delay(1, function (result) {
      console.log(3, result);
    });
  });
});
```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
function Promisedelay(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date())
    }, sec * 1000)
  })
}

Promisedelay(1).then((value) => {
console.log(1, value)
return Promisedelay(1)
})
.then((value) => {
console.log(2, value)
return Promisedelay(1)
})
.then((value) => {
console.log(3, value)
return Promisedelay(1)
})

````

 </p>
 </details>

 <br>
 <br>
 
 #### ☁︎ Ellie's Callback to Promise 

  다음 콜백 지옥을 promise를 사용해서 해결한 후, 실행까지 시켜보세요.


 ```javascript
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
        onSuccess(id);
      }

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
      success,
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

````

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
const id = prompt('Enter your id');
const password = prompt('Enter you password');
let PromiseUserStorage = new Promise((resolve, reject) => {
  return setTimeout(() => {
    if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
      resolve(id)
    }
    else {
      reject(new Error('not found!'))
    }
  }, 1000)
})

function getRoles(user) {
return new Promise((resolve, reject) => {
if (user === "ellie") {
resolve({ name: "ellie", role: "admin" })
}
else {
reject(new Error('no access!'))
}
})

}

PromiseUserStorage
.then((value) =>
getRoles(value))
.then((value) =>
alert(`Hello ${value.name}, you have ${value.role}`))
.catch((value) => console.log(value))

````

 </p>
 </details>

 <br>
 <br>
