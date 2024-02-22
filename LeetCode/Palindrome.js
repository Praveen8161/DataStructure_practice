/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  if (x < 0) return false;
  return x === +x.toString().split("").reverse().join("");
};
const res = isPalindrome(10);
console.log(res);
