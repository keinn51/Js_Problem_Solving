### 제출 할 때에는!

```js
const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().split("\n");
```
