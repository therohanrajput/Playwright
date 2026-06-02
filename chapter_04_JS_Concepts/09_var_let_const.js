var v = 30;
let l = 40;
const c = 50;

// console.log(v);
// console.log(l);
// console.log(c);

// let l = 100; // This will cause an error because 'l' is already declared with 'let'
var v = 200; // This is allowed because 'var' allows redeclaration
// c = 300; // This will cause an error because 'c' is a constant and cannot be reassigned

// console.log(d);
var d=30;
// console.log(d);

var testcase = ["login", "signup", "logout"];
for (var i=0; i<testcase.length; i++){
    console.log("Running Test CAse: ", testcase[i]);
}

function say(){
    console.log('hi');
}
say();
