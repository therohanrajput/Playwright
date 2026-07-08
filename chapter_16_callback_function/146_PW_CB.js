function test(testName, callback){
    console.log("Test name is: " + testName);
    callback();
}

// import {test} from '@playwright/test';

test("Verify Login page is working", ()=>{
    //write your playwright code here
    console.log("playwright code will come here");
});