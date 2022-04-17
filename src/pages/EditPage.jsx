import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";

import { updateCompany } from "../apiCalls/updateCompany";
import { useNavigate } from "react-router-dom";

import { getCompanies } from "../apiCalls/getCompanies";
import { CreateEditCompany } from "../components/Companies/Form/CreateEditCompany";

export function EditPage() {
  const [companies, setCompanies] = useState([]);
  const params = useParams();

  useEffect(async () => {
    const companyResp = await getCompanies();
    setCompanies(companyResp);
  }, [setCompanies]);

  let company = companies.find((item) => item.id === Number(params.id));

  const navigate = useNavigate();

  const submitForm = (data) => {
    if (updateCompany({ ...data, ...{ id: Number(params.id) } })) {
      alert("Company updated");
      navigate("/companies");
    }
  };

  if (localStorage.getItem("accessToken") !== undefined) {
    return (
      <>
        <Header />
        {companies.length !== 0 && (
          <CreateEditCompany
            onSubmit={submitForm}
            defaultValues={company}
            company={company}
          ></CreateEditCompany>
        )}
      </>
    );
  }
}
