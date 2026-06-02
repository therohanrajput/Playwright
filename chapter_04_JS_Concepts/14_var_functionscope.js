var a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log("inside function:", a);
    if (true) {
        var a = 40;
        console.log("inside if statement:", a); // 40
    }
    console.log("F after true->", a); // 40 because var is function scoped, it does not have block scope, it will override the value of a in the function scope
}
printHello();
console.log("G ->", a);

// ====================================================================
// DIFFERENCES BETWEEN VAR, LET, AND CONST
// ====================================================================

console.log("\n========== DIFFERENCES BETWEEN VAR, LET, AND CONST ==========\n");

// 1. SCOPE
console.log("1. SCOPE DIFFERENCES:");
console.log("   - var: Function Scoped (can access anywhere in function)");
console.log("   - let: Block Scoped (limited to { } block)");
console.log("   - const: Block Scoped (limited to { } block)\n");

function scopeDemo() {
    if (true) {
        var varVariable = "var";
        let letVariable = "let";
        const constVariable = "const";
    }
    console.log("   var:", varVariable);      // Works - var is function scoped
    // console.log("let:", letVariable);      // Error - let is block scoped
    // console.log("const:", constVariable);  // Error - const is block scoped
}
scopeDemo();

// 2. RE-DECLARATION
console.log("\n2. RE-DECLARATION:");
console.log("   - var: Can be re-declared");
console.log("   - let: Cannot be re-declared");
console.log("   - const: Cannot be re-declared\n");

var redeclareVar = 1;
var redeclareVar = 2;  // Allowed
console.log("   var redeclared:", redeclareVar); // 2

// let redeclareLet = 1;
// let redeclareLet = 2;  // Error - Identifier 'redeclareLet' has already been declared

// const redeclareConst = 1;
// const redeclareConst = 2;  // Error - Identifier 'redeclareConst' has already been declared

// 3. RE-ASSIGNMENT
console.log("\n3. RE-ASSIGNMENT:");
console.log("   - var: Can be re-assigned");
console.log("   - let: Can be re-assigned");
console.log("   - const: Cannot be re-assigned\n");

var reassignVar = 10;
reassignVar = 20;
console.log("   var reassigned:", reassignVar); // 20

let reassignLet = 10;
reassignLet = 20;
console.log("   let reassigned:", reassignLet); // 20

const reassignConst = 10;
// reassignConst = 20;  // Error - Assignment to constant variable

// 4. HOISTING
console.log("\n4. HOISTING:");
console.log("   - var: Hoisted and initialized with undefined");
console.log("   - let: Hoisted but not initialized (Temporal Dead Zone)");
console.log("   - const: Hoisted but not initialized (Temporal Dead Zone)\n");

console.log("   var hoisted:", hoistedVar); // undefined (no error)
var hoistedVar = "var hoisted";

// console.log("   let hoisted:", hoistedLet); // Error - hoistedLet is not defined (TDZ)
let hoistedLet = "let hoisted";

// 5. INITIALIZATION REQUIREMENT
console.log("\n5. INITIALIZATION:");
console.log("   - var: Optional initialization");
console.log("   - let: Optional initialization");
console.log("   - const: Must be initialized at declaration\n");

var optionalVar;
console.log("   var without init:", optionalVar); // undefined

let optionalLet;
console.log("   let without init:", optionalLet); // undefined

// const optionalConst;  // Error - Missing initializer in const declaration

// 6. GLOBAL OBJECT PROPERTY
console.log("\n6. GLOBAL OBJECT PROPERTY:");
console.log("   - var: Becomes property of global object (window/global)");
console.log("   - let: Does not become global property");
console.log("   - const: Does not become global property\n");

var globalVar = "I am var";
let globalLet = "I am let";
const globalConst = "I am const";

console.log("   var in global scope (window.globalVar):", typeof globalVar !== 'undefined');

// SUMMARY TABLE
console.log("\n========== SUMMARY TABLE ==========\n");
console.log("Feature           | var  | let  | const");
console.log("------------------------------------------");
console.log("Function Scoped   | Yes  | No   | No");
console.log("Block Scoped      | No   | Yes  | Yes");
console.log("Can Re-declare    | Yes  | No   | No");
console.log("Can Re-assign     | Yes  | Yes  | No");
console.log("Hoisted           | Yes* | Yes* | Yes*");
console.log("(*Hoisted but different handling)");
console.log("Must Initialize   | No   | No   | Yes");
console.log("Global Property   | Yes  | No   | No");


