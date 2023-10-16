var scores = [10,30,40,"x",50,20,];// array.

//for Each loop using callback.

scores.forEach(function(item,index){
  console.log(index+"=>"+item);
});

var filters = scores.filter(function(item,index){
    return item>20;
});
var sorted = scores.sort();
console.log(sorted.reverse());
var alpha = ["x","a","b"].sort();
console.log(alpha)

var mapper = scores.map(function(item,index){
    return {marks:item}
})
console.log(mapper)