import { useState } from "react"
import Increment from "./Increment";

const Counter = (props) => {
    const [count, setCount] = useState(100);
   //callback
    const inc = () => { 
        setCount(count + 1);
    };
    return (
        <div>
            <h1>Count={count}</h1>
            <Increment 
            handleClick={inc}/>
                 
             </div>
    )
}


export default Counter;