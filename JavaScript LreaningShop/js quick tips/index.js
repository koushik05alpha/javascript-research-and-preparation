// Remove Last Digits
const int = (1553 / 10) | 0;
console.log(int);
// Output -> 155
// --------------------------------------//
// Filter Unique Values
const array = [1, 2, 3, 4, 5, 4, 5, 1, 7];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);
// Output -> [1, 2, 3, 4, 5, 7]
// --------------------------------------//
// Last item in array
let Array = [1, 2, 3, 4, 5];
let lastIndex = Array.slice(-1);
console.log(lastIndex);
// Output -> [5]
// --------------------------------------//
// Convert to Boolean
const isTrue = !0;
console.log(isTrue);
console.log(typeof isTrue);
// Output -> true
// Output -> boolean
// --------------------------------------//
const alsoFalse = !!0;
console.log(alsoFalse);
console.log(typeof alsoFalse);
// Output -> false
// Output -> boolean
// --------------------------------------//
// Convert String to Integer
let Int = "15";
Int = +Int;
console.log(Int);
console.log(typeof Int);
// Output -> 15
// Output -> number
// --------------------------------------//
// Convert Float to Integer
const integer = 20.75 | 0;
console.log(integer);
console.log(typeof integer);
// Output -> 20
// Output -> number
// --------------------------------------//
// Truncate an Array
let thisArray = [1, 2, 3, 4, 5];
thisArray.length = 3;
console.log(thisArray);
// Output -> [ 1, 2, 3 ]
// --------------------------------------//
// Convert to String
const val = 10 + "";
console.log(val);
console.log(typeof val);
// Output -> 10
// Output -> string
// --------------------------------------//
