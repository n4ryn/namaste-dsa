# [04. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

## Problem Statement:

### You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

### You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

### Return the **_maximum profit_** you can achieve from this transaction. If you cannot achieve any profit, return `0`.

Example 1:

- Input: prices = [7,1,5,3,6,4]
- Output: 5
- Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

- Input: prices = [7,6,4,3,1]
- Output: 0
- Explanation: In this case, no transactions are done and the max profit = 0.

## Approach:

1. **Initialize `minPrice`:**

   - Return `0` for an empty price list.
   - Otherwise set `minPrice = prices[0]` — assume the first day’s price is the lowest so far.

2. **Initialize `maxProfit`:**

   - Set `maxProfit = 0` — no profit made yet.

3. **Iterate Over Prices:**

   - Start from index `1` to the end of the array.
   - For each `prices[i]`:

     - **Calculate potential profit** by `prices[i] - minPrice`.
     - If it's **greater than `maxProfit`**, update `maxProfit`.
     - If `prices[i]` is **less than `minPrice`**, update `minPrice` to this new lower value.

4. **Return `maxProfit`:**

   - After going through all prices, return the highest profit found.

## Complexity:

- **Time Complexity:** `O(n)` Only one pass through the array is required.

- **Space Complexity:** `O(1)` Only two variables (`minPrice`, `maxProfit`) are used.

## Logic Breakdown:

```javascript
function maxProfit(prices) {
  if (prices.length === 0) return 0;

  // Initialize the minimum price to the first day's price
  let minPrice = prices[0];

  // Initialize the maximum profit to 0
  let maxProfit = 0;

  // Start iterating from the second price
  for (let i = 1; i < prices.length; i++) {
    // Calculate the potential profit by selling at current price and buying at the minimum price seen so far
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }

    // Update the minimum price if the current price is lower
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  // Return the maximum profit found
  return maxProfit;
}
```

## Test Cases:

```javascript
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
```
