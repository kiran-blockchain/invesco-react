import { useState } from "react"

const Counter =(props)=>{
    const [count,setCount]=useState(100 );
    const increment =(e)=>{
        console.log(e);
        setCount(count+1);
    };   
    return(
        <div>
            <h1>Count={count}</h1>
            <button name="btnIncrement" 
            className="btn btn-primary"
            onClick={increment}>Increment</button>
        </div>
    )
}
export default Counter;