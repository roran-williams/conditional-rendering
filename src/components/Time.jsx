import React, { useState } from "react";

export default function Time() {
  // Correct the way to get the current time
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  function getTime() {
    // Update the state with the current time
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="counter">
      <h1>{time}</h1>
      <button onClick={getTime}>Update Time</button>
    </div>
  );
}
