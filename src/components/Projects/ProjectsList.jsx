import React from "react";
import PropTypes from "prop-types";
import ProjectsItem from "./ProjectsItem";

function ProjectsList(props) {
  const projects = props.projects;

  const projectsItems = projects.map((item) => {
    return (
      <ProjectsItem
        src={item.src}
        title={item.title}
        text={item.text}
        key={item.title}
      />
    );
  });
  if (projectsItems.length !== 0)
    return (
      <div className="container">
        <section className="projects-list">{projectsItems}</section>
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

export default ProjectsList;
