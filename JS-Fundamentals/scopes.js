var x = 10;

function a(){
    
     x=30;
   
    if(true){
        let x =40;
         console.log("Inside if ",x);
    }
    console.log("inside function",x);
}
a();
console.log("outside:",x);//
