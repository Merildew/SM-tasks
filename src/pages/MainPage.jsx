import React, { Fragment } from "react";
import { InfoSection } from "../components/InfoSection/InfoSection";
import { ProjectsSection } from "../components/Projects/ProjectsSection";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function MainPage() {
  const { login, pass } = useSelector((state) => state.user);
  if (login === "admin" && pass === "1234") {
    return (
      <>
        <InfoSection
          title="Projects"
          text="From configuration to security, web apps to big data—whatever the
        infrastructure needs of your application may be, there is a Spring
        Project to help you build it. Start small and use just what you
        need—Spring is modular by design."
        />
        <ProjectsSection />
      </>
    );
  } else return <Navigate replace to="/login" />;
}
