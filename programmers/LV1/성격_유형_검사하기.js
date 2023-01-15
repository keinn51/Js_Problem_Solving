function solution(survey, choices) {
    let result = "";
    const entries = survey.map((alphas) => [alphas[0], alphas[1]]);
    const orders = [
        ["R", "T"],
        ["C", "F"],
        ["J", "M"],
        ["A", "N"],
    ];
    const changingObj = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    entries.forEach((entry, index) => {
        if (choices[index] > 4) changingObj[entry[1]] += choices[index] - 4;
        else if (choices[index] < 4) changingObj[entry[0]] += 4 - choices[index];
    });
    orders.forEach((order) => {
        if (changingObj[order[0]] >= changingObj[order[1]]) result += order[0];
        else result += order[1];
    });
    return result;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
