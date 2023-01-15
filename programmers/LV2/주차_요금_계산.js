const transHourToMin = (timeStr) => {
    const entry = timeStr.split(":");
    const hour = Number(entry[0]) * 60;
    const minute = Number(entry[1]);
    return hour + minute;
};

const transMinToPrice = (minute, fees) => {
    const [basicTime, basicPrice, perTime, perPrice] = fees;
    if (minute <= Number(basicTime)) return Number(basicPrice);
    return (
        Number(basicPrice) +
        Math.ceil((minute - Number(basicTime)) / Number(perTime)) * Number(perPrice)
    );
};

function solution(fees, records) {
    const resultArr = [];
    const carNumArr = [];
    const info = {};
    records.forEach((record) => {
        const entry = record.split(" ");
        const [time, carNum, inOrOut] = entry;
        const timeToMin = transHourToMin(time);
        carNumArr.push(carNum);

        if (info[carNum] === undefined) info[carNum] = [];

        if (inOrOut === "IN") {
            info[carNum].push([timeToMin]);
        } else if (inOrOut === "OUT") {
            info[carNum][info[carNum].length - 1].push(timeToMin);
        }
    });
    const sortedCarNumArr = [];
    new Set(carNumArr).forEach((num) => {
        sortedCarNumArr.push(num);
    });
    sortedCarNumArr.sort();
    sortedCarNumArr.forEach((carNum) => {
        let totalMinute = 0;
        const timeEntries = info[carNum];
        timeEntries.forEach((timeEntry) => {
            if (timeEntry.length === 1) timeEntry.push(transHourToMin("23:59"));
            totalMinute += Number(timeEntry[1]) - Number(timeEntry[0]);
        });
        resultArr.push(transMinToPrice(totalMinute, fees));
    });
    return resultArr;
}

solution(
    [180, 5000, 10, 600],
    [
        "05:34 5961 IN",
        "06:00 0000 IN",
        "06:34 0000 OUT",
        "07:59 5961 OUT",
        "07:59 0148 IN",
        "18:59 0000 IN",
        "19:09 0148 OUT",
        "22:59 5961 IN",
        "23:00 5961 OUT",
    ]
);

solution(
    [120, 0, 60, 591],
    ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"]
);

solution([1, 461, 1, 10], ["00:00 1234 IN"]);
