import React, { useState } from "react"


export const Child1 =React.memo((props)=>{
    console.log(`I am c1 ${props.name1}`)
    return<h1>C1 {props.name1}</h1>
});
export const Child2 =React.memo((props)=>{
    console.log(`I am c2 ${props.name2}`)
    return<h1>C2 {props.name2}</h1>
});

export const Parent =()=>{
    const[count,setCount] = useState(0);

    const[name1,setname1] = useState("Kiran");

    const[name2,setname2] = useState("PVS");
    return(
        <div>
            <h1>Count: {count}</h1>
            
            <Child1 name1={name1}/>

            <Child2 name2={name2}/>

            <button className="btn btn-primary"
                onClick={e=>{
                    setCount(count+1)
                }}
            >Increment</button>
             <button className="btn btn-primary"
                onClick={e=>{
                    setname1("ABCD")
                }}
            >Name1</button>
             <button className="btn btn-primary"
                onClick={e=>{
                    setname2("XYZ")
                }}
            >Name2</button>
        </div>
    )
}