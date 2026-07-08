function greetTester(name, callback) {
    console.log("Hello " + name);
    callback();
}

greetTester("Rohan", function () {
    console.log("Welcome to the testing world");
});

greetTester("Rohan", () => {
    console.log("Welcome to the testing world via arrow function");
});