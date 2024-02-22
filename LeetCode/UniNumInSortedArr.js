// Unique Numbers in sorted array
// [0,0,1,1,2,2,3,3,4,4,5,5,6,6]
console.time("first");
function uniNumber(arr) {
  const n = new Set(arr);
  console.log(n.size);
}

const arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
uniNumber(arr);
console.timeEnd("first");

console.time("second");

function uniNumberArr(arr) {
  let i = 0;
  for (let j = 1; j < arr.length - 1; j++) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];
    }
  }

  console.log(i + 1);
  console.log(arr);
}

uniNumberArr(arr);
console.timeEnd("second");
