function solution(s) {
    /**
     * 1. 문자가 들어오면 순회하면서 숫자인 것들은 결과 문자열에 붙임
     * 2. 숫자가 아닌게 나오면 info에 넣었을 때 Undefinde가 아닐 때까지 해당 문자열을 읽음
     * 3. 숫자가 나오면 temp 문자열이 info객체에 걸맞는 값을 찾아줌
     * ㅅㄱ
     */
    const info = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let tempStr = "";
        if (isNaN(Number(s[i])) === false) result += s[i];
        else {
            while (i < s.length && info[tempStr] === undefined) {
                tempStr += s[i];
                i++;
            }
            i--;
            result += info[tempStr];
            if (i === s.length) return result;
            if (isNaN(Number(s[i])) === false) i--;
        }
    }
    return Number(result);
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));
