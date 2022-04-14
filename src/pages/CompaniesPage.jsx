import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { CompaniesSection } from "../components/Companies/CompaniesSection";
import { Header } from "../components/Header/Header";

export function CompaniesPage() {
  if (localStorage.getItem("accessToken") !== undefined) {
    return (
      <>
        <Header />
        <CompaniesSection
          title="Companies"
          text="Spring’s flexible libraries are trusted by developers all over the world. Spring delivers delightful experiences to millions of end-users every day—whether that’s streaming TV, online shopping, or countless other innovative solutions. Spring also has contributions from all the big names in tech, including Alibaba, Amazon, Google, Microsoft, and more"
        />
      </>
    );
  } else return <Navigate replace to="/login" />;
}
