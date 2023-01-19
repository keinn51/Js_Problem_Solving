const input = require("fs").readFileSync("text.txt").toString().trim().split("\n");

const searchedArr = input[1]
    .split(" ")
    .map((e) => +e)
    .sort((a, b) => a - b);

const checkNumArr = input[3].split(" ").map((e) => +e);

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (target === arr[mid]) return mid;
        else if (target < arr[mid]) right = mid - 1;
        else left = mid + 1;
        mid = Math.floor((left + right) / 2);
    }
    if (target === arr[mid]) return mid;
    return null;
};

const solution = (searchedArr, checkNumArr) => {
    // searchedArr.sort((a, b) => a - b);
    return checkNumArr
        .map((num) => {
            if (num > searchedArr[searchedArr.length - 1]) return 0;
            else if (num < searchedArr[0]) return 0;
            const result = binarySearch(searchedArr, num);
            return result === null ? 0 : 1;
        })
        .join("\n");
};

console.log(solution(searchedArr, checkNumArr));
