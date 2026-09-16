# 04. Factorial of a Number Using Recursion

## Problem Statement:

### Write a recursive function `factorial(n)` that returns the factorial of a given non-negative integer `n`.

> The factorial of a number `n` is defined as:

```text
n! = n × (n - 1) × (n - 2) × ... × 2 × 1
```

> By definition:

```
1! = 1
3! = 3 × 2 × 1 = 6
5! = 5 × 4 × 3 × 2 × 1 = 120
```

Example 1:

- Input: n = 5
- Output: 120
- Explanation: 5! = 5 × 4 × 3 × 2 × 1 = 120

Example 2:

- Input: n = 10
- Output: 3628800
- Explanation: 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800

## Approach:

1. **Base Case:**

   - If `n` is `0` or `1`, return `1`.

2. **Recursive Case:**

   - If `n > 1`, return `n * factorial(n - 1)`.
   - The function keeps multiplying `n` with the factorial of `n - 1` until it reaches 1.

## Complexity:

- **Time Complexity:** `O(n)` The function makes `n` recursive calls to compute the result.

- **Space Complexity:** `O(n)` The call stack will grow `n` levels deep due to recursion.

## Logic Breakdown:

```javascript
function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new RangeError("factorial expects a non-negative integer");
  }
  if (n <= 1) return 1;

  // Recursive Case
  return n * factorial(n - 1);
}
```

## Test Cases:

```javascript
console.log(factorial(5)); // Output: 120
console.log(factorial(10)); // Output: 3628800
console.log(factorial(0)); // Output: 1
```
