const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
let inputs = require("fs").readFileSync(filename).toString().trim();

let answer = "";

while (inputs.length !== 0) {
    if (inputs.length > 1) {
        answer =
            parseInt(inputs.slice(inputs.length - 1), 8)
                .toString(2)
                .padStart(3, "0") + answer;
    } else {
        answer = parseInt(inputs.slice(inputs.length - 1), 8).toString(2) + answer;
    }
    inputs = inputs.slice(0, inputs.length - 1);
}
console.log(answer);
