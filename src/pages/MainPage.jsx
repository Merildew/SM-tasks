import React, { Fragment } from "react";
import { InfoSection } from "../components/InfoSection/InfoSection";
import { Navigate } from "react-router-dom";
import { SearchForm } from "../components/Projects/SearchForm";
import { ProjectsList } from "../components/Projects/ProjectsList";
import { Header } from "../components/Header/Header";

export function MainPage() {
  if (localStorage.getItem("accessToken") !== undefined) {
    return (
      <>
        <Header />
        <InfoSection
          title="Projects"
          text="From configuration to security, web apps to big data—whatever the
        infrastructure needs of your application may be, there is a Spring
        Project to help you build it. Start small and use just what you
        need—Spring is modular by design."
        />
        <div className="projects-container">
          <SearchForm />
          <ProjectsList />
        </div>
      </>
    );
  } else return <Navigate replace to="/login" />;
}
