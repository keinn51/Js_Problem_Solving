function solution(today, terms, privacies) {
    var answer = [];
    const now = new Date(today);
    const termsArr = Object.fromEntries(terms.map((el) => el.split(" ")));
    const privaciesArr = privacies.map((el) => el.split(" "));
    privaciesArr.forEach((el, idx) => {
        const elDay = new Date(el[0]);
        const dayAfterSixMonth = new Date(
            elDay.setMonth(elDay.getMonth() + Number(termsArr[el[1]]))
        );
        if (dayAfterSixMonth <= now) answer.push(idx + 1);
    });
    return answer;
}

// console.log(solution());
const now = new Date("2022.05.19");
const day1 = new Date("2021.05.02");
const dayAfterSixMonth = new Date(day1.setMonth(day1.getMonth() + 6));
// console.log(now > dayAfterSixMonth);

console.log(
    solution(
        "2022.05.19",
        ["A 6", "B 12", "C 3"],
        ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
    )
);

console.log(
    solution(
        "2020.01.01",
        ["Z 3", "D 5"],
        ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
    )
);

console.log(
    solution(
        "2020.01.01",
        ["Z 3", "D 5"],
        ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
    )
);
