import {renderHook,act} from '@testing-library/react'
import { useCounter } from "./useCounter";
describe('testing the customHook',()=>{
    it("should display the default values",()=>{
        const {result}  = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    });
    it("should display the default values", ()=>{
        const {result}  = renderHook(useCounter)
       act(()=>result.current.increment())
       expect(result.current.count).toBe(1)
    });
   
})