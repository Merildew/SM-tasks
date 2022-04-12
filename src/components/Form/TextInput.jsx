import React from "react";
import PropTypes from "prop-types";

export function TextInput(props) {
  return (
    <input
      type="text"
      name={props.name}
      className="form-input"
      onChange={props.onChangeInput}
    />
  );
}

TextInput.propTypes = {
  name: PropTypes.string,
  onChangeInput: PropTypes.func,
};
