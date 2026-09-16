/** ===========================
 * Write a function that takes an array of integers and returns a sorted array.
 * ============================ */

function insertionSort(arr: number[]): number[] {
  // Iterate through the array from the second element
  for (let i = 1; i < arr.length; i++) {
    // Initialize the current element and previous element's index
    let curr = arr[i];
    let prev = i - 1;

    // Iterate the array until the current element is less than the previous element
    while (prev >= 0 && arr[prev] > curr) {
      // Swap the current element with the previous element and decrement the previous element's index
      arr[prev + 1] = arr[prev];
      prev--;
    }

    // If the current element is less than the previous element, swap them
    arr[prev + 1] = curr;
  }

  return arr;
}

console.log(insertionSort([7, 4, 3, 5, 1, 2])); // Output: [1, 2, 3, 4, 5, 7]
