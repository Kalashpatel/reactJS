import React, { useEffect, useState } from "react";


function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(id);
    }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{padding:"50px", borderRadius : "50%", boxShadow : "0px 0px 5px blue"}}>Counter: {count}</h2>

    <button
        onClick={() => setCount(count - 1)}
        style={{ padding: "10px 20px" , marginRight: "20px", boxShadow : "0px 0px 5px blue"}}
      >
        Decrease
    </button>

    <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px 20px", boxShadow : "0px 0px 5px blue" }}
    >
        Increase
    </button>

      
    </div>
  );
}

export default Counter;