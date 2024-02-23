// Sliding window maximum
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
// Brute force method
var maxSlidingWindow1 = function (nums, k) {
  const result = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    result.push(Math.max(...nums.slice(i, i + k)));
  }

  return result;
};

console.log(maxSlidingWindow1(nums, k));

var maxSlidingWindow = function (nums, k) {
  let result = [];
  let dequeue = [];
  for (let i = 0; i < nums.length; i++) {
    if (dequeue.length > 0 && dequeue[0] <= i - k) {
      dequeue.shift();
    }

    while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
      dequeue.pop();
    }

    dequeue.push(i);

    if (i >= k - 1) {
      result.push(nums[dequeue[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindow(nums, k));
