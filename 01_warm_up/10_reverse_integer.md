# 10. Reverse Integer

## Problem statement

Given a signed 32-bit integer `x`, return its digits reversed. If the result is outside `[-2^31, 2^31 - 1]`, return `0`.

## Approach

Repeatedly take the last digit with `% 10`, append it to the result, and remove it with integer division. Apply the original sign, then check the signed 32-bit range.

## Complexity

- **Time Complexity:** `O(d)`, where `d` is the number of digits.
- **Space Complexity:** `O(1)`

1. Example 1:

   - Input: x = 123
   - Output: 321

2. Example 2:

   - Input: x = -123
   - Output: -321

3. Example 3:
   - Input: x = 120
   - Output: 21

### Logic Breakdown:

```javascript
function reverseInteger(x) {
  const isNegative = x < 0;
  x = Math.abs(x);

  // 2^31 is the largest integer that can be stored in a 32-bit signed integer
  let limit = Math.pow(2, 31) - 1;

  let reverse = 0;

  // Reverse the digits of the number
  while (x > 0) {
    let rem = x % 10;
    reverse = 10 * reverse + rem;
    x = Math.floor(x / 10);
  }

  // 32-bit overflow check
  if (reverse > limit) return 0;

  // Return negative if original was negative
  return isNegative ? -reverse : reverse;
}
```

### Test Cases:

```javascript
console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(120)); // 21
console.log(reverseInteger(1534236469)); // 0 (overflow)
console.log(reverseInteger(-2147483648)); // 0 (overflow after reverse)
```
