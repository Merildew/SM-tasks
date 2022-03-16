import React, { useState, useRef } from "react";
import SearchForm from "./SearchForm";
import "./styles.css";
import PROJECTS from "../../constants/projects";
import ProjectsList from "./ProjectsList";

function ProjectsSection() {
  const [value, setValue] = useState("");
  const result = useRef(PROJECTS);

  result.current = PROJECTS.filter((project) => {
    return (
      project.title.toLowerCase().includes(value) ||
      project.text.toLowerCase().includes(value)
    );
  });

  function search(request) {
    setValue(request.toLowerCase());
  }

  return (
    <div className="projects-container">
      <SearchForm onValueChange={search}></SearchForm>
      <ProjectsList projects={result.current}></ProjectsList>
    </div>
  );
}

export default ProjectsSection;
