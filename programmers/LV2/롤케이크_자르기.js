const compareSet = (arr, idx) => {
    const firstSet = new Set(arr.slice(0, idx));
    const secondSet = new Set(arr.slice(idx, arr.length));
    if (firstSet.size !== secondSet.size) return firstSet.size - secondSet.size;
    return 0;
};

function solution(topping) {
    let result = 0;
    let idx = Math.round(topping.length / 2);
    if (compareSet(topping, idx) > 0) {
        while (compareSet(topping, idx) > 0 && idx >= 0) {
            idx--;
        }
        if (idx < 0) return 0;
        if (compareSet(topping, idx) < 0) return 0;
        else {
            while (compareSet(topping, idx) === 0 && idx >= 0) {
                result += 1;
                idx -= 1;
            }
            return result;
        }
    } else if (compareSet(topping, idx) < 0) {
        while (compareSet(topping, idx) < 0 && idx <= arr.length - 1) {
            idx++;
        }
        if (idx > arr.length - 1) return 0;
        if (compareSet(topping, idx) > 0) return 0;
        else {
            while (compareSet(topping, idx) === 0 && idx <= arr.length - 1) {
                result += 1;
                idx += 1;
            }
            return result;
        }
    } else {
        result += 1;
        let forwardIdx = idx + 1;
        let backwardIdx = idx - 1;
        while (compareSet(topping, forwardIdx) === 0) {
            forwardIdx += 1;
            result += 1;
        }
        while (compareSet(topping, backwardIdx) === 0) {
            backwardIdx -= 1;
            result += 1;
        }
        return result;
    }
    return 0;
}

compareSet([1, 2, 3, 3, 2, 1], 2);
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution([1, 2, 3, 1, 4]));
