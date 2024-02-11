import React, { useState } from "react";

export default function Time() {
  setInterval(getTime, 1000);
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
    </div>
  );
}
