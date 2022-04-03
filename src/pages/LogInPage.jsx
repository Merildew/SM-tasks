import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/Form/TextInput";
import { PassInput } from "../components/Form/PassInput";
import { SubmitButton } from "../components/Form/SubmitButton";
import { NavLink } from "react-router-dom";
import { Form } from "../components/Form/Form";
import { loginUser } from "../apiCalls/loginUser";

export function LogInPage() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(login, pass, setError, navigate)).catch((e) => {
      console.log(e.message);
    });
  }

  function changeLogin(event) {
    setLogin(event.target.value);
  }

  function changePass(event) {
    setPass(event.target.value);
  }

  return (
    <Form
      onSubmitForm={handleSubmit}
      title="Log In"
      render={
        <>
          <label className="form-label">
            {error !== undefined && <div className="errorMessage">{error}</div>}
            Login
            <TextInput onChangeInput={changeLogin} name="login" value={login} />
          </label>
          <label className="form-label">
            Password
            <PassInput onChangeInput={changePass} name="pass" value={pass} />
          </label>
          <SubmitButton value="Log In" />
          <div className="form-link-wrapper">
            <NavLink className="form-link" to="/signup">
              Sign up for Spring
            </NavLink>
          </div>
        </>
      }
    ></Form>
  );
}
