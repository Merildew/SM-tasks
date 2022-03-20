import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function SearchForm(props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const typing = setTimeout(() => {
      props.onValueChange(value);
    }, 500);

    return () => {
      clearTimeout(typing);
    };
  });

  return (
    <div className="search-form-container ">
      <form className="search-form" method="post">
        <div className="search-icon">
          <input
            type="text"
            id="searchInput"
            className="search-input"
            name="projectsList"
            placeholder="Find projects"
            onKeyUp={(event) => setValue(event.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onValueChange: PropTypes.func,
};
