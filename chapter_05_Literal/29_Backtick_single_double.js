/*
========================================
BACKTICK vs SINGLE vs DOUBLE QUOTES
========================================
*/

// ============ SINGLE QUOTES ============
console.log("======== SINGLE QUOTES ('')========");

let str1 = 'Hello World';
console.log(str1);  // Hello World


// ============ DOUBLE QUOTES ============
console.log("\n======== DOUBLE QUOTES (\"\")========");

let str2 = "Hello World";
console.log(str2);  // Hello World


// ============ BACKTICKS ============
console.log("\n======== BACKTICKS (``)========");

let str3 = `Hello World`;
console.log(str3);  // Hello World


// ============ MAIN DIFFERENCE ============
console.log("\n======== MAIN DIFFERENCE ========");

let name = "John";
let age = 25;

// Single & Double quotes - CANNOT use variables directly
let msg1 = 'My name is ' + name + ' and age is ' + age;
let msg2 = "My name is " + name + " and age is " + age;

console.log(msg1);  // My name is John and age is 25
console.log(msg2);  // My name is John and age is 25

// Backticks - CAN use variables with ${} (Template Literal)
let msg3 = `My name is ${name} and age is ${age}`;
console.log(msg3);  // My name is John and age is 25


// ============ SUMMARY ============
console.log("\n======== SUMMARY ========");

/*
SINGLE QUOTES (''):
- Regular string
- Need + to concat variables
- Example: 'Hello ' + name

DOUBLE QUOTES (""):
- Regular string
- Need + to concat variables
- Example: "Hello " + name

BACKTICKS (``):
- Template Literal
- Can use ${variable} directly
- Example: `Hello ${name}`
- Can span multiple lines

WHICH TO USE?
- All three work for basic strings
- Use Backticks for cleaner code with variables
- Single/Double quotes choice is personal preference
*/
