import React from "react";
import PropTypes from "prop-types";

function ProjectsItem(props) {
  return (
    <a className="projects-item">
      <img className="project-icon" src={props.src} alt=""></img>
      <div className="project-text-block">
        <h3>{props.title}</h3>
        <p className="projects-text">{props.text}</p>
      </div>
    </a>
  );
}

ProjectsItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
export default ProjectsItem;
