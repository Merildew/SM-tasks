import React, { useState } from "react";
import { TextInput } from "../components/Form/TextInput";
import { PassInput } from "../components/Form/PassInput";
import { SubmitButton } from "../components/Form/SubmitButton";
import { Form } from "../components/Form/Form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../apiCalls/signUpUser";

export function SignUpPage() {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const result = await signUpUser(user, setError).catch((e) => {
      alert(e.message);
    });
    if (result) {
      alert("Account created!");
      navigate("/login");
    }
  }

  function changeLogin(event) {
    setUser(() => ({
      ...user,
      ...{ login: event.target.value },
    }));
  }

  function changePass(event) {
    setUser(() => ({
      ...user,
      ...{ pass: event.target.value },
    }));
  }

  function changeFirstName(event) {
    setUser(() => ({
      ...user,
      ...{ firstName: event.target.value },
    }));
  }

  function changeLastName(event) {
    setUser(() => ({
      ...user,
      ...{ lastName: event.target.value },
    }));
  }

  function changeAge(event) {
    setUser(() => ({
      ...user,
      ...{ age: event.target.value },
    }));
  }

  function changeCheckedPass(event) {
    setUser(() => ({
      ...user,
      ...{ checkedPass: event.target.value },
    }));
  }

  return (
    <Form
      onSubmitForm={handleSubmit}
      title="Sign Up"
      render={
        <>
          <label className="form-label">
            {error !== undefined && (
              <div className="errorMessage">{error.emptyFields}</div>
            )}
            Login
            <TextInput
              onChangeInput={changeLogin}
              name="login"
              value={user.login}
            />
            {error !== undefined && (
              <div className="errorMessage">{error.login}</div>
            )}
          </label>
          <label className="form-label">
            First name
            <TextInput
              onChangeInput={changeFirstName}
              name="firstName"
              value={user.firstName}
            />
            {error !== undefined && (
              <div className="errorMessage">{error.firstName}</div>
            )}
          </label>
          <label className="form-label">
            Last name
            <TextInput
              onChangeInput={changeLastName}
              name="lastName"
              value={user.lastName}
            />
            {error !== undefined && (
              <div className="errorMessage">{error.lastName}</div>
            )}
          </label>
          <label className="form-label">
            Age
            <TextInput
              onChangeInput={changeAge}
              name="age"
              value={user.login}
            />
            {error !== undefined && (
              <div className="errorMessage">{error.age}</div>
            )}
          </label>
          <label className="form-label">
            Password
            <PassInput
              onChangeInput={changePass}
              name="pass"
              value={user.pass}
            />
            {error !== undefined && (
              <div className="errorMessage">{error.pass}</div>
            )}
          </label>
          <label className="form-label">
            Repeat password
            <PassInput
              onChangeInput={changeCheckedPass}
              name="pass"
              value={user.checkedPass}
            />
            {error !== undefined && (
              <div className="errorMessage">{error.checkedPass}</div>
            )}
          </label>
          <SubmitButton value="Sign Up" />
          <div className="form-link-wrapper">
            <NavLink className="form-link" to="/login">
              Already have an account?
            </NavLink>
          </div>
        </>
      }
    ></Form>
  );
}
