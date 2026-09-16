/** ============================
 *  Write a function that takes an integer as an argument and returns the reverse of that integer.
 * ============================ */

function reverseInteger(x: number): number {
  const isNegative: boolean = x < 0;
  x = Math.abs(x);

  const maxInt32: number = 2 ** 31 - 1;
  const minInt32: number = -(2 ** 31);

  let reverse: number = 0;

  // Reverse the digits of the number
  while (x > 0) {
    let rem: number = x % 10;
    reverse = 10 * reverse + rem;
    x = Math.floor(x / 10);
  }

  const result: number = isNegative ? -reverse : reverse;

  // Return 0 when the signed 32-bit result would overflow.
  if (result < minInt32 || result > maxInt32) {
    return 0;
  }

  return result;
}

// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
console.log(reverseInteger(-2147483648)); // Output: 0
