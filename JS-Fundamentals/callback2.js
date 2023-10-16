
function first(){
    console.log("I am first");
}
function second(){
    console.log("I am second");
}

setTimeout(first,0);//async
setTimeout(second,0);//async
console.log("I am main");//sync