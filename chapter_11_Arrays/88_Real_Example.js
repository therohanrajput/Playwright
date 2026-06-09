let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length); // 5
console.log(browser);

browser.pop();  //it wil remove the last element from the array and return it
console.log(browser);
console.log(browser.shift());  //it will remove the first element from the array and return it

let removed = browser.shift();  //it will remove the first element from the array and return it
console.log(browser);
console.log("removed: " + removed);


for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}