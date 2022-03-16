import React from "react";
import PropTypes from "prop-types";
import NavTitle from "./NavTitle";

function NavLinks(props) {
  const headerLinks = props.headerLinks;
  const linksItems = headerLinks.map((item) => {
    return <NavTitle key={item.title} title={item.title} items={item.items} />;
  });

  return <ul className={props.classForNav}>{linksItems}</ul>;
}

NavLinks.propTypes = {
  headerLinks: PropTypes.array,
  classForNav: PropTypes.string,
};

export default NavLinks;
