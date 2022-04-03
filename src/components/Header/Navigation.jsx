import React, { useState } from "react";
import PropTypes from "prop-types";
import { HEADER_LINKS } from "../../constants/headerLinks";
import { NavTitle } from "./NavTitle";
import logout from "../../assets/images/logout.svg";
import { NavLink } from "react-router-dom";

function NavLinks(props) {
  const headerLinks = props.headerLinks;

  return (
    <ul className={props.classForNav}>
      {headerLinks.map((item) => {
        return (
          <NavTitle key={item.title} title={item.title} items={item.items} />
        );
      })}
    </ul>
  );
}

export function Navigation() {
  const [show, setShow] = useState(false);
  function onShow() {
    setShow(!show);
  }
  return (
    <nav className="nav-block">
      {show ? (
        <NavLinks headerLinks={HEADER_LINKS} classForNav="nav-list" />
      ) : (
        <NavLinks headerLinks={HEADER_LINKS} classForNav="nav-list show" />
      )}
      <div className="nav-icons-wrapper">
        <div id="hamburger" className="hamburger" onClick={onShow}>
          <div
            className={show ? "burger-bar burger-bar-1" : "burger-bar"}
          ></div>
          <div
            className={show ? "burger-bar burger-bar-2" : "burger-bar"}
          ></div>
          <div
            className={show ? "burger-bar burger-bar-3" : "burger-bar"}
          ></div>
        </div>
        <NavLink
          to="/login"
          onClick={() => {
            localStorage.clear();
          }}
        >
          <img className="logout-image" src={logout} alt="" />
        </NavLink>
      </div>
    </nav>
  );
}

NavLinks.propTypes = {
  headerLinks: PropTypes.array,
  classForNav: PropTypes.string,
};
