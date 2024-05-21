/*
 * two sum
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] 
 * 
 */

const solution = (nums, target) => {
    const indexInfo = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const pairNum = Number(target) - Number(num);
        if (indexInfo[pairNum] !== undefined) {
            return [indexInfo[pairNum], i];
        }
        if (indexInfo[num] === undefined) indexInfo[num] = i;
    }

    return false;
};

console.log(solution([2, 7, 11, 15], 9));
console.log(solution([3, 2, 4], 6));
console.log(solution([3, 3], 6));
