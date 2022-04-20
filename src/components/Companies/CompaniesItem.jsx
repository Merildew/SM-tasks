import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Form/Button";
import { NavLink } from "react-router-dom";
import "./styles.css";

export function CompaniesItem(props) {
  return (
    <div className="company-block">
      <div className="company-info-wrapper">
        <div className="company-text-block">
          <h3>{props.title}</h3>
          <p className="company-text">Company location: {props.location}</p>
          {props.number && (
            <p className="company-text">Phone number: {props.number}</p>
          )}
          {props.address && (
            <p className="company-text">Address: {props.address}</p>
          )}
        </div>
        <NavLink to={`/editpage/${props.id}`}>
          <Button value="Edit" />
        </NavLink>
      </div>
      {props.person && (
        <>
          <div className="employees-container">
            {props.person.map((item) => {
              return (
                <div className="employee-info" key={item.name}>
                  <p className="company-text">Name: {item.name}</p>
                  <p className="company-text">Position: {item.position}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

CompaniesItem.propTypes = {
  id: PropTypes.number,
  location: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.string,
  address: PropTypes.string,
  person: PropTypes.array,
};
