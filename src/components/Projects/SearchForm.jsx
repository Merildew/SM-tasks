import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { searchAction } from "../../redux/actions/searchActions";

export function SearchForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchAction("", navigate));
  });

  let typing;
  function searchAsync(value) {
    if (typing) {
      clearTimeout(typing);
    }
    typing = setTimeout(() => {
      dispatch(searchAction(value, navigate));
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
