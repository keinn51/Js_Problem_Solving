function solution(numbers) {
    /**
     * 탑 위의 개구리 문제
     * 가장 큰 탑의 index부터 좌-우로 간다
     * 좌측으로 갈 때에 갈수록 큰 숫자들이 나온다면 그 숫자들은 가장 큰 탑의 값이 결과이다
     * 우측으로 갈 때에 갈수록 작은 숫자들이 나온다면 그 숫자들은, 추후에 나올 큰 수
     */
    const result = [];
    const sortedArr = [...numbers].sort((a, b) => a - b);
    const arrSet = new Set(sortedArr);
    const onlyArr = [];
    for (let num of arrSet.values()) {
        onlyArr.push(num);
    }
    console.log("onlyArr", onlyArr);

    numbers.forEach((number, index) => {
        if (number === onlyArr[onlyArr.length - 1]) {
            onlyArr.pop();
            result.push(-1);
            return;
        }
        for (let i = index + 1; i < numbers.length; i++) {
            if (numbers[i] > number) {
                result.push(numbers[i]);
                return;
            }
        }
        return result.push(-1);
    });
    return result;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
