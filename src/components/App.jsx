import React from "react";
import Form from "./Form";
import Count from "./counter";
import Time from "./Time";
import Clock from "./clock";
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Clock />
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
