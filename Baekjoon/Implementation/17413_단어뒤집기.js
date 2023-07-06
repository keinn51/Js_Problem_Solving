const filename = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = require("fs").readFileSync(filename).toString().trim().split("\n");

/**
 * 태그 : < 알파벳 || 공백 > 3자리 이상
 * 단어 : 알파벳 || 숫자
 * 단어 100,000 길이어서 On2 절대 안 됨
 * - 문자를 훑으면서 단어인지 태그인지 구분해야 함
 * - <가 나오면 >가 닫힐 때까지 태그이다.
 * - 문자가 나오면 다음 문자가 <가올 때까지 거꾸로 된 단어를 만들고 있는다.
 *      만약 그러다가 끝나면 단어를 붙이고 끝내면 됨
 *      <가 나와도 붙임
 */

function solution(str) {
    let tempStr = "";
    let resStr = "";
    for (let idx = 0; idx < str.length; idx++) {
        const word = str[idx];
        if (word === "<") {
            resStr += tempStr;
            tempStr = "";
            while (str[idx] !== ">") {
                resStr += str[idx];
                idx++;
            }
            resStr += ">";
        } else if (word === " ") {
            resStr += tempStr;
            resStr += " ";
            tempStr = "";
        } else {
            tempStr = word + tempStr;
        }
    }
    if (tempStr !== "") resStr += tempStr;
    return resStr;
}

console.log(solution(input[0]));
