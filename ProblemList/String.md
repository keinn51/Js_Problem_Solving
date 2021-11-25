### 🎁 String

<br>

### 난이도 : 🌶🌶

<br>

#### ☁︎ 문자열 속 문자 찾기


 ```javascript
문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

입력
pineapple is yummy
apple

출력
4
````

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
function SearchString() {
  let gotstring = prompt('문자열 입력:');
  let findstring = prompt('찾을 문자열 입력:');

return console.log(gotstring.search(findstring))
}

SearchString()

````

 </p>
 </details>

 <br>
 <br>

  #### ☁︎ sort 구현하기 2


 ```javascript
민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.

민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)


입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES
````

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
function CheckSort() {
  let word = prompt('Enter the heights: ');
  let result = word.split(' ').sort().join(' ')

if (result === word) {
return console.log('Yes')
}
else {
return console.log('No')
}
}

CheckSort()

````

 </p>
 </details>

 <br>
 <br>
 
 #### ☁︎

```javascript
취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다.

혜림이를 위해 **문자열을 입력받으면 단어의 갯수를 출력하는 프로그램**을 작성해 주세요.


**입출력**

입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
출력 : 5

```

<details><summary><b>Answer</b></summary>
  <p>
    
```javascript
function CountShortWord() {
  let word = prompt('Enter the string:');
  let ArrayforCheck = word.split(' ');

return console.log(ArrayforCheck.length)
}

CountShortWord()

````

 </p>
 </details>

 <br>
 <br>
