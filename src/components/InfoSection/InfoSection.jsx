import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function InfoSection(props) {
  return (
    <div className="projects-info">
      <h1>{props.title}</h1>
      <p className="info-section-text">{props.text}</p>
    </div>
  );
}

InfoSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default InfoSection;
