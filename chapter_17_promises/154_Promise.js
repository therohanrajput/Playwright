let order = new Promise(function(resolve, reject){
    let foodready = true;
    if(foodready){
        resolve("Food is ready");
    }else{
        reject("Food is not ready");
    }
})
console.log(order);