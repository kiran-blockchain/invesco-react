let person = {
    namex:"Kiran",
    age:30,
    gender:"M"
};
let address ={
    city:"Hyderabad",
    state:"Telangana",
    country:"IN"
};
let profile ={...address,...person};//spread
let {namex,age,country,...abc} = profile;//destructuring
console.log(namex)
console.log(country);
console.log(abc);
/*==============*/
let scores1 =[10,20,30];
let scores2 =[40,50,60];
let final = [...scores1,...scores2];
console.log(final);
let [a,b]= final;
//map
//const
//arrow
//spread
//destructure
//callbacks
