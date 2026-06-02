//Code that need to be optimized or changed can be hot reloaded without restarting the server. This is a great feature for development as it allows you to see changes in real-time without having to refresh the page or restart the server.

//To enable hot code reloading, you can use a tool like Webpack or Parcel. These tools will automatically detect changes in your code and reload the relevant modules without requiring a full page refresh.

//For example, if you are using Webpack, you can set up hot module replacement (HMR) by adding the following code to your entry point:

// console.log("Hello, World!");

function add(a, b) {
    return a + b;
}

// console.log(add(2, 3));

//With HMR enabled, you can make changes to the add function and see the updated result without refreshing the page. This can greatly improve your development workflow and allow you to iterate faster on your code.   

let result;
for(let i=0; i<100; i++){
    result = add(i, i+1);
}
console.log("After 100 calls: ",result);