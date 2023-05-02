function addTime(time, min) {
    const timeDate = new Date();
    const [timeH, timeM] = time.split(":");
    timeDate.setHours(Number(timeH));
    timeDate.setMinutes(Number(timeM));
    timeDate.setMinutes(timeDate.getMinutes() + Number(min));
    return `${timeDate.getHours()}:${timeDate.getMinutes()}`;
}

function minusTime(time1, time2) {
    const [time1H, time1M] = time1.split(":");
    const [time2H, time2M] = time2.split(":");
    let res = 0;
    for (let i = 0; i < time1H - time2H; i++) {
        res += 60;
    }
    res += time1M - time2M;
    return res;
}

function compareTime(time1, time2) {
    const [time1H, time1M] = time1.split(":");
    const [time2H, time2M] = time2.split(":");
    if (time1H < time2H) return 1;
    if (time1H > time2H) return -1;
    if (time1M < time2M) return 1;
    if (time1M > time2M) return -1;
    return 0;
}

function solution(plans) {
    plans.sort((a, b) => -compareTime(a[1], b[1]));
    const todoStack = [],
        result = [];
    let nowTime = plans[0][1],
        doing = plans[0];
    // console.log(plans);
    plans.forEach((newSubject, idx) => {
        if (idx === 0) return;
        // 하던 것을 마무리 할 수 없을 때
        if (compareTime(addTime(doing[1], doing[2]), newSubject[1]) < 0) {
            todoStack.push([doing[0], doing[2] - minusTime(newSubject[1], doing[1])]);
            nowTime = newSubject[1];
        }
        // 하던 것 마무리~
        else {
            result.push(doing[0]);
            nowTime = addTime(nowTime, doing[2]);
            // 미뤄둔 것 할 짬이 되나 확인하기
            while (todoStack.length) {
                const recentlyStack = todoStack[todoStack.length - 1];
                if (compareTime(addTime(nowTime, recentlyStack[1]), newSubject[1]) < 0) {
                    recentlyStack[1] -= minusTime(newSubject[1], nowTime);
                    nowTime = newSubject[1];
                    // console.log(todoStack);
                    break;
                }
                result.push(recentlyStack[0]);
                nowTime = addTime(nowTime, recentlyStack[1]);
                todoStack.pop();
            }
        }
        doing = newSubject;
    });
    result.push(doing[0]);
    while (todoStack.length) {
        const todo = todoStack[todoStack.length - 1];
        result.push(todo[0]);
        todoStack.pop();
    }
    return result;
}

console.log(
    "res",
    solution([
        ["korean", "11:40", "30"],
        ["english", "12:10", "20"],
        ["math", "12:30", "40"],
    ])
);
console.log(
    "res",
    solution([
        ["science", "12:40", "50"],
        ["music", "12:20", "40"],
        ["history", "14:00", "30"],
        ["computer", "12:30", "100"],
    ])
);
console.log(
    "res",
    solution([
        ["aaa", "12:00", "20"],
        ["bbb", "12:10", "30"],
        ["ccc", "12:40", "10"],
    ])
);
