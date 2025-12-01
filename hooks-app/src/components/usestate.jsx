import React, { useEffect, useState } from "react";

function Counter(){

    const [count,setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    },[])

    return(
        <>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );

}

export default Counter;