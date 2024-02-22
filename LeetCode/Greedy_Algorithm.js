// Greedy Algorithm
/**
 * @param{array} *
 * @param{number} */
console.time("maxProfit");
var maxProfit = function (prices) {
  let minVal = prices[0];
  let profit = 0;
  let len = prices.length;

  for (let i = 0; i < len - 1; i++) {
    if (minVal >= prices[i + 1]) {
      minVal = prices[i + 1];
    } else {
      let tempProfit = prices[i + 1] - minVal;
      if (tempProfit > profit) profit = tempProfit;
    }
  }

  return profit;
};

const res = maxProfit([7, 1, 5, 3, 6, 4]);

console.log(res);

console.timeEnd("maxProfit");
