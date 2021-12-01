/*
[문제58 : 콤마 찍기](https://www.notion.so/58-4152dead59ad4ab7801752d6604e037d)
원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.

*/

let getNumber = prompt("Enter").split('').reverse();

for (let i = 0; i <= getNumber.length; i++) {
  if (i % 4 == 3) {
    if (i != getNumber.length) {
      getNumber.splice(i, 0, ',');
      console.log(getNumber)
    }
  };
};

console.log(getNumber.reverse().join(''))