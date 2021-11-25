// 왜 배열을 사용해야 하는가.
/*순서가 있는 컬렉션을 다뤄야 할 때 객체를 사용하면 순서와 관련된 메서드가 없어 그다지 편리하지 않습니다.
객체는 태생이 순서를 고려하지 않고 만들어진 자료구조이기 때문에
객체를 이용하면 새로운 프로퍼티를 기존 프로퍼티 ‘사이에’ 끼워 넣는 것도 불가능합니다.  */

// problem

//1.
let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
alert(fruits.length); // ?


/*
2. 
배열과 관련된 다섯 가지 연산을 해봅시다.

요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
"Rock-n-Roll"을 배열 끝에 추가합니다.
배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
배열의 첫 번째 요소를 꺼내서 출력합니다.
"Rap"과 "Reggae"를 배열의 앞에 추가합니다.
단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 합니다.

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll


3.
아래 코드를 실행하면 어떤 결과가 나올까요? 그리고 그 이유는 무엇일까요?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?




5.
입력값은 arr = [1, -2, 3, 4, -9, 6] 같이 숫자로만 구성된 배열이라고 가정해봅시다.

우리가 해야 할 일은 인접한 요소의 총합이 최대인 arr의 부분 배열을 찾는 것입니다.

부분 배열 요소들의 합을 리턴하는 함수 getMaxSubSum(arr)를 작성해 봅시다.

예시:

getMaxSubSum([-1, 2, 3, -9]) == 5 (강조 표시된 요소들의 합)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (모든 요소)
요소 전체가 음수라면 아무런 요소도 선택하지 않아야 최댓값이 됩니다(부분 배열은 빈 배열). 그리고 합은 0이 됩니다.

getMaxSubSum([-1, -2, -3]) = 0;
가능하다면 성능을 고려하여 답안을 작성해 봅시다. 답안은 O(n2) 또는 O(n)까지 가능합니다.

*/




// Answer
//1.
//4


//2.
let styles = ['Jazz', 'Blues'];
console.log(styles);
styles.push('Rock-n-Roll');
console.log(styles);
styles.splice(1, 1, "Classics");
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift('Rap', 'Reggae');
console.log(styles);


//3.
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
})

arr[2](); // 함수가 뜨겠지..?







//5. (difficult..😂)

function getMaxSubSum(arr) {
  let A = 0;
  let sum = 0;
  let Biggest = 0;
  let result = 0;
  let nextbigger = 0;

  for (i = 0; i < arr.length; i++) {
    sum = 0;
    for (j = i; j < (arr.length); j++) {
      sum += arr[j];
      Biggest = Math.max(Biggest, sum);
    };

  }
  return Biggest;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([1, 2, 3]) == 6);