// Question : Research Hoisting and TDZ for the var, let and const with explain.


// Hoisting & TDZ in JavaScript — var, let, const

// What is Hoisting?

// JavaScript engine processes code in two phases:

// 1. Creation Phase — scans declarations (var, let, const, function) and allocates memory

// 2. Execution Phase — runs code line by line

// Hoisting means declarations are moved to the top of their scope before execution.

// var — Hoisted with undefined

// console.log(a);   // undefined (no error)

// var a = 10;

// console.log(a);   // 10

// Behind the scenes:

// var a;            // declaration hoisted, initialized to undefined

// console.log(a);   // undefined

// a = 10;           // assignment stays in place

// console.log(a);   // 10

// - var is function-scoped — hoisted to the top of the enclosing function

// - Accessing before assignment returns undefined (silent bug)


// function getUserStatus() {

//     console.log(status_code);   // undefined

//     var status_code = "Active";

//     console.log(status_code);   // "Active"

// }

// let — Hoisted but in TDZ (Temporal Dead Zone)

// console.log(score);  // ReferenceError: Cannot access 'score' before initialization

// let score = 100;

// - let IS hoisted to the top, BUT it is NOT initialized

// - The gap between the top of the scope and the line where let is declared = TDZ

// - Accessing a let variable in TDZ throws a ReferenceError

// TDZ visualization:

// |------- TDZ --------|------ Initialized ------|

// let score;           let score = 100;

// ↑ scope starts       ↑ declaration line

// console.log(score)   console.log(score)

//   → ReferenceError     → 100 ✓

// From your repo (18_let_hoisting.js:1):

// console.log(score);  // ReferenceError

// let score = 100;

// Block-scoped TDZ (19_let_hoisting_block.js):

// let x = "global";

// if (true) {

//     // TDZ starts here for block-scoped x

//     // console.log(x);  → ReferenceError

//     let x = "block";    // TDZ ends here

//     console.log(x);     // "block"

// }

// console.log(x);         // "global"

// const — Hoisted but in TDZ (stricter)

// console.log(c);   // ReferenceError: Cannot access 'c' before initialization

// const c = 3.14;

// - Same TDZ behavior as let

// - Additionally, const must be initialized at declaration — no deferred assignment

// - Cannot be reassigned after initialization

// From your repo (20_let_const.js:1):

// console.log(x);   // ReferenceError (TDZ)

// const c = "pramod";

// Comparison Table



// Key Takeaways

// 1. All three are hoisted — the difference is initialization behavior

// 2. var gets undefined → silent bugs, no safety net

// 3. let/const enter TDZ → throws ReferenceError → safer, catches mistakes early

// 4. TDZ ends at the declaration line, not the end of the scope

// 5. const has TDZ + mandatory initialization at declaration — strictest of all