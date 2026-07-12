function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened");
    })
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Navigated to login page");
    })
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    })
}

function login() {
    return new Promise(function (resolve) {
        resolve("Login successfully");
    });
}

openBrowser().then(function (data) {
    console.log(data);
    return goToLogin();
}).then(function (data) {
    console.log(data);
    return enterCredentials();
}).then(function (data) {
    console.log(data);
    return login();
}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.error(error);
}).finally(function () {
    console.log("Test completed");
});