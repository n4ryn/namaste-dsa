# 07. Max Consecutive Ones

## Problem statement

Given a binary array, return the longest run of consecutive `1` values.

## Approach

Keep a count for the current run. Reset it at each `0`, and track the largest count seen so far.

## Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

## Implementation

```typescript
function findMaxConsecutiveOnes(nums: number[]): number {
  let current = 0;
  let longest = 0;

  for (const value of nums) {
    if (value === 1) {
      current++;
      longest = Math.max(longest, current);
    } else {
      current = 0;
    }
  }
  return longest;
}
```

## Examples

```typescript
findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1]); // 3
findMaxConsecutiveOnes([]); // 0
```
