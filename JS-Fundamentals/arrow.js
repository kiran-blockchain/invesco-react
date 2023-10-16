let x = (a,b)=>a+b;//short hand
let y = (a,b)=>{
    return a+b;
};

let scores =[10,30,50,70,90];
scores.forEach((item,index)=>{
    console.log(index+"-"+item);
});
console.log(scores.filter(x=>x>30))
console.log(scores.filter(x=>{
    return x>30
}));
const a = ()=>{

}//

console.log(x("kiran","PVS"));
console.log(y("Alex","R"));
console.log(x(10,20));
console.log(y(10,40));