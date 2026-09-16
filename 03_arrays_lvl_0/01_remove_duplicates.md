# [01. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

## Problem Statement:

### Given an integer array `nums` sorted in non-decreasing order, remove the duplicates **_in-place_** such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

### Consider the number of unique elements of `nums` to be `k`, to get accepted, you need to do the following things:

- ### Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially. The remaining elements of `nums` are not important as well as the size of `nums`.

- ### Return `k`.

Example 1:

- Input: nums = [1,1,2]
- Output: 2, nums = [1,2,_]
- Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

- Input: nums = [0,0,1,1,1,2,2,3,3,4]
- Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
- Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).

## Approach:

1. **Initialize Pointer:**

   - If the array is empty, return `0`.
   - Otherwise set a pointer `x = 0` to keep track of the position of the last unique element.

2. **Loop through the array from index 1:**

   - For each element `nums[i]`, compare it with the last unique element `nums[x]`.
   - If `nums[i]` is **different** (since array is sorted, different means greater), it's a new unique value.

3. **Update array in-place:**

   - Increment `x`.
   - Assign `nums[i]` to `nums[x]`, effectively overwriting duplicates and shifting unique values forward.

4. **Return count of unique elements:**

   - Since index `x` holds the last unique element, the count of unique elements is `x + 1`.

## Complexity:

- **Time Complexity:** `O(n)` One pass through the array.
- **Space Complexity:** `O(1)` No extra space used.

## Logic Breakdown:

```javascript
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  // Initialize a pointer to track the position of the last unique element
  let x = 0;

  // Iterate through the array starting from index 1
  for (let i = 1; i < nums.length; i++) {
    // If the current element is different from the last unique element
    if (nums[i] > nums[x]) {
      x += 1; // Move the pointer forward
      nums[x] = nums[i]; // Overwrite the duplicate with the new unique value
    }
  }

  // Return the count of unique elements (index + 1)
  return x + 1;
}
```

## Test Cases:

```javascript
console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5
console.log(removeDuplicates([])); // Output: 0
```

## Note:

1. **Sorted increasing order array**:
   - `arr = [1, 2, 3, 4, 5]`
   - will not contain duplicates
   - so element at `arr[i + 1]` will always be greater than element at `arr[i]`
2. Sorted decreasing order array:
   - `arr = [5, 4, 3, 2, 1]`
   - will not contain duplicates
   - so element at `arr[i + 1]` will always be less than element at `arr[i]`
3. Sorted non-decreasing order array:
   - `arr = [1, 1, 2, 2, 3, 4, 5]`
   - will contain duplicates
   - so element at `arr[i + 1]` will be greater than or equal to element at `arr[i]`
