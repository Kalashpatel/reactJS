import React from "react";

function Child() {
  return <p style={{ fontSize: "14px" }}>I am a Child Component</p>;
}
export default function ComponentsModule() {
  return (
    <div className="section">
      <div className="title">Component Rendering</div>
      <Child />
    </div>
  );
}
