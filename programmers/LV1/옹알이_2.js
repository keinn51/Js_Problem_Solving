/*
* babbling 배열을 돌면서 각 단어를 읽기
* 읽다가 할 수 있는 발음이 나오면 발음하기
* 발음한 것을 stack에 쌓아두기

* strcheck => 각 단어를 읽은 것을 넣어두는 문자열
발음할 수 있을 때까지 읽다가 발음이 되는 순간(혹은 문자열이 끝날 때)
문자열을 초기화해주기
만약 문자열을 다 읽었는데 strcheck에 문자열이 남아있다면 result 추가 안 됨
stack의 마지막 요소와 읽은 문자가 같아도 추가 안 됨
*/

function solution(babbling) {
    let result = 0;
    let bobObj = {
        aya: 0,
        ye: 0,
        woo: 0,
        ma: 0,
    };
    babbling.forEach((line) => {
        let lastWord = "",
            strCheck = "";
        for (let key in line) {
            const word = line[key];
            strCheck += word;
            if (bobObj[strCheck] !== undefined && strCheck.length > 0 && strCheck !== lastWord) {
                lastWord = strCheck;
                strCheck = "";
            }
        }
        if (strCheck === "") result += 1;
    });
    return result;
}
