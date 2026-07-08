let testRun = new Promise(function(resolve, reject){
    let apiCall = false;
    if(apiCall){
        resolve({"status": "200 success"});
    } else {
        reject("Assertion failed");
    }
});

testRun.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("I will be excuted no matter what");
});