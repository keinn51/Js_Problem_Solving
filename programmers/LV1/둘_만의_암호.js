function solution(s, skip, index) {
    /**
     * 1. a-z까지의 string을 만든다
     * 2. skip에 있는 문자는 string에서 제거
     * 3. new string을 돌면서 결과를 만들어낸다
     */
    let allAlphas = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let word of skip) {
        allAlphas = allAlphas.replace(word, "");
    }
    // console.log("<1> allAlphas", allAlphas);
    allAlphas = allAlphas + allAlphas + allAlphas;
    // console.log("<2> allAlphas", allAlphas);
    for (let word of s) {
        const newIndex = Number(allAlphas.indexOf(word)) + Number(index);
        result += allAlphas[newIndex];
    }
    // console.log("<3> result", result);
    return result;
}

console.log(solution("aukks", "wbqd", 5));
