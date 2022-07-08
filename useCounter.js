import { useState } from "react"

export const useCounter = (initialValue=10) =>{

    const [counter, setCounter] = useState(initialValue);

    const increment = (value =1) =>{
        setCounter((actualValue) => actualValue+value)
    }

    const reset = () =>{
        setCounter(initialValue);
    }

    const decrement = (value=1) =>{
        //Not to be less than 0
        if(counter===0) return;
        
        setCounter((actualValue) => actualValue-value);
    }

    return{
        counter,
        increment,
        reset,
        decrement
    }
}