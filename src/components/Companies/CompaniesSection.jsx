import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Form/Button";
import { NavLink } from "react-router-dom";
import { CompaniesItem } from "./CompaniesItem";
import "./styles.css";
import { getCompanies } from "../../apiCalls/getCompanies";
export function CompaniesSection(props) {
  const [company, setCompany] = useState([]);

  useEffect(async () => {
    const companyResp = await getCompanies();
    setCompany(companyResp);
  }, [setCompany]);

  return (
    <>
      <section className="companies-info-section">
        <h1>{props.title}</h1>
        <p className="companies-section-text">{props.text}</p>
      </section>
      <div className="companies-container">
        <div className="companies-block-wrapper">
          {company.map((item) => {
            return (
              <CompaniesItem
                key={item.id}
                id={item.id}
                title={item.name}
                location={item.location}
                number={item.phoneNumber}
                address={item.address}
                person={item.person}
              />
            );
          })}

          <NavLink to="/createcompany">
            <Button value="Create Company" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

CompaniesSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
