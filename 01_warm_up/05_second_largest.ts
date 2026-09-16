/** ============================
 *  Write a function that returns the second largest number in an array.
 * ============================ */

function secondLargest(arr: number[]): number | null {
  // Special case: empty array has no second largest number
  if (arr.length < 2) return null;

  // Initialize the largest value with the first array element
  let firstLargest: number = arr[0];
  let secondLargest: number = -Infinity;
  let secondLargestExists: boolean = false;

  // Find the first and second largest numbers
  for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      secondLargestExists = true;
      firstLargest = arr[i];
    } else if (
      arr[i] !== firstLargest &&
      (!secondLargestExists || arr[i] > secondLargest)
    ) {
      secondLargest = arr[i];
      secondLargestExists = true;
    }
  }

  return secondLargestExists ? secondLargest : null;
}

// Test cases
console.log(secondLargest([4, 9, 0, 2, 8, 7, 1])); // Output: 8
console.log(secondLargest([2])); // Output: null
console.log(secondLargest([5, 17, 10, 8, 17, 1, 5])); // Output: 10
console.log(secondLargest([-5, -3, -5, -2, -434, -22])); // Output: -3
console.log(secondLargest([7, 7, 7])); // Output: null
