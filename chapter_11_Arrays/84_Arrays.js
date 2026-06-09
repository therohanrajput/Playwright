// Via an Array Literal - preffered way
let browser = ["Chrome", "Firefox", "Edge", "Safari"];
// console.log("Browser Array:", browser);

// Via the Array Constructor - not recommended
let score = new Array(10); // Creates an array of length 10 with empty slots
score[0] = "Rohan";
score[3] = "Rajput";
score[9] = "Just for fun";

// Output - Score Array (length 10): [ 'Rohan', <2 empty items>, 'Rajput', <5 empty items>, 'Just for fun' ]

let score1 = new Array(10).fill(1); // Creates an array of length 10 filled with 1s
let score2 = new Array(10, 11, 23, 45); // Creates an array with the provided elements

// console.log("Score Array (length 10):", score);
// console.log("Score1 Array (filled with 1s):", score1);
// console.log("Score2 Array (with elements):", score2);

// Array.from() - creates a new array from an array-like or iterable object
let str = "Hello";
// let str = 12345; // Number is not iterable, will throw an error
let charArray = Array.from(str); // Converts string to array of characters
console.log("Character Array from String:", charArray);

// Array.of() - creates a new array from a variable number of arguments
let numArray = Array.of(1, 2, 3, 4, 5);
console.log("Number Array using Array.of():", numArray);

// Key Takeaways
// 1. Array literals are the most common and recommended way to create arrays.
// 2. The Array constructor can lead to confusion, especially when passing a single numeric argument (creates an array of that length).
// 3. Array.from() is useful for converting array-like or iterable objects into arrays.
// 4. Array.of() is a convenient way to create arrays from a list of arguments, without the special behavior of the Array constructor.

// ============================================================================
// DIFFERENCE BETWEEN Array.of() vs Array.from()
// ============================================================================
// 
// Array.of():
//   - Creates a new array from INDIVIDUAL ARGUMENTS
//   - Syntax: Array.of(element0, element1, ..., elementN)
//   - Example: Array.of(1, 2, 3, 4, 5) → [1, 2, 3, 4, 5]
//   - Array.of(10) → [10] (creates array with element 10, NOT length 10)
//   - Use case: When you have individual values to put in an array
//
// Array.from():
//   - Creates a new array from an ITERABLE or ARRAY-LIKE OBJECT
//   - Syntax: Array.from(arrayLike, mapFunction, thisArg)
//   - Example: Array.from("Hello") → ['H', 'e', 'l', 'l', 'o']
//   - Supports mapping function: Array.from([1, 2, 3], x => x * 2) → [2, 4, 6]
//   - Use case: Converting strings, Sets, NodeLists, or other iterables to arrays
//
// Key Differences:
//   ┌──────────────────┬──────────────────┬──────────────────┐
//   │ Feature          │ Array.of()       │ Array.from()     │
//   ├──────────────────┼──────────────────┼──────────────────┤
//   │ Input type       │ Individual args  │ Iterable/alike   │
//   │ Mapping function │ ❌ No            │ ✅ Yes (2nd arg) │
//   │ new Array(5)     │ Array.of(5)→[5]  │ N/A              │
//   │ String convert   │ ❌ No            │ ✅ Yes           │
//   └──────────────────┴──────────────────┴──────────────────┘
// ============================================================================  

