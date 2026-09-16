/** ============================
 *  Write a function sum(arr, n) that calculates the sum of all the elements present in array.
 * ============================ */

function sumElements(arr: number[], n: number): number {
  if (n <= 0) return 0;

  return arr[n - 1] + sumElements(arr, n - 1);
}

// Test cases
console.log(sumElements([1, 2, 3], 3)); // Output: 6
console.log(sumElements([1, 3, 4, 23, 5, 2], 6)); // Output: 38
console.log(sumElements([], 0)); // Output: 0

/** ============================
 *  Write a function oddSum(arr, n) that calculates the sum of all the odd elements present in array.
 * ============================ */

function oddSum(arr: number[], n: number): number {
  if (n <= 0) return 0;

  const isOdd = arr[n - 1] % 2 !== 0;

  return (isOdd ? arr[n - 1] : 0) + oddSum(arr, n - 1);
}

// Test cases
console.log(oddSum([1, 2, 3], 3)); // Output: 4
console.log(oddSum([2, 3, 4, 23, 5, 2], 6)); // Output: 31
