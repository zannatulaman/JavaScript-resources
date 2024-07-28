function doSomething(callback){
    console.log("Do something");
    callback();

}

function doSomethingElse() {
    console.log("Do somethingelse ...");
}

doSomething(doSomethingElse);