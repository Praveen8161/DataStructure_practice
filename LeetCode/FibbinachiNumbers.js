// @params{number}
// @return{number}

var fib = function (n) {
  if (n < 2) return n;
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

var fib1 = function (n) {
  if (n <= 1) return n;

  return fib1(n - 1) + fib1(n - 2);
};

console.log(fib1(10));
console.log(fib(10));
