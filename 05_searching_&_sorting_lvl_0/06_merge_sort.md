# 06. Merge Sort (Divide and Conquer Algorithm)

## Problem statement

Return a new array containing the input values in ascending order.

## Approach

1. Split the array into halves until each sub-array has at most one item.
2. Merge two sorted halves by repeatedly taking their smaller first unmerged value.
3. The final merge produces the sorted array.

## Complexity

- **Time Complexity:** `O(n log n)` in all cases.
- **Space Complexity:** `O(n)` for merged arrays and slices.

## Implementation

```typescript
function mergeSortedHalves(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}
```

## Example

```typescript
console.log(mergeSortedHalves([8, 4, 5, 6, 9, 1, 3, 6]));
// [1, 3, 4, 5, 6, 6, 8, 9]
```
