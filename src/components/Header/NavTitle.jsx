import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "./dropdown";

export function NavTitle(props) {
  const [focus, setFocus] = useState(false);
  const [click, setClick] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    if (dimensions.width > 900) setClick(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const onMouseOver = () => {
    if (dimensions.width > 900) setFocus(true);
  };
  const onMouseOut = () => {
    setFocus(false);
  };
  const onClick = () => {
    if (dimensions.width < 900) setClick(!click);
  };

  if (props.items !== null) {
    return (
      <li
        className="nav-item"
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOut}
        onClick={onClick}
      >
        <div className="title-container">
          <span className="nav-title">{props.title}</span>
          <div className="nav-arrow"></div>
        </div>
        {focus && <Dropdown items={props.items} />}
        {click && <Dropdown items={props.items} />}
      </li>
    );
  } else
    return (
      <li className="nav-item">
        <div className="title-container">
          <a className="nav-title-link">{props.title}</a>
        </div>
      </li>
    );
}

NavTitle.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
