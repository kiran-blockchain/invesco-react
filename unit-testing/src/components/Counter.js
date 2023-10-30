import { useState } from "react";

const Counter =()=>{
    const [count,setCount] = useState(100);
    const handleClick =(e)=>{
        setCount(count+1);
    }
    return(
        <div>
            <h1>Count {count}</h1>
            <button data-testid="btnInc" onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Counter;