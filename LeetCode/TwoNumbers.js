/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let check = {};

  for (let i = 0; i < nums.length; i++) {
    let a = target - nums[i];
    if (check[a] !== undefined) {
      return [check[a], i];
    }
    check[nums[i]] = i;
  }
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
