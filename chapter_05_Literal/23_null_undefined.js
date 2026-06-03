/*
========================================
NULL vs UNDEFINED in JavaScript
========================================

Simple Explanation:
- UNDEFINED: Variable is declared but no value is assigned (accidental)
- NULL: Variable is explicitly assigned the value null (intentional)

Both represent "no value" or "empty", but they have different meanings.
*/

// ============ UNDEFINED ============
console.log("======== UNDEFINED ========");

// 1. Variable declared but not initialized
let x;
console.log(x);  // Output: undefined

// 2. Function with no return statement
function testFunc() {
  // No return statement
}
let result = testFunc();
console.log(result);  // Output: undefined

// 3. Function parameter not provided
function greet(name) {
  console.log(name);  // If name not provided, it will be undefined
}
greet();  // Output: undefined

// 4. Missing object property
let person = { name: "John" };
console.log(person.age);  // Output: undefined (property doesn't exist)

// 5. Accessing array element that doesn't exist
let arr = [1, 2, 3];
console.log(arr[10]);  // Output: undefined (index doesn't exist)


// ============ NULL ============
console.log("\n======== NULL ========");

// 1. Explicitly assigned null (intentional)
let y = null;
console.log(y);  // Output: null

// 2. Function returning null
function checkValue() {
  return null;
}
console.log(checkValue());  // Output: null

// 3. Assigning null to clear a variable
let data = { name: "John" };
data = null;  // Intentionally clearing the variable
console.log(data);  // Output: null


// ============ COMPARISON ============
console.log("\n======== COMPARISON ============");

// Loose equality (== ) - treats them as equal
console.log(null == undefined);   // Output: true

// Strict equality (===) - they are different types
console.log(null === undefined);  // Output: false

// Type checking
console.log(typeof undefined);    // Output: "undefined"
console.log(typeof null);         // Output: "object" (bug in JS)


// ============ SIMPLE SUMMARY ============
console.log("\n======== SUMMARY ========");

/*
UNDEFINED:
- Meaning: "No value has been assigned"
- Type: "undefined"
- When: Variable declared but not initialized, function with no return, missing arguments/properties
- Automatic: JavaScript assigns it automatically

NULL:
- Meaning: "Value is intentionally empty/nothing"
- Type: "object" (historical bug)
- When: You explicitly assign it
- Manual: You have to assign it yourself
*/

// Real-world example:
let userAge;           // undefined - not assigned yet
let userMiddleName = null;  // null - intentionally no middle name

console.log("Age:", userAge);           // undefined
console.log("Middle Name:", userMiddleName);  // null
