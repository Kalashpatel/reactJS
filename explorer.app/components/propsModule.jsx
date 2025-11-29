import React from "react";

function Greeting({ user }) {
  return <p style={{ fontSize: "14px" }}>Hello, {user}</p>;
}
export default function PropsModule() {
  return (
    <div className="section">
      <div className="title">Props Example</div>
      <Greeting user="Kalash" />
    </div>
  );
}
