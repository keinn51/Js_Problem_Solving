function checkBig(num1, num2) {
    let strNum1 = String(num1);
    let strNum2 = String(num2);
    return Number(strNum2 + strNum1) - Number(strNum1 + strNum2);
}

function solution(numbers) {
    /*
        1. numbers 각 엘리먼트의 0번째 숫자가 큰 것이 맨 앞으로 온다
        2. 만약 그 숫자가 같다면, 1번째 숫자를 비교해서 큰 것이 앞으로 온다
        3. 만약 그 숫자가 같다면, 2번째 숫자를 비교해서 큰 것이 앞으로 온다
        4. ...
        5. 숫자 비교가 끝났는 데에도 승부를 가르지 못했다면 같은 숫자이므로 차례로 넣는다
    */
    if (numbers.every((number) => number === 0)) return "0";
    numbers.sort((a, b) => checkBig(a, b));
    return numbers.join("");
}
