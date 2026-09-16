# 08. Missing Number

## Problem statement

An array of length `n` contains distinct values from the inclusive range `0` through `n`, with exactly one value missing. Return the missing value.

## Approach

The expected sum of `0` through `n` is `n * (n + 1) / 2`. Subtract the actual array sum to obtain the missing value.

## Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

## Implementation

```typescript
function missingNumber(nums: number[]): number {
  const expected = (nums.length * (nums.length + 1)) / 2;
  let actual = 0;
  for (const value of nums) actual += value;
  return expected - actual;
}
```

## Examples

```typescript
missingNumber([3, 0, 1, 4]); // 2
missingNumber([0, 1]); // 2
```
