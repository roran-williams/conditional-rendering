import React from "react";
import Input from "./input";
import { Button } from "./input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      {!props.isRegistered && (
        <input type="password" placeholder="confirm password" />
      )}
      <Button
        type="submit"
        isRegistered={props.isRegistered}
      />
    </form>
  );
}

export default Form;
