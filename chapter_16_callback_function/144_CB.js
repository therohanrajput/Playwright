function cafe(name, callback){
    console.log("Welcome to " + name);
    callback();
}

// import.{cafe} from '@playwright/test';
cafe("Momo",()=>{
    console.log("Welcome to cafe");
})
