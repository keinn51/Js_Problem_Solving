### 제출 할 때에는!

아래 예시처럼 만듭니다.

입력 : 1 2
출력 : 3

```js
const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);
```

### 개인 풀이 시

```js
const input = require("fs").readFileSync("text.txt").toString().split("\n");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);
```
