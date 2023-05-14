/*
보조 컨테이너 => 스택
컨테이너 벨트르 순회하면서 순서가 아니라면 보조 컨테이너 벨트에 쌓음
보조 컨테이너 벨트 마지막 요소 혹은 컨테이너 벨트의 요소가 순서에 맞으면 결과에 추가
함수가 끝나는 조건은
1. 컨테이너 벨트 남은 요소에 없다
2. 보조 컨테이너 마지막 요소에도 없다
3. 컨테이너를 다 훑어보고, 보조 컨테이너도 훑어봤는데 더 이상 할 수 있는게 없다
*/

function solution(order) {
    let result = 0,
        index = 0;
    const container = new Array(order.length).fill(0).map((_, i) => i + 1);
    container.sort((a, b) => b - a);
    const subContainer = [];

    while (container.length > 0) {
        const firstElem = container[container.length - 1];
        const lastStack = subContainer[subContainer.length - 1];
        let num = order[index];
        let isExist = num >= firstElem;
        if (isExist === true) {
            const lim = num - firstElem;
            for (let i = 0; i < lim; i++) {
                const item = container.pop();
                subContainer.push(item);
            }
            result += 1;
            index += 1;
            container.pop();
        } else if (num === lastStack) {
            result += 1;
            index += 1;
            subContainer.pop();
        } else break;
    }

    while (subContainer.length > 0 && subContainer[subContainer.length - 1] === order[index]) {
        result += 1;
        index += 1;
        subContainer.pop();
    }

    return result;
}
