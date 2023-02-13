function initObj(arr) {
    const midIdx = Math.round(arr.length / 2) - 1;
    let innerIdx = 0;
    const firstObj = {};
    const secondObj = {};
    while (innerIdx <= midIdx) {
        if (firstObj[arr[innerIdx]] === undefined) firstObj[arr[innerIdx]] = 1;
        else firstObj[arr[innerIdx]] += 1;
        innerIdx += 1;
    }
    while (innerIdx <= arr.length - 1) {
        if (secondObj[arr[innerIdx]] === undefined) secondObj[arr[innerIdx]] = 1;
        else secondObj[arr[innerIdx]] += 1;
        innerIdx += 1;
    }
    return [firstObj, secondObj];
}

function solution(topping) {
    const idx = Math.round(topping.length / 2) - 1;
    const [firstObj, secondObj] = initObj(topping);
    console.log(firstObj, secondObj);
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution([1, 2, 3, 1, 4]));
