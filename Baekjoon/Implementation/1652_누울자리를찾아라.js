function solution(input) {
  const N = Number(input.shift());
  const map = input.map((line) => line.trim());
  let deversedMap = new Array(N).fill(null).map((_) => new Array(N).fill(null));
  const result = [0, 0];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      deversedMap[i][j] = map[j][i];
    }
  }

  deversedMap = deversedMap.map((arr) => arr.join("").trim());

  const countLine = (line) => {
    let result = 0;
    for (let i = 0; i < line.length; i++) {
      if (i + 1 < line.length && line[i] === "." && line[i + 1] === ".") {
        result += 1;
        while (line[i] === ".") i += 1;
      }
    }
    return result;
  };

  // x
  for (let i = 0; i < N; i++) {
    const xline = map[i];
    const yline = deversedMap[i];
    result[0] += countLine(xline);
    result[1] += countLine(yline);
  }

  console.log(result.join(" ").trim());
}

solution(
  require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
    .toString()
    .trim()
    .split("\n")
);
