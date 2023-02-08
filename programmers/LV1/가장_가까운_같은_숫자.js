function solution(s) {
    const stackObj = {};
    const result = new Array(s.length).fill(-1);
    for (let i = 0; i < s.length; i++) {
        if (stackObj[s[i]] !== undefined) result[i] = i - Number(stackObj[s[i]]);
        stackObj[s[i]] = i;
    }
    return result;
}

console.log(solution("banana"));
