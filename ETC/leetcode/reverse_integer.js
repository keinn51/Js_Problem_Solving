/*
 * reverse integer
 * 
 * Given an integer x, return x with its digits reversed. 

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

 */

const solution = (x) => {
    const minusHelper = x < 0 ? -1 : 1;
    const newNum = Number(String(Math.abs(x)).split("").reverse().join(""));
    return minusHelper * newNum;
};

console.log(solution(123, 321));
console.log(solution(-123, -321));
console.log(solution(120, 21));
console.log(solution(0, 0));
console.log(solution(-1200200, -20021));
