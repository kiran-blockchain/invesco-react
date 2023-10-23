import { useSelector } from "react-redux";

const Display =()=>{
    //fetch the data from the store with the help of useSelector
    const counter = useSelector(x=>x.counter);
    return(
        <h1>Count :{counter.count}</h1>
    )
}
export default Display;