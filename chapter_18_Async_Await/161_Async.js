async function testApi() {
    try {
        let result = await Promise.reject("503 reject");
    }
    catch (err) {
        console.log('Error', err);
    }
    finally {
        console.log("Clean api!");
    }
}

testApi();