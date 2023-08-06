
import { useState } from "react";

const FunctionalSample =()=>{

    const [counter,setCounter] = useState(0);

    const increasingcounter = ()=>{
        setCounter(counter+1)
    }

    const decreasingcounter = ()=>{
        setCounter(counter-1)
    }

    const resetcounter = ()=>{
        setCounter(0)
    }

    return(
        <div>
      <h1>Functional Counter</h1>
      <p>{counter}</p>
        <button type="button" onClick={decreasingcounter}>decrease</button>
        <button type="button" onClick={resetcounter}>reset</button>
        <button type="button" onClick={increasingcounter}>increase</button>
      </div>
    )
}

export default FunctionalSample