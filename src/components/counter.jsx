import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubtract() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={handleSubtract}> - </button>
      <button onClick={handleAdd}> + </button>
    </div>
  );
}
