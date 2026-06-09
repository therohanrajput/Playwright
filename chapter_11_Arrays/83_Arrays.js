let fruits = []; //Empty array
let fruits_fresh = ["Apple", "Banana", "Cherry"]; //Array with string elements
let mixedArray = [42, "Hello", true, null, undefined, { name: "Alice" }, [1, 2, 3]]; //Array with mixed data types

console.log("Fruits:", fruits);
console.log("Fresh Fruits:", fruits_fresh);
console.log("Mixed Array:", mixedArray);
console.log("Mixed Array:", mixedArray[5].name); // Accessing object property
console.log("Mixed Array:", mixedArray[6][1]); // Accessing nested array element