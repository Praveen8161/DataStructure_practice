// Time complexity
function rotateArr(arr, n) {
  const len = arr.length;
  let val = n;
  if (n > len) {
    val = n % len;
  }

  reverse(arr, 0, len - 1);
  reverse(arr, 0, n - 1);
  reverse(arr, n, len - 1);

  function reverse(arr, left, right) {
    let temp;
    while (left < right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    }
  }
  // 1 2 3 4 5 6 7
  // 7 6 5 4 3 2 1

  return arr;
}

// Brute Force
function rotate(arr, n) {
  const len = arr.length;
  let nr = n;
  if (n > len) {
    nr = n % len;
  }
  //   Time -> O(n)
  let arr1 = arr.slice(len - nr);
  //   Time -> O(n)
  let arr2 = arr.slice(0, len - nr);

  return [...arr1, ...arr2];
}

console.time("first");
const res = rotate([1, 2, 3, 4, 5, 6, 7], 5);
console.log(res);
console.timeEnd("first");

console.time("second");
const res1 = rotateArr([1, 2, 3, 4, 5, 6, 7], 5);
console.log(res1);
console.timeEnd("second");
