/** ============================
 * Write a function that takes an array and a target value as arguments and returns the index of the target value in the array if it exists, or -1 otherwise.
 * ============================ */

function binarySearch(nums: number[], target: number): number {
  let start: number = 0;
  let end: number = nums.length - 1;

  while (start <= end) {
    let mid: number = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// Test Cases
console.log(binarySearch([2, 4, 7, 10], 10)); // 3
console.log(binarySearch([0, 3, 6, 8], 5)); // -1
