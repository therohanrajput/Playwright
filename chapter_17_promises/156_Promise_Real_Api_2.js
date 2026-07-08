let apiCall = new Promise(function(resolve, reject){
    reject("500 error");
});

apiCall.then(function(data){
    console.log("success or resolves :" + data);
}).catch(function(error){
    console.error(error);
});