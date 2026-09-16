# 06. Move Zeroes

## Problem statement

Move every `0` to the end of an array while preserving the relative order of non-zero values. The function modifies and returns the input array.

## Approach

Write each non-zero value at the next available position, then fill the remaining positions with zeroes.

## Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)` extra space

## Implementation

```typescript
function moveZeroes(nums: number[]): number[] {
  let write = 0;
  for (const value of nums) {
    if (value !== 0) nums[write++] = value;
  }
  while (write < nums.length) nums[write++] = 0;
  return nums;
}
```

## Examples

```typescript
moveZeroes([0, 1, 0, 3, 12]); // [1, 3, 12, 0, 0]
moveZeroes([0]); // [0]
```
