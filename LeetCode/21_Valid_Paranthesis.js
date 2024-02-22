// Given the string just contains the Characters ()[]{}
// Determine if the string is valid
// Open bracket must be closed by same type of bracket and in correct order and have corresponding open or closed bracket
// Input: "()"     ------>>>>>>>    Output: true
// Input: "([]{})" ------>>>>>>>    Output: true
// Input: "(]"     ------>>>>>>>    Output: false
var isValid = function (s) {
  const data = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const open = ["(", "[", "{"];
  const close = [")", "]", "}"];

  const temp = [];

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      temp.push(s[i]);
    } else if (close.includes(s[i])) {
      if (temp.pop() !== data[s[i]]) {
        return false;
      }
    }
  }

  return temp.length === 0;
};

console.log(isValid("([]{})"));
