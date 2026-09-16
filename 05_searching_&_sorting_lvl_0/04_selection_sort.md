# 04. Selection Sort

## Problem statement

Sort an array of numbers in ascending order, modifying and returning the same array.

## Approach

For each position, scan the remaining unsorted suffix to find its smallest value, then swap it into that position. After each pass, the sorted prefix grows by one element.

## Complexity

- **Time Complexity:** `O(n^2)` in the best, average, and worst cases because every suffix is scanned.
- **Space Complexity:** `O(1)` extra space.

## Implementation

```typescript
function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}
```

## Example

```typescript
console.log(selectionSort([3, 5, 1, 2, 4])); // [1, 2, 3, 4, 5]
```
