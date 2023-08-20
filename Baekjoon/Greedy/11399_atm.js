function solution(input) {
    const [_num, str] = input;
    const array = str.split(" ").map((e) => +e);
    array.sort((a, b) => a - b);
    for (let i = 1; i < array.length; i++) {
        array[i] = array[i] + array[i - 1];
    }
    console.log(array.reduce((acc, curr) => acc + curr, 0));
}

solution(
    require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "text.txt")
        .toString()
        .trim()
        .split("\n")
);
