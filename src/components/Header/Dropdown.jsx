import React from "react";
import PropTypes from "prop-types";

export function Dropdown(props) {
  const dropdownLinks = props.items.map((item, index) => {
    if (item === "DEVELOPMENT TOOLS") {
      return (
        <li key={index} className="dropdown-item small-font">
          {item}
        </li>
      );
    }
    if (item === "View all projects") {
      return (
        <li key={index} className={"dropdown-item"}>
          <a href="" className="dropdown-links a-wrapper">
            {item}
          </a>
        </li>
      );
    }

    return (
      <li key={index} className={"dropdown-item"}>
        <a href="" className="dropdown-links">
          {item}
        </a>
      </li>
    );
  });

  return (
    <ul className={window.innerWidth > 900 ? "dropdown" : "dropdown-mobile"}>
      {dropdownLinks}
    </ul>
  );
}

Dropdown.propTypes = {
  items: PropTypes.array,
};
