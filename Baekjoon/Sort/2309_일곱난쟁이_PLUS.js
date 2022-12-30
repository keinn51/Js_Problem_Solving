
const n = `${require("fs").readFileSync(0)}`
  .trim()
  .split("\n")
  .map((v) => +v)
  .sort((a, b) => a - b);
let p = "";
for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    const m = n.filter((t, k) => k !== i && k !== j && t);
    if (m.reduce((a, b) => a + b) === 100) p = m.join("\n");
  }
}
console.log(p);

/*
- `map(v=>v+)` 을 하면 모든 string 배열을 number로 바꿀 수 있습니다.
- filter와 reduce를 같이 쓰면 아주 짧게 코딩이 끝난다.
- 만든 사람은 천재인가?
*/
