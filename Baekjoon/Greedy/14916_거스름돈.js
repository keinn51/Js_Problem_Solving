const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
let number = Number(require("fs").readFileSync(filename).toString().trim().split("\n").shift());

function solution() {
    let count = 0;
    while (number >= 10) {
        number -= 5;
        count += 1;
    }
    if (number === 9 || number === 7 || number === 5) {
        number -= 5;
        count += 1;
    }
    if (number > 0 && number % 2 === 0) {
        count += number / 2;
        number = 0;
    }
    if (number === 0) return count;
    return -1;
}

console.log(solution());
