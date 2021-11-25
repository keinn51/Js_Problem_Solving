// Problem


/* 01.
객체를 JSON으로 바꾼 후 다시 객체로 바꾸기
중요도: 5
user를 JSON 형태의 문자열로 바꾼 다음 이를 다시 객체로 바꾼 후 제2의 변수에 저장해보세요.

let user = {
  name: "John Smith",
  age: 35
};
*/



/* 02.
역참조 배제하기
중요도: 5
순환 참조가 있는 경우 프로퍼티 이름을 사용해 순환 참조를 만드는 프로퍼티를 직렬화에서 배제할 수 있습니다.

그런데 이 프로퍼티가 순환참조도 만들면서 일반 프로퍼티 역할을 하는 경우라면 단순히 이런 식으로 직렬화에서 배제할 수 없습니다. 이럴 땐 값을 이용해 해당 프로퍼티를 확인할 수밖에 없습니다.

meetup을 참조하는 프로퍼티를 제외한 모든 프로퍼티를 직렬화해주는 replacer 함수를 작성해보세요.

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// 순환 참조
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  
}));


{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

// Answer

// 01.
let user = {
  name: "John Smith",
  age: 35
};

let userServer = JSON.stringify(user);
let userObject = JSON.parse(userServer);

console.log(userServer);
console.log(userObject);


// 02.
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

// 순환 참조
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
  return key = (key === 'self') || (key === 'occupiedBy') ? undefined : value;
}));