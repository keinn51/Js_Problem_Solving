function solution(numbers) {
    const result = new Array(numbers.length).fill(-1);
    const indexStack = [];

    numbers.forEach((number, index) => {
        if (index === 0) {
            indexStack.push(index);
            return;
        }
        if (numbers[index - 1] < number) {
            while (indexStack.length > 0) {
                const lastIndex = indexStack[indexStack.length - 1];
                if (numbers[lastIndex] < number) {
                    result[lastIndex] = number;
                    indexStack.pop();
                    continue;
                }
                break;
            }
        }
        indexStack.push(index);
    });
    return result;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
