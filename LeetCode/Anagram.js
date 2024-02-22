/**
 * @param{string}
 * @param{string}
 * @param{boolean} */

// const isAnagram = function (s, t) {
//   const len = s.length;
//   if (len !== t.length) return false;

//   const a = s.split("").sort().join("");
//   const b = t.split("").sort().join("");

//   return a === b;
// };

const isAnagram = function (s, t) {
  const len = s.length;
  if (len !== t.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < len; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("aacc", "ccac"));
