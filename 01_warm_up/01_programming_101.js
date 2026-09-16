/** ============================
 *  Strings in JavaScript
 *  Strings are enclosed in single or double quotes
 * ============================ */
console.log('Hello World');
console.log("Hello Again");

/** ============================
 *  Numbers in JavaScript
 *  Numbers can be integers or floats
 * ============================ */
console.log(1); // Integer
console.log(1.1); // Float

/** ============================
 *  Booleans in JavaScript
 *  Booleans represent true or false values
 * ============================ */
console.log(true);
console.log(false);

/** ============================
 *  Mathematical Operators
 *  +, -, *, /, %
 * ============================ */
const a = 10;
const b = 20;

console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(a / b); // 0.5
console.log(a % b); // 10

/** ============================
 *  let and const in JavaScript
 *  let allows reassignment; const does not
 * ============================ */
let x = 10;
const y = 20;

console.log(x); // 10
x = 30;
console.log(x); // 30
console.log(y); // 20

/** ============================
 *  String Concatenation
 *  Strings can be combined using +
 * ============================ */
const firstName = "John";
const lastName = "Doe";

const fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

/** ============================
 *  Type Coercion with +
 *  JavaScript coerces types depending on operands
 * ============================ */

// Number + other types
console.log(1 + 1); // 2
console.log(1 + "1"); // "11"
console.log(1 + true); // 2
console.log(1 + false); // 1
console.log(1 + null); // 1
console.log(1 + undefined); // NaN

// String + other types
console.log("1" + 1); // "11"
console.log("1" + true); // "1true"
console.log("1" + null); // "1null"
console.log("1" + undefined); // "1undefined"

// Boolean + other types
console.log(true + true); // 2
console.log(true + false); // 1
console.log(false + false); // 0
console.log(true + null); // 1
console.log(true + undefined); // NaN
console.log(true + "1"); // "true1"

// null + other types
console.log(null + 1); // 1
console.log(null + "1"); // "null1"
console.log(null + true); // 1
console.log(null + undefined); // NaN

// undefined + other types
console.log(undefined + 1); // NaN
console.log(undefined + "1"); // "undefined1"
console.log(undefined + true); // NaN
console.log(undefined + null); // NaN
console.log(undefined + undefined); // NaN

/** ============================
 *  Arrays in JavaScript
 *  Arrays are ordered lists of values
 * ============================ */
const numArr = [1, 2, 3, 4, 5];
console.log(numArr[1] + numArr[2]); // 2 + 3 = 5

const strArr = ["a", "b", "c", "d", "e"];
console.log(strArr[1] + strArr[3]); // "b" + "d" = "bd"

const mixedArr = [1, "a", true, false, null, undefined];
console.log(mixedArr[1] + mixedArr[2]); // "a" + true = "atrue"

const arrInArr = [1, 2, 3, [4, [5, 6], 7]];
console.log(arrInArr[3][1][1]); // 6

/** ============================
 *  Objects in JavaScript
 *  Objects are collections of key-value pairs
 * ============================ */
const obj = {
  name: "John",
  age: 20,
  isStudent: true,
  hobbies: ["reading", "coding", "hiking"],
};

console.log(obj.name); // "John"
console.log(obj.age); // 25
console.log(obj.isStudent); // true
console.log(obj.hobbies); // ["reading", "coding", "hiking"]

// Modify array inside object
obj.hobbies.push("cycling");
console.log(obj.hobbies); // [..., "cycling"]

obj.hobbies.pop();
console.log(obj.hobbies); // Original list again
