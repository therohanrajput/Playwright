let a= 10; //Block Scope
// console.log(a);

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

// console.log(executionTime); // ReferenceError: executionTime is not defined

let name = "pending";
name = "done";
console.log(name); // Output: done

// let retryCount = 5; // This will cause an error because 'retryCount' has already been declared with 'let'

// for(let a=0; a<5; a++){
//     console.log(a);
//     print(10);
// }

// function print(a){
//     console.log("Hello");
// }