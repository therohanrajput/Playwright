let apiCall = new Promise(function(resolve, reject){
    resolve({
        status: 200, body: 'User Data'
    })
});

apiCall.then(function(response){
    console.log(response);
    console.log("API Response: " + response.status + " " + response.body);
})

// .then() is used to handle the resolved value of the promise. It takes a callback function as an argument, which will be executed when the promise is resolved. In this case, the callback function logs the response object and a formatted string containing the status and body of the response.
// .then() runs only when the promise is resolved.