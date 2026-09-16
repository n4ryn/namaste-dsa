/** ============================
 *  Write a function to find best time to buy and sell stocks and return the maximum profit.
 * ============================ */

function maxProfit(prices: number[]): number {
  if (prices.length === 0) return 0;

  let minPrice: number = prices[0];
  let maxProfit: number = 0;

  for (let i: number = 1; i < prices.length; i++) {
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }

    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
}

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
