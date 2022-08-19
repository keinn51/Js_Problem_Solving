function solution(record) {
  const changedObj = {};
  let enterOrLeaveArr = [],
    splittedArr;
  record.forEach((doing) => {
    splittedArr = doing.split(" ");
    if (splittedArr[0] == "Leave") {
      enterOrLeaveArr.push({
        uid: splittedArr[1],
        name: null,
        doing: "Leave",
      });
    } else {
      if (splittedArr[0] == "Enter") {
        enterOrLeaveArr.push({
          uid: splittedArr[1],
          name: splittedArr[2],
          doing: "Enter",
        });
      }
      changedObj[splittedArr[1]] = splittedArr[2];
    }
  });
  for (let i = 0; i < enterOrLeaveArr.length; i++)
    enterOrLeaveArr[i]["name"] = changedObj[enterOrLeaveArr[i]["uid"]];
  return enterOrLeaveArr.map((obj) => {
    if (obj["doing"] === "Enter") return `${obj["name"]}님이 들어왔습니다.`;
    else if (obj["doing"] === "Leave") return `${obj["name"]}님이 나갔습니다.`;
  });
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ]),
);
