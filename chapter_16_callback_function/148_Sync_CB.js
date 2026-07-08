let testResults = ["Passed", "Failed", "Skipped"];

testResults.forEach(function(result,index){
    console.log(`Test ${index+1}: ${result}`);
});