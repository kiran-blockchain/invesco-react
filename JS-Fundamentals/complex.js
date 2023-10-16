'use strict';
let updateFunctions = [];
var x=10;
for (let i = 0; i < 2; i++) {
    updateFunctions.push(function () {
        //console.log(i)
        return i+x;
    })
}
updateFunctions.forEach(function(item,index){
    console.log(item())
});
// updateFunctions[1]()
//console.log(result);