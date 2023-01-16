function solution(id_list, report, k) {
    const reporting = {};
    const reported = {};
    id_list.forEach((man) => {
        reporting[man] = [];
        reported[man] = 0;
    });
    report.forEach((entries) => {
        const entry = entries.split(" ");
        reporting[entry[0]].push(entry[1]);
    });
    for (let man in reporting) {
        reporting[man] = new Set(reporting[man]);
        reporting[man].forEach((reportedMan) => {
            reported[reportedMan] += 1;
        });
    }
    for (let man in reported) {
        if (reported[man] < Number(k)) delete reported[man];
    }
    return id_list.map((man) => {
        let result = 0;
        reporting[man].forEach((reportedMan) => {
            if (reported[reportedMan] !== undefined) result += 1;
        });
        return result;
    });
}

console.log(
    solution(
        ["muzi", "frodo", "apeach", "neo"],
        ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
        2
    )
);
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));
