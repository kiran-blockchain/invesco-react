
// a is a function
function a(){
    return 100;
}

function b(x){
    var z = x();
    return z+20;//it should throw error.
}
//a is passed as a parameter to b
var c  = b(a);

console.log(c);