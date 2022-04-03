import React from "react";
import PropTypes from "prop-types";

export function PassInput(props) {
  return (
    <input
      type="password"
      name={props.name}
      className="form-input"
      value={props.pass}
      onChange={props.onChangeInput}
    />
  );
}

PassInput.propTypes = {
  name: PropTypes.string,
  pass: PropTypes.string,
  onChangeInput: PropTypes.func,
};
