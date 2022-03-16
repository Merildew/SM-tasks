import React from "react";
import "./styles.css";
import Logo from "../../assets/images/spring-logo.svg";
import Navigation from "./Navigation";

function Header() {
  return (
    <header>
      <div className=" header-wrapper container">
        <div className="header-logo">
          <a href="/">
            <img className="header-logo-image" src={Logo} alt="" />
          </a>
        </div>
        <Navigation></Navigation>
      </div>
    </header>
  );
}

export default Header;
