import React from "react";
import PropTypes from "prop-types";

export const CompanyTextInput = React.forwardRef(
  ({ onChange, onBlur, name, value }, ref) => {
    return (
      <input
        type="text"
        name={name}
        className="form-input"
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        value={value}
      />
    );
  }
);

CompanyTextInput.displayName = "CompanyTextInput";

CompanyTextInput.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  onChangeInput: PropTypes.func,
  innerRef: PropTypes.func,
  value: PropTypes.string,
};
