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

export function ProjectsList(props) {
  const projects = props.projects;

  if (projects.length !== 0)
    return (
      <div className="container">
        <section className="projects-list">
          {projects.map((item) => {
            return (
              <ProjectsItem
                src={item.src}
                title={item.title}
                text={item.text}
                key={item.title}
              />
            );
          })}
        </section>
      </div>
    );
  else
    return (
      <div className="container">
        <p className="projects-item no-result">No results</p>
      </div>
    );
}

ProjectsList.propTypes = {
  projects: PropTypes.array,
};

ProjectsItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
