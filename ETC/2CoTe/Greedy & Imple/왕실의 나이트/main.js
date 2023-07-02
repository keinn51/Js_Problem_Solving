const solution = (pos) => {
    let count = 0;
    let [x, y] = pos.split("");
    const N = 8;
    const mirror = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
    x = mirror[x];
    if (x > 2 && (y > 1 || y < N)) count += 1;
    if (x < N - 2 && (y > 1 || y < N)) count += 1;
    if (y > 2 && (x > 1 || x < N)) count += 1;
    if (y < N - 2 && (x > 1 || x < N)) count += 1;

    console.log(count);
};

solution("a1");
