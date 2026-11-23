import { useState } from "react"


function Home(){
    const [count,setCount]=useState(0)

    function countIncrement(){
        setCount(count+1)
    }

    function countDecrement(){
        setCount(count-1)
    }

    return(
        <>
            <h1>Welcome to React Journey</h1>
            <p>Count : {count}</p>

            <div>
                <button onClick={countIncrement}>Increment</button>
                <button onClick={countDecrement}>Decrement</button>
            </div>
        </>
    )
}

export default Home;