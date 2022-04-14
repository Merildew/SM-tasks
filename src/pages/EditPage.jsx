import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { SubmitButton } from "../components/Form/SubmitButton";
import { Button } from "../components/Form/Button";
import { updateCompany } from "../apiCalls/updateCompany";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CompanyTextInput } from "../components/Form/CompanyTextInput";
import { companiesSelector } from "../redux/selectors";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  name: yup.string().required("Company name is a required field"),
  location: yup.string().required("Company location is a required field"),
  phoneNumber: yup
    .string()
    .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, {
      message: "Wrong phone number format",
      excludeEmptyString: true,
    }),
  address: yup.string("Must be a string"),
  person: yup.array(
    yup.object({
      name: yup.string().max(35, "Full name must be at most 35 characters"),
      position: yup.string(),
    })
  ),
});

export function EditPage() {
  const params = useParams();
  const companyName = params.name;

  const companies = useSelector(companiesSelector);
  let company = companies.companies.find((item) => item.name === companyName);

  let N;
  if (company.person === undefined) {
    N = 1;
  } else N = company.person.length;

  const [checked, setChecked] = useState(false);
  const [newCompany, setNewCompany] = useState(company);
  const [count, setCount] = useState(N);
  const [employee, setEmployee] = useState(
    Array.apply(null, { length: N }).map(Number.call, Number)
  );

  function handleClick() {
    setCount(count + 1);
    setEmployee([...employee, count]);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const employeeArrayObj = employee.map((number) => (
    <div className="employee-wrapper" key={number}>
      <label className="form-label">
        Full Name
        <input
          type="text"
          className="form-input"
          {...register(`person.${number}.name`)}
          value={
            newCompany.person !== undefined
              ? newCompany.person[number]?.name
              : ""
          }
          onChange={(event) =>
            setNewCompany({
              ...newCompany,
              person: event.target.value,
            })
          }
        />
        {errors.person && (
          <div className="errorMessage">
            {errors.person[number]?.name?.message}
          </div>
        )}
      </label>
      <label className="form-label">
        Position
        <select
          {...register(`person.${number}.position`)}
          className="form-select-input"
          value={
            newCompany.person !== undefined
              ? newCompany.person[number]?.position
              : ""
          }
          onChange={(event) =>
            setNewCompany({
              ...newCompany,
              person: event.target.value,
            })
          }
        >
          <option value="Project Manager"> Project Manager</option>
          <option value="Team Leader">Team Leader</option>
          <option value="Chief Technology Officer">
            Chief Technology Officer
          </option>
          <option value="Software Developer">Software Developer</option>
          <option value="QA">QA</option>
        </select>
        {errors.person && (
          <div className="errorMessage">
            {errors.person[number]?.position?.message}
          </div>
        )}
      </label>
    </div>
  ));

  const navigate = useNavigate();
  const submitForm = (data) => {
    for (const key in data) {
      if (data[key] == "") {
        delete data[key];
      }
    }
    if (data.person[0].name === undefined) delete data.person;
    if (updateCompany({ ...company, ...data })) {
      alert("Company updated");
      navigate("/companies");
    }
  };

  if (localStorage.getItem("accessToken") !== undefined) {
    return (
      <>
        <Header />
        <Form
          title="Edit company"
          onSubmitForm={handleSubmit(submitForm)}
          render={
            <>
              <label className="form-label">
                Company name
                <CompanyTextInput
                  name="name"
                  ref={{ ...register("name") }.ref}
                  {...register("name")}
                  value={newCompany.name}
                  onChange={(event) =>
                    setNewCompany({ ...newCompany, name: event.target.value })
                  }
                />
                {errors.name && (
                  <div className="errorMessage">{errors.name?.message}</div>
                )}
              </label>
              <label className="form-label">
                Company location
                <select
                  className="form-select-input"
                  {...register("location")}
                  onChange={(event) =>
                    setNewCompany({
                      ...newCompany,
                      location: event.target.value,
                    })
                  }
                  value={newCompany.location}
                >
                  <option value="USA">USA</option>
                  <option value="Poland">Poland</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Ukraine">Ukraine</option>
                </select>
                {errors.location && (
                  <div className="errorMessage">{errors.location?.message}</div>
                )}
              </label>
              <label className="form-label">
                Phone number
                <CompanyTextInput
                  name="phoneNumber"
                  ref={{ ...register("phoneNumber") }.ref}
                  {...register("phoneNumber")}
                  value={newCompany.phoneNumber}
                  onChange={(event) =>
                    setNewCompany({
                      ...newCompany,
                      phoneNumber: event.target.value,
                    })
                  }
                />
                {errors.phoneNumber && (
                  <div className="errorMessage">
                    {errors.phoneNumber?.message}
                  </div>
                )}
              </label>
              <label className="form-label">
                Address
                <CompanyTextInput
                  name="address"
                  ref={{ ...register("address") }.ref}
                  {...register("address")}
                  value={newCompany.address}
                  onChange={(event) =>
                    setNewCompany({
                      ...newCompany,
                      address: event.target.value,
                    })
                  }
                />
                {errors.address && (
                  <div className="errorMessage">{errors.address?.message}</div>
                )}
              </label>
              {newCompany.person !== undefined ? (
                <>
                  {employeeArrayObj}
                  <Button value="Add employee" onClickButton={handleClick} />
                </>
              ) : (
                <div className="form-radio-wrapper">
                  <input
                    type="radio"
                    id="radioButton"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                  Add employees
                  {checked && (
                    <>
                      {employeeArrayObj}
                      <Button
                        value="Add employee"
                        onClickButton={handleClick}
                      />
                    </>
                  )}
                </div>
              )}
              <SubmitButton value="Submit" />
            </>
          }
        ></Form>
      </>
    );
  } else return <Navigate replace to="/login" />;
}
