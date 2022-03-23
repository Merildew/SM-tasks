import React from "react";
import { useDispatch } from "react-redux";
import { SEARCH } from "../../redux/actions/searchActions";
import "./styles.css";

export function SearchForm() {
  const dispatch = useDispatch();
  let typing;
  function searchAsync(value) {
    if (typing) {
      clearTimeout(typing);
    }
    typing = setTimeout(() => {
      dispatch({ type: SEARCH, payload: { value: value } });
    }, 500);
  }

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
            onKeyUp={(event) => searchAsync(event.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
}
