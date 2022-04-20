import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export function Form(props) {
  return (
    <div className="user-form-section">
      <div className="user-form-wrapper">
        <form
          className="user-form"
          onSubmit={(event) => props.onSubmitForm(event)}
        >
          <h1 className="form-title">{props.title}</h1>
          {props.render}
          {props.children}
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  onSubmitForm: PropTypes.func,
  title: PropTypes.string,
  render: PropTypes.object,
  children: PropTypes.array,
};
