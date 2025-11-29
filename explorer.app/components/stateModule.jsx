import React from "react";

import { useState } from "react";
export default function StateModule() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  return (
    <div className="section">
      <div className="title">State Handling</div>

      <div>
        <p>Counter: {count}</p>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>

      <div style={{ marginTop: "14px" }}>
        <p>Toggle: {toggle ? "ON" : "OFF"}</p>
        <button className="btn" onClick={() => setToggle(!toggle)}>
          Toggle
        </button>
      </div>
    </div>
  );
}
