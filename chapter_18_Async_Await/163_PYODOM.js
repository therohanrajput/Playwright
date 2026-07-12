function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!");
    });
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

async function runE2E() {
    let msg1 = await openBrowser();
    let msg2 = await goToLogin();
    let msg3 = await enterCredentials();
    let msg4 = await clickLogin();

    console.log(msg1 + "\n" + msg2 + "\n" + msg3 + "\n" + msg4);
}

runE2E();