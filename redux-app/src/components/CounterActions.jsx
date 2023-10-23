import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../store/CounterReducer";

const CounterActions = () => {

    //to trigger the actions we need to dispatch the actions
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <button onClick={e=>{
                    dispatch(increment())
                }}>Increment</button>
            </div>
            <div>
                <button onClick={e=>{
                    dispatch(decrement())
                }}>Decrement</button>
            </div>
            <div>
                <button onClick={e=>{
                    dispatch(reset());
                }}>Reset</button>
            </div>
        </div>
    )
}
export default CounterActions;