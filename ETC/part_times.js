/**
 * 
[problem]
철수는 해외여행 자금 마련을 위해 아르바이트를 하려고 합니다.
모든 아르바이트는 시작 날짜와 끝 날짜가 정해져 있으며, 급여도 제각각입니다.
철수는 최대한 많은 돈을 벌기 위해 아르바이트를 여러 개 하려고 합니다. 
단, 아르바이트를 동시에 두 개 이상 할 수는 없으며, 아르바이트가 끝나는 날 다른 아르바이트를 시작하는 것은 가능합니다.
각 아르바이트의 시작 날짜와 끝 날짜, 급여가 담긴 배열 part_times가 매개변수로 주어질 때, 
철수가 최대로 벌 수 있는 돈은 얼마인지 return 하도록 solution 함수를 완성해 주세요.

* 제한 사항
-part_times는 2차원 배열입니다.
-part_times의 세로(행) 길이는 1 이상 15 이하입니다.
-part_times의 가로(열) 길이는 3입니다.
-part_times의 원소는 [S, E, C] 형태입니다.
-S는 아르바이트 시작일, E는 아르바이트 종료일, C는 해당 아르바이트의 급여를 나타냅니다.
-S는 항상 E보다 작습니다.
-S와 E는 1 이상 100 이하인 자연수입니다.
-C는 1 이상 1,000 이하인 자연수입니다.
 */

const solution = (part_times) => {
  let max = Number.MIN_SAFE_INTEGER;

  part_times.sort((a, b) => {
    const [sa, ea] = a,
      [sb, eb] = b;

    if (sa < sb) return -1;
    if (sa > sb) return 1;

    if (ea < eb) return -1;
    if (ea > eb) return 1;

    return 0;
  });

  const iter = (end, cnt) => {
    let j = 0;
    let isFinal = true;

    while (j < part_times.length) {
      const [js, je, jc] = part_times[j];
      if (js > end) {
        isFinal = false;
        iter(je, cnt + jc);
      }
      j++;
    }

    isFinal === true && (max = Math.max(max, cnt));
  };

  iter(0, 0, 0);

  return max;
};

console.log(
  solution([
    [1, 3, 100],
    [2, 5, 200],
    [6, 8, 150],
  ])
);
console.log(
  solution([
    [1, 2, 50],
    [2, 3, 100],
    [3, 4, 150],
    [4, 5, 200],
  ])
);
console.log(
  solution([
    [1, 4, 300],
    [5, 7, 300],
    [8, 10, 300],
    [2, 6, 500],
  ]),
  900
);
console.log(
  solution([
    [1, 2, 200],
    [3, 4, 200],
    [5, 6, 200],
    [7, 8, 200],
    [9, 10, 200],
  ])
);
console.log(
  solution([
    [1, 10, 1000],
    [2, 3, 200],
    [4, 5, 300],
    [6, 7, 400],
    [8, 9, 500],
  ])
);
console.log(
  solution([
    [1, 3, 500],
    [3, 5, 600],
    [5, 7, 700],
    [7, 9, 800],
    [9, 11, 900],
  ])
);
console.log(
  solution([
    [1, 5, 100],
    [6, 10, 200],
    [11, 15, 300],
    [16, 20, 400],
    [21, 25, 500],
  ])
);
console.log(
  solution([
    [1, 2, 100],
    [2, 3, 200],
    [3, 4, 300],
    [4, 5, 400],
    [5, 6, 500],
    [6, 7, 600],
    [7, 8, 700],
  ])
);
console.log(
  solution([
    [1, 3, 100],
    [4, 6, 200],
    [7, 9, 300],
    [10, 12, 400],
    [13, 15, 500],
  ])
);
console.log(
  solution([
    [1, 4, 500],
    [2, 5, 400],
    [3, 6, 300],
    [4, 7, 200],
    [5, 8, 100],
  ])
);
