import React from "react";
import PropTypes from "prop-types";

export function SubmitButton(props) {
  return (
    <input
      type="submit"
      value={props.value}
      className="form-submit-button"
    ></input>
  );
}

SubmitButton.propTypes = {
  value: PropTypes.string,
};
