import React from "react";
import { CreateEditCompany } from "../components/Companies/Form/CreateEditCompany";
import { useNavigate, Navigate } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { createCompany } from "../apiCalls/createCompany";

export function CreateCompanyPage() {
  const navigate = useNavigate();

  const submitForm = (data) => {
    if (createCompany(data)) {
      alert("Company created");
      navigate("/companies");
    }
  };

  if (localStorage.getItem("accessToken") !== undefined) {
    return (
      <>
        <Header />
        <CreateEditCompany
          onSubmit={submitForm}
          radio={true}
          company={{}}
          defaultValues={{ location: "" }}
        ></CreateEditCompany>
      </>
    );
  } else return <Navigate replace to="/login" />;
}
