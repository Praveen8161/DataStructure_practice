/**
 * @param{array}
 * @param{number} */

const secondLargestNumber = function (arr) {
  const len = arr.length;
  let firstLarge = 0;
  let secondLarge = 0;
  //   Time Complexity -> O(n)
  //   SpaceComplexity -> O(1)
  for (let i = 0; i < len; i++) {
    if (arr[i] > firstLarge) {
      secondLarge = firstLarge;
      firstLarge = arr[i];
    } else if (arr[i] > secondLarge) {
      secondLarge = arr[i];
    }
  }

  return secondLarge;
};

console.log(
  secondLargestNumber([1, 2, 5, 4, 8, 7, 45, 546, 54, 45, 95, 95, 87, 105])
);
