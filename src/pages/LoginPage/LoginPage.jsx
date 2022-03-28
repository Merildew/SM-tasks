import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { postFetch } from "../../test/postFetch";

export function LoginPage() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(postFetch(login, pass, navigate));
  }

  return (
    <div className="login-section">
      <div className="login-form-wrapper">
        <form className="login-form" onSubmit={(event) => handleSubmit(event)}>
          <h1 className="form-title">Sign in</h1>
          <label className="form-label">
            Login
            <input
              type="text"
              name="login"
              className="form-input"
              value={login}
              onChange={(event) => {
                setLogin(event.target.value);
              }}
            />
          </label>
          <label className="form-label">
            Password
            <input
              type="password"
              name="password"
              className="form-input"
              value={pass}
              onChange={(event) => {
                setPass(event.target.value);
              }}
            />
          </label>
          <input
            type="submit"
            value="Sign In"
            className="form-submit-button"
          ></input>
        </form>
      </div>
    </div>
  );
}
