import React, { useState } from "react";
import "./styles.css";
import { PROJECTS } from "../../constants/projects";
import { ProjectsList } from "./ProjectsList";
import { SearchForm } from "./SearchForm";

export function ProjectsSection() {
  const [value, setValue] = useState("");

  let result = PROJECTS.filter((project) => {
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
      <SearchForm onValueChange={search} />
      <ProjectsList projects={result} />
    </div>
  );
}
