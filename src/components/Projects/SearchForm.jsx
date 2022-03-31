import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchAction } from "../../redux/actions/searchActions";
import "./styles.css";

export function SearchForm() {
  useEffect(() => {
    getProjects("").catch((error) => alert(error.message));
  }, []);

  const dispatch = useDispatch();

  let typing;
  function searchAsync(value) {
    if (typing) {
      clearTimeout(typing);
    }
    typing = setTimeout(() => {
      getProjects(value).catch((error) => alert(error.message));
    }, 500);
  }

  async function getProjects(value) {
    const response = await fetch(
      "https://sm-spring-api.herokuapp.com/projects"
    );

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const projects = await response.json();
    const result = await projects.filter((item) => {
      return (
        item.title.toLowerCase().includes(value) ||
        item.text.toLowerCase().includes(value)
      );
    });
    dispatch(searchAction({ result: result, isLoaded: true }));
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
