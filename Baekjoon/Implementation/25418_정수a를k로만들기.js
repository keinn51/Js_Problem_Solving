function solution(input) {
  let [A, K] = input.shift().trim().split(" ").map(Number);

  let index = 0;

  while (K > A) {
    if (K / 2 >= A && K % 2 === 0) K /= 2;
    else K -= 1;
    index += 1;
  }

  console.log(index);
}

solution(
  require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
    .toString()
    .trim()
    .split("\n")
);
