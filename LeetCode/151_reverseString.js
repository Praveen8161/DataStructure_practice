// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// Efficient method
var reverseWords2 = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

// brute Force method
// Time Complexity O(n)
// Space Complexity O(n)
var reverseWords1 = function (s) {
  let str = s.split(" ");
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let result = "";
  while (stack.length) {
    let tempStr = stack.pop();
    tempStr ? (result += " " + tempStr) : "";
  }

  return result.trim();
};

const s = "a good   example";

console.log(reverseWords(s));
