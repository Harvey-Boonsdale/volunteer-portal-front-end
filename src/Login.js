import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import Header from "./Header";

function Login(props) {
  const [disabled, changeDisabled] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    changeDisabled(true);
    try {
      const res = await props.client.login(
        e.target.username.value,
        e.target.password.value
      );
      props.loginHandler(res.data.token);
    } catch (error) {
      alert("Incorrect login: please try again");
    }
    changeDisabled(false);
  };

  return (
    <div className="landingPage">
      <Header />
      <br />
      <h1>Login</h1>
      <br />
      <form onSubmit={(e) => submitHandler(e)}>
        Username
        <br />
        <input type="text" name="username" disabled={disabled} />
        <br />
        Password
        <br />
        <input type="password" name="password" disabled={disabled} />
        <br />
        <br />
        <button
          type="submit"
          disabled={disabled}
          className="link btn btn-primary sibiButton"
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default Login;
