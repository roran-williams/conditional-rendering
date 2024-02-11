import React, { useState } from "react";

export default function Input(props) {
  return <input type={props.text} placeholder={props.placeholder} />;
}

export function Button(props) {
  const [Hover, setHover] = useState(false);
  function over() {
    setHover(true);
  }
  function out() {
    setHover(false);
  }

  return (
    <button
      style={{ backgroundColor: Hover ? "black" : "white" }}
      onMouseOver={over}
      type={props.type}
      onMouseOut={out}
    >
      {!props.isRegistered ? "Register" : "Login"}
    </button>
  );
}
