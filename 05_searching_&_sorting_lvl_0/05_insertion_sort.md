# 05. Insertion Sort

## Problem Statement

Sort an array of numbers in ascending order, modifying and returning the same array.

## Approach

Treat the left side as sorted. Take the next value, shift larger values one position right, and insert that value into the opening. This works especially well for nearly sorted input.

## Complexity

- **Time Complexity:** `O(n)` best case; `O(n^2)` average and worst case.
- **Space Complexity:** `O(1)` extra space.

## Implementation

```typescript
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let previous = i - 1;

    while (previous >= 0 && arr[previous] > current) {
      arr[previous + 1] = arr[previous];
      previous--;
    }
    arr[previous + 1] = current;
  }

  return arr;
}
```

## Example

```typescript
console.log(insertionSort([7, 4, 3, 5, 1, 2])); // [1, 2, 3, 4, 5, 7]
```
