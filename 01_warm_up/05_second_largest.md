# 05. Second Largest

## Problem statement

Given an array of numbers, return the second **distinct** largest value. Return `null` when fewer than two distinct values exist.

1. Example 1:
   - Input: arr = [4, 9, 0, 2, 8, 7, 1]
   - Output: 8
   - Explanation: The second largest number in the array is 8.

2. Example 2:
   - Input: arr = [2]
   - Output: null
   - Explanation: There is only one number in the array, so the second largest number is null.

3. Example 3:
   - Input: arr = [-5, -3, -5, -2, -434, -22]
   - Output: -3
   - Explanation: The second largest number is -3, which is the largest negative number in the array.

4. Example 4:
   - Input: arr = [7, 7, 7]
   - Output: null
   - Explanation: There is only one distinct value.

## Approach

Track the largest and second-largest distinct values in one pass. When a new largest value appears, move the previous largest into second place. Duplicates do not change either value.

## Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

### Logic Breakdown:

```javascript
function secondLargest(arr) {
  // Special case: empty or single element array has no second largest number
  if (arr.length < 2) return null;

  // Assume the first and second largest numbers are at negative infinity
  let firstLargest = arr[0];
  let secondLargest = -Infinity;
  let secondLargestExists = false;

  // Find the first and second largest numbers
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      // Update second largest number if current number is larger and then update first largest number

      secondLargest = firstLargest;
      secondLargestExists = true;
      firstLargest = arr[i];
    } else if (arr[i] !== firstLargest && arr[i] > secondLargest) {
      // Update second largest number if current number is larger than second largest number and smaller than first largest number

      secondLargest = arr[i];
      secondLargestExists = true;
    }
  }

  return secondLargestExists ? secondLargest : null;
}
```

### Test Cases:

```javascript
console.log(secondLargest([4, 9, 0, 2, 8, 7, 1])); // 8
console.log(secondLargest([2])); // null
console.log(secondLargest([-5, -3, -5, -2, -434, -22])); // -3
console.log(secondLargest([7, 7, 7])); // null
```
