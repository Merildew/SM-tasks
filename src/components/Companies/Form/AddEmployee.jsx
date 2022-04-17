import React from "react";
import PropTypes from "prop-types";
import { CompanyTextInput } from "./CompanyTextInput";

export const AddEmployee = React.forwardRef((props, ref) => {
  return (
    <div className="employee-wrapper">
      <label className="form-label">
        Full Name
        <CompanyTextInput
          name={props.registerName.name}
          onChange={props.registerName.onChange}
          onBlur={props.registerName.onBlur}
          ref={props.registerName.ref}
        />
        {props.errors && (
          <div className="errorMessage">
            {props.errors.person[props.number]?.name?.message}
          </div>
        )}
      </label>
      <label className="form-label">
        Position
        <select
          name={props.registerPosition.name}
          onChange={props.registerPosition.onChange}
          onBlur={props.registerPosition.onBlur}
          ref={ref}
          className="form-select-input"
        >
          <option value="Project Manager"> Project Manager</option>
          <option value="Team Leader">Team Leader</option>
          <option value="Chief Technology Officer">
            Chief Technology Officer
          </option>
          <option value="Software Developer">Software Developer</option>
          <option value="QA">QA</option>
        </select>
      </label>
    </div>
  );
});

AddEmployee.displayName = "AddEmployee";

AddEmployee.propTypes = {
  errors: PropTypes.object,
  number: PropTypes.number,
  registerName: PropTypes.object,
  registerPosition: PropTypes.object,
};
