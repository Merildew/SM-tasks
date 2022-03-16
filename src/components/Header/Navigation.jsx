import React, { useState } from "react";
import HEADERLINKS from "../../constants/headerLinks";
import NavLinks from "./NavLinks";

function Navigation() {
  const [show, setShow] = useState(false);
  function onShow() {
    console.log(show);
    setShow(!show);
  }
  return (
    <nav>
      <div id="hamburger" className="hamburger" onClick={onShow}>
        <div className={show ? "burger-bar burger-bar-1" : "burger-bar"}></div>
        <div className={show ? "burger-bar burger-bar-2" : "burger-bar"}></div>
        <div className={show ? "burger-bar burger-bar-3" : "burger-bar"}></div>
      </div>
      {show ? (
        <NavLinks headerLinks={HEADERLINKS} classForNav="nav-list" />
      ) : (
        <NavLinks headerLinks={HEADERLINKS} classForNav="nav-list show" />
      )}
    </nav>
  );
}

export default Navigation;
