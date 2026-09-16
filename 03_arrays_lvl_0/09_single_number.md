# 09. Single Number

## Problem statement

Every value in the array appears exactly twice except one value. Return that single value.

## Approach

Use bitwise XOR: equal values cancel (`x ^ x === 0`) and zero leaves a value unchanged. XORing every value leaves only the unmatched one.

## Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

## Implementation

```typescript
function singleNumber(nums: number[]): number {
  let result = 0;
  for (const value of nums) result ^= value;
  return result;
}
```

## Examples

```typescript
singleNumber([2, 2, 1]); // 1
singleNumber([4, 1, 2, 1, 2]); // 4
```
