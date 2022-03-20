import "./App.css";
import React from "react";
import { Header } from "./components/Header/Header";
import { InfoSection } from "./components/InfoSection/InfoSection";
import { ProjectsSection } from "./components/Projects/ProjectsSection";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <InfoSection
        title="Projects"
        text="From configuration to security, web apps to big data—whatever the
        infrastructure needs of your application may be, there is a Spring
        Project to help you build it. Start small and use just what you
        need—Spring is modular by design."
      />
      <ProjectsSection />
    </div>
  );
}

export default App;
