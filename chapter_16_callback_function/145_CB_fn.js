function cafe(item, callWhenTableIsReady){
    console.log('Finding...1');
    console.log('Finding...2');
    console.log('Finding...3');
    console.log(item);
    callWhenTableIsReady();
}

function callWhenTableIsReady(){
    console.log("calling 8898997888");
}
// 1st
cafe("Momo", callWhenTableIsReady);
// 2nd 
cafe("Burger", function(){
    console.log("calling 8898997889");
});
// 3rd
cafe("Pizza", () => {
    console.log("calling 8898997890");
});