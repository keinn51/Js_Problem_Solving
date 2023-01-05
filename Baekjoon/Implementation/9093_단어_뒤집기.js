// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("text.txt").toString().trim().split("\n");

input.shift();

const getResult = () => {
    return input
        .map((str) => {
            let newArr = str.split(" ").map((word) => {
                let resStr = "";
                let wordLen = word.length;
                for (let i = 0; i < wordLen; i++) {
                    resStr += word[wordLen - i - 1];
                }
                return resStr;
            });
            return newArr.join(" ");
        })
        .join("\n");
};

console.log(getResult());
