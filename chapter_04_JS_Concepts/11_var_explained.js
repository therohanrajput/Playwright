var a= 10; //Global Scope

// console.log(a);

function printHello(){
    console.log("Hello");
    // var a= 20; //Local Scope
    console.log(a);
    if(true){
        var a= 30; //Function Scope
        console.log(a);
    }
}

printHello();
