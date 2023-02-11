function solution(s) {
    let startWord = null;
    let stacker = 0;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (stacker === 0) {
            startWord = s[i];
            result += 1;
        }
        if (s[i] !== startWord) stacker -= 1;
        else stacker += 1;
    }
    return result;
}

console.log(solution("banana"));
console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba"));
