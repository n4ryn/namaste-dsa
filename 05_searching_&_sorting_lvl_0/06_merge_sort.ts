/** ===========================
 * Write a function that takes an array of integers and returns a sorted array.
 * ============================ */

// Helper function to merge two sorted arrays
function mergeSortedHalves(left: number[], right: number[]): number[] {
  // Initialize the result array, i and j pointers
  const result: number[] = [];
  let i: number = 0;
  let j: number = 0;

  // Iterate through the left and right arrays until one of them is empty
  while (i < left.length && j < right.length) {
    // If the left element is less than the right element, add it to the result array and vice versa
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add the remaining elements from the left or right array to the result array
  return [...result, ...left.slice(i), ...right.slice(j)];
}

// Merge sort algorithm
function mergeSort(arr: number[]): number[] {
  // If the array has only one element, return it
  if (arr.length <= 1) return arr;

  // Divide the array into two halves
  const mid: number = Math.floor(arr.length / 2);
  const left: number[] = mergeSort(arr.slice(0, mid));
  const right: number[] = mergeSort(arr.slice(mid));

  // Merge the two sorted halves
  return mergeSortedHalves(left, right);
}

console.log(mergeSort([8, 4, 5, 6, 9, 1, 3, 6])); // Output: [1, 3, 4, 5, 6, 6, 8, 9]
console.log(mergeSort([7, 4, 3, 5, 1, 2])); // Output: [1, 2, 3, 4, 5, 7]
