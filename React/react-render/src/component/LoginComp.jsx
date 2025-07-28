import React from "react";
import userForm from "../Custom Hook/userForm";
const LoginComp = () => {
  const [username, usernameField] = userForm();
  const [password, passwordField] = userForm();
  return (
    <div>
      <div className="username">
        <label htmlFor="">Enter username :</label>
        <input type="text" {...usernameField} />
      </div>
      <div className="password">
        <label htmlFor="">Password :</label>
        <input type="text" {...passwordField} />
      </div>
      <button
        onClick={() => {
          console.log(username);
          console.log(password);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default LoginComp;
