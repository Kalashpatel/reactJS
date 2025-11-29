import React from "react";
import { useState } from "react";

function FormModule() {
const [value, setValue] = useState("");
const [submitted, setSubmitted] = useState("");


const handleSubmit = (e) => {
e.preventDefault();
setSubmitted(value);
setValue("");
};


return (
<div className="section">
<div className="title">Form Handling</div>


<form onSubmit={handleSubmit}>
<input className="input" value={value} placeholder="Enter text" onChange={(e) => setValue(e.target.value)} />
<button className="btn" style={{ marginLeft: "8px" }}>Submit</button>
</form>


{submitted && <p style={{ marginTop: "10px", fontSize: "14px" }}>Submitted: {submitted}</p>}
</div>
);
}

export default FormModule;