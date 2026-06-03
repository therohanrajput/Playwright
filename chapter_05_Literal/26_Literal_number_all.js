/*
========================================
ALL NUMBER TYPES IN JAVASCRIPT
========================================

JavaScript has different ways to represent numbers.
Let's explore all of them!
*/

// ============ INTEGER NUMBERS ============
console.log("======== INTEGER NUMBERS ========");

let integer1 = 42;
let integer2 = -10;
let integer3 = 0;

console.log(integer1);  // 42
console.log(integer2);  // -10
console.log(integer3);  // 0
console.log(typeof integer1);  // "number"


// ============ FLOATING POINT NUMBERS (DECIMAL) ============
console.log("\n======== FLOATING POINT NUMBERS ========");

let float1 = 3.14;
let float2 = -2.5;
let float3 = 0.5;
let float4 = 9.;   // Also valid (9.0)

console.log(float1);   // 3.14
console.log(float2);   // -2.5
console.log(float3);   // 0.5
console.log(float4);   // 9


// ============ EXPONENTIAL NOTATION (Scientific Notation) ============
console.log("\n======== EXPONENTIAL NOTATION ========");

let exp1 = 5e2;      // 5 × 10^2 = 500
let exp2 = 2e3;      // 2 × 10^3 = 2000
let exp3 = 1.5e2;    // 1.5 × 10^2 = 150
let exp4 = 5e-2;     // 5 × 10^-2 = 0.05
let exp5 = 1e-3;     // 1 × 10^-3 = 0.001

console.log(exp1);   // 500
console.log(exp2);   // 2000
console.log(exp3);   // 150
console.log(exp4);   // 0.05
console.log(exp5);   // 0.001


// ============ HEXADECIMAL NUMBERS (Base 16) ============
console.log("\n======== HEXADECIMAL NUMBERS ========");

let hex1 = 0xFF;     // 255 in decimal
let hex2 = 0x10;     // 16 in decimal
let hex3 = 0xAB;     // 171 in decimal
let hex4 = 0x1A;     // 26 in decimal

console.log(hex1);   // 255
console.log(hex2);   // 16
console.log(hex3);   // 171
console.log(hex4);   // 26
console.log("0xFF in decimal:", 0xFF);


// ============ OCTAL NUMBERS (Base 8) ============
console.log("\n======== OCTAL NUMBERS ========");

let octal1 = 0o10;   // 8 in decimal
let octal2 = 0o77;   // 63 in decimal
let octal3 = 0o100;  // 64 in decimal
let octal4 = 0o755;  // 493 in decimal

console.log(octal1);   // 8
console.log(octal2);   // 63
console.log(octal3);   // 64
console.log(octal4);   // 493


// ============ BINARY NUMBERS (Base 2) ============
console.log("\n======== BINARY NUMBERS ========");

let binary1 = 0b1010;    // 10 in decimal
let binary2 = 0b1111;    // 15 in decimal
let binary3 = 0b11111111; // 255 in decimal
let binary4 = 0b100;      // 4 in decimal

console.log(binary1);   // 10
console.log(binary2);   // 15
console.log(binary3);   // 255
console.log(binary4);   // 4


// ============ SPECIAL NUMBER VALUES ============
console.log("\n======== SPECIAL NUMBER VALUES ========");

// 1. Infinity
let infinity1 = Infinity;
let infinity2 = -Infinity;
let infinity3 = 1 / 0;     // Results in Infinity
let infinity4 = -1 / 0;    // Results in -Infinity

console.log(infinity1);    // Infinity
console.log(infinity2);    // -Infinity
console.log(infinity3);    // Infinity
console.log(infinity4);    // -Infinity

// 2. NaN (Not a Number)
let nan1 = NaN;
let nan2 = 0 / 0;          // Results in NaN
let nan3 = parseInt("hello");  // Results in NaN

console.log(nan1);         // NaN
console.log(nan2);         // NaN
console.log(nan3);         // NaN

// Checking for NaN (use isNaN() or Number.isNaN())
console.log(isNaN(nan1));           // true
console.log(Number.isNaN(nan1));    // true


// ============ BIGINT (Large Integers) ============
console.log("\n======== BIGINT ============");

// BigInt for very large numbers (add 'n' at the end)
let big1 = 9007199254740991n;  // JavaScript's safe integer limit
let big2 = 9007199254740992n;  // Beyond safe limit
let big3 = 123456789012345678901234567890n;
let big4 = BigInt(12345);

console.log(big1);     // 9007199254740991n
console.log(big2);     // 9007199254740992n
console.log(big3);     // 123456789012345678901234567890n
console.log(typeof big1);  // "bigint"

// BigInt operations
let bigResult = big1 + big2;
console.log(bigResult);  // 18014398509481983n

// Cannot mix BigInt with regular numbers
// console.log(big1 + 5);  // ERROR: Cannot mix BigInt and other types
console.log(big1 + 5n);  // Works: 9007199254741000n


// ============ NUMBER PROPERTIES & METHODS ============
console.log("\n======== NUMBER PROPERTIES & METHODS ========");

// Properties
console.log("Max value:", Number.MAX_VALUE);           // 1.7976931348623157e+308
console.log("Min value:", Number.MIN_VALUE);           // 5e-324
console.log("Max safe integer:", Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log("Min safe integer:", Number.MIN_SAFE_INTEGER);  // -9007199254740991
console.log("Positive Infinity:", Number.POSITIVE_INFINITY);
console.log("Negative Infinity:", Number.NEGATIVE_INFINITY);
console.log("NaN:", Number.NaN);

// Methods
let num = 3.14159;
console.log("\nMethods:");
console.log("toFixed(2):", num.toFixed(2));           // "3.14"
console.log("toPrecision(4):", num.toPrecision(4));   // "3.142"
console.log("toExponential(2):", num.toExponential(2)); // "3.14e+0"
console.log("parseInt('42'):", parseInt("42"));        // 42
console.log("parseFloat('3.14'):", parseFloat("3.14")); // 3.14
console.log("isInteger(3):", Number.isInteger(3));    // true
console.log("isInteger(3.5):", Number.isInteger(3.5)); // false
console.log("isSafeInteger(42):", Number.isSafeInteger(42)); // true
console.log("isFinite(42):", Number.isFinite(42));    // true
console.log("isFinite(Infinity):", Number.isFinite(Infinity)); // false


// ============ TYPE CHECKING ============
console.log("\n======== TYPE CHECKING ============");

console.log(typeof 42);              // "number"
console.log(typeof 3.14);            // "number"
console.log(typeof Infinity);        // "number"
console.log(typeof NaN);             // "number" (despite the name!)
console.log(typeof 42n);             // "bigint"

// Check if value is a number
console.log("Is 42 a number?", !isNaN(42));  // true
console.log("Is '42' a number?", !isNaN("42")); // true (converts to 42)
console.log("Is 'hello' a number?", !isNaN("hello")); // false


// ============ PRACTICAL EXAMPLES ============
console.log("\n======== PRACTICAL EXAMPLES ============");

// Money calculation
let price = 29.99;
let quantity = 3;
let total = price * quantity;
console.log("Total price:", total.toFixed(2));  // "89.97"

// Temperature
let tempCelsius = -5.5;
let tempFahrenheit = (tempCelsius * 9/5) + 32;
console.log("Temperature:", tempFahrenheit.toFixed(1));  // "22.1"

// Large numbers
let population = 7800000000;  // 7.8 billion
console.log("Population:", (population / 1e9).toFixed(1), "billion");

// Percentage
let score = 85.5;
let percentage = (score / 100 * 100).toFixed(2);
console.log("Score percentage:", percentage + "%");  // "85.50%"


// ============ SUMMARY ============
console.log("\n======== SUMMARY ========");

/*
NUMBER TYPES IN JAVASCRIPT:

1. INTEGER: 42, -10, 0
2. FLOAT: 3.14, -2.5
3. EXPONENTIAL: 5e2 (500), 1e-3 (0.001)
4. HEXADECIMAL: 0xFF (255)
5. OCTAL: 0o10 (8)
6. BINARY: 0b1010 (10)
7. INFINITY: Infinity, -Infinity
8. NaN: Not a Number
9. BigInt: 9007199254740991n (for very large integers)

All are type "number" except BigInt which is type "bigint".
NaN is considered "number" type but represents an invalid number.
*/
