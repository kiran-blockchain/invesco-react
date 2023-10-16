let person = {
     namex:"Kiran",
     age:30,
     gender:"M"
};
//Destructuring.

var {namex,age} = person;
console.log(namex);
console.log(age);
//console.log(gender);

let scores = [60,38,90,40];
let [x,y] = scores;
console.log(x, y)