// JavaScript identifier naming examples

// camelCase: common for variables and functions
var userName = "Alice";
function calculateTotalPrice() {
  return 0;
}

// PascalCase: common for constructor functions and classes
class UserAccount {
  constructor(name) {
    this.name = name;
  }
}

// snake_case: allowed, sometimes used for constants or data keys
var user_age = 30;

// UPPER_SNAKE_CASE: common for constants
const MAX_CONNECTIONS = 10;

// kebab-case is not valid for JavaScript identifiers
// var user-name = "Bob"; // invalid

console.log(userName, user_age, MAX_CONNECTIONS);
