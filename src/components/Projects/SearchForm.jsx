import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchAction } from "../../redux/actions/searchActions";
import "./styles.css";

export function SearchForm() {
  useEffect(() => {
    getFetch("");
  }, []);

  const dispatch = useDispatch();

  let typing;
  function searchAsync(value) {
    if (typing) {
      clearTimeout(typing);
    }
    typing = setTimeout(() => {
      getFetch(value);
    }, 500);
  }

  function getFetch(value) {
    fetch("https://sm-spring-api.herokuapp.com/projects")
      .then((res) => res.json())
      .then((projects) => {
        const result = projects.filter((item) => {
          return (
            item.title.toLowerCase().includes(value) ||
            item.text.toLowerCase().includes(value)
          );
        });
        dispatch(searchAction({ result: result, isLoaded: true }));
      })
      .catch((error) => console.log(error));
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
