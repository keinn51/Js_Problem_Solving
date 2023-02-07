const transHourToMin = (timeStr) => {
    const entry = timeStr.split(":");
    const hour = Number(entry[0]) * 60;
    const minute = Number(entry[1]);
    return hour + minute;
};

function solution(book_time) {
    /**
     * Greedy 알고리즘 : 끝나는 시간이 가장 빠른 방 뒤로 대실을 잡아두면 됨
     * 1. book_time 배열을 끝나는 시간을 기준으로 정렬
     * 2. book_time의 요소를 순회하면서, Room array에 넣음
     * 3. Room array에 들어있는 시간의 끝나는 시간과, 새로운 요소의 시작 시간 비교
     * 4. Room array의 첫 번째 요소와 대실 교체 시간이 맞으면, 첫 번째 요소를 제거
     *      새로운 요소를 끝나는 시간 기준으로 배열에 입력
     */
    const roomArr = [];
    let maxRoomCnt = 1;
    book_time = book_time.sort((a, b) => transHourToMin(a[0]) - transHourToMin(b[0]));
    book_time.forEach((time) => {
        if (roomArr.length === 0) {
            roomArr.push(time);
            return;
        }

        let newIndex = roomArr.findIndex(
            (roomTime) => transHourToMin(roomTime[1]) + 10 <= transHourToMin(time[0])
        );
        if (newIndex === -1) {
            roomArr.push(time);
            maxRoomCnt += 1;
        } else {
            roomArr[newIndex] = time;
        }
    });
    return maxRoomCnt;
}

console.log(
    solution([
        ["15:00", "17:00"],
        ["16:40", "18:20"],
        ["14:20", "15:20"],
        ["14:10", "19:20"],
        ["18:20", "21:20"],
    ])
);

console.log(
    solution([
        ["09:10", "10:10"],
        ["10:20", "12:20"],
    ])
);

console.log(
    solution([
        ["10:20", "12:30"],
        ["10:20", "12:30"],
        ["10:20", "12:30"],
    ])
);
