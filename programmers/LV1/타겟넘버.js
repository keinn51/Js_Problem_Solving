function solution(numbers, target) {
    let result = 0;

    function iter(acc, numbers, index, depth, target) {
        if (index >= depth) {
            if (acc === target) {
                result += 1;
            }
            return;
        }
        iter(acc + numbers[index], numbers, index + 1, depth, target);
        iter(acc - numbers[index], numbers, index + 1, depth, target);
    }

    iter(0, numbers, 0, numbers.length, target);

    return result;
}
