import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "./TextInput";

export const AddEmployee = React.forwardRef(
  ({ onChange, onBlur, name }, ref) => {
    return (
      <div className="employee-wrapper">
        <label className="form-label">
          Full Name
          <TextInput
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        </label>
        <label className="form-label">
          Position
          <select name={name} className="form-select-input">
            <option value="PM"> Project Manager</option>
            <option value="teamLead">Team Leader</option>
            <option value="CTO">Chief Technology Officer</option>
            <option value="developer">Software Developer</option>
            <option value="QA">QA</option>
          </select>
        </label>
      </div>
    );
  }
);

AddEmployee.displayName = "AddEmployee";

AddEmployee.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  onChangeInput: PropTypes.func,
  innerRef: PropTypes.func,
};
