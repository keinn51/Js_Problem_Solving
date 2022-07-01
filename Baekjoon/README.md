### 제출 할 때에는!

아래 예시처럼 만듭니다.

입력 : 1 2
출력 : 3

```js
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
```

### 개인 풀이 시

```js
let input = require("fs").readFileSync("text.txt").toString().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
```
