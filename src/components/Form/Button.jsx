import React from "react";
import PropTypes from "prop-types";

export function Button(props) {
  return (
    <input
      type="button"
      value={props.value}
      className="form-button"
      onClick={props.onClickButton}
    ></input>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  onClickButton: PropTypes.func,
};
