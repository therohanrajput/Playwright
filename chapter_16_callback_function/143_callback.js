function print(){
    console.log("Hello from print function");
}

// print();

function placeOrder(ClipboardItem, rohanCallback){
    console.log("Placing order for ClipboardItem");
    rohanCallback();
}

function rohan(){
    console.log("Order placed successfully");
}
// first way to call the function
// placeOrder("ClipboardItem", rohan);

// second way to call the function
// placeOrder("ClipboardItem", function(){
//     console.log("Order placed successfully via function without name");
// });

// third way to call the function == Arrow function
placeOrder("ClipboardItem", () => {
    console.log("Arrow function: Order placed successfully also function without name");
});

