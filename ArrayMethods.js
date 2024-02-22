const numbers = [1, 2, 3, 8, 4, 5, 6, 7, 9, 8];

const res = numbers.map((val, idx) => {
  if (idx !== 2) {
    return val;
  }
});

console.log(res);

const res1 = numbers.every((val) => val % 2 === 0);
console.log(res1);

const res2 = numbers.some((val) => val % 2 === 0);
console.log(res2);

const res3 = numbers.find((val) => val === 8);
console.log(res3);

const res4 = numbers.findIndex((val) => val === 8);
console.log(res4);

const res5 = numbers.findLast((val) => val === 8);
console.log(res5);

const res6 = numbers.findLastIndex((val) => val === 8);
console.log(res6);

console.log(Array.from("njz"));
console.log(Array.of("njz"));
console.log(numbers.toString());
console.log(Array(2).fill("ok"));
console.log(Array(2));

console.log(numbers.slice(-2));
numbers.splice(1, 2, "mango");
console.log(numbers);
// const res7 = numbers.with(2, "apple");   -----> es2023 method not updated
// console.log(res7);
console.log(numbers.fill("ok", 5, 7));
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort((a, b) => b - a);
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]
