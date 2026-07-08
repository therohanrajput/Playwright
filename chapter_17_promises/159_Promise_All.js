let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCache = Promise.resolve("Cache Ok");

Promise.all([checkAuth, checkDB, checkCache]).then(function(response){
    console.log(response);
}).catch(function(error){
    console.error(error);
});

Promise.all([
    Promise.resolve("Auth Ok"),
    Promise.reject("DB Error"),
    Promise.resolve("Cache Ok")
]).then(function(response){
    console.log(response);
}).catch(function(error){
    console.error(error);
});

Promise.allSettled([
    Promise.resolve("Auth Ok"),
    Promise.reject("DB Error"),
    Promise.resolve("Cache Ok")
]).then(function(response){
    console.log(response);
    response.forEach(function(result, i){
        console.log("Test"+ (i+1) + ": ", + result.status, "-", result.value || result.reason )});
}).catch(function(error){
    console.error(error);
});