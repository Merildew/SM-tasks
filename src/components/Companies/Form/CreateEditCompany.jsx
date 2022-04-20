import React, { useState } from "react";
import { SubmitButton } from "../../Form/SubmitButton";
import { Form } from "../../Form/Form";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormState } from "react-hook-form";
import { CompanyTextInput } from "./CompanyTextInput";
import { SCHEMA } from "./schema";
import { AddEmployee } from "./AddEmployee";
import { Button } from "../../Form/Button";
import PropTypes from "prop-types";

export function CreateEditCompany({ defaultValues, onSubmit, company }) {
  let N;
  if (company.person === undefined) {
    N = 1;
  } else N = company.person.length;

  const [checked, setChecked] = useState(false);
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
    control,
  } = useForm({
    resolver: yupResolver(SCHEMA),
    defaultValues: { ...defaultValues },
  });

  const { dirtyFields } = useFormState({
    control,
  });

  const submitForm = (data) => {
    for (let key in dirtyFields) {
      dirtyFields[key] = data[key];
    }
    onSubmit({ ...dirtyFields });
  };

  const employeeArrayObj = employee.map((number) => (
    <AddEmployee
      key={number}
      errors={errors.person}
      ref={{ ...register(`person.${number}.position`) }.ref}
      registerName={register(`person.${number}.name`)}
      registerPosition={register(`person.${number}.position`)}
    />
  ));

  return (
    <Form title="Add company" onSubmitForm={handleSubmit(submitForm)}>
      <label className="form-label">
        Company name
        <CompanyTextInput
          ref={{ ...register("name") }.ref}
          {...register("name")}
        />
        {errors.name && (
          <div className="errorMessage">{errors.name?.message}</div>
        )}
      </label>
      <label className="form-label">
        Company location
        <select className="form-select-input" {...register("location")}>
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
          ref={{ ...register("phoneNumber") }.ref}
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <div className="errorMessage">{errors.phoneNumber?.message}</div>
        )}
      </label>
      <label className="form-label">
        Address
        <CompanyTextInput
          ref={{ ...register("address") }.ref}
          {...register("address")}
        />
        {errors.address && (
          <div className="errorMessage">{errors.address?.message}</div>
        )}
      </label>
      {company.person !== undefined ? (
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
              <Button value="Add employee" onClickButton={handleClick} />
            </>
          )}
        </div>
      )}
      <SubmitButton value="Submit" />
    </Form>
  );
}

CreateEditCompany.propTypes = {
  defaultValues: PropTypes.object,
  onSubmit: PropTypes.func,
  children: PropTypes.object,
  radio: PropTypes.bool,
  company: PropTypes.object,
};
