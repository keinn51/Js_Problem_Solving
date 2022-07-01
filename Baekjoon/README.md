### 제출 할 때에는!

아래 예시처럼 만듭니다.

입력 : 1 2
출력 : 3

```js
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a + b);
```

### 개인 풀이 시

```js
let input = require("fs").readFileSync("text.txt").toString().split("\n");
let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a + b);
```
