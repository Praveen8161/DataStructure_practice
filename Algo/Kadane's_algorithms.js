// Maximum sum subArray
// Given Integer array nums / find the subarray with largest sums
// Input: [-2,1,-3,4,-1,2,1,-5,4] --------->>>>>>   Output: 6,
// Input: [5,4,-1,7,8]            --------->>>>>>   Output: 23

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Kadane's Method
function maxSubArr(arr) {
  let maxSum = arr[0];
  let currSum = 0;
  // let sIdx = 0;
  // let endIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];

    if (currSum > maxSum) {
      maxSum = currSum;
      // endIdx = i;
    }
    if (currSum < 0) {
      currSum = 0;
      // sIdx = i + 1;
    }
  }

  // return { maxSum, array: arr.slice(sIdx, endIdx + 1) };
  return maxSum;
}

console.log(maxSubArr(arr));

// Brute Methods
function maxSub(arr) {
  let maxSum = arr[0];
  let startIdx = 0;
  let endIdx = 0;
  //   Time Complexity O(n^2)
  //   Space Complexity O(1)
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIdx = i;
        endIdx = j;
      }
    }
  }

  return {
    maxSum,
    array: arr.slice(startIdx, endIdx + 1),
  };
}

console.log(maxSub(arr));
