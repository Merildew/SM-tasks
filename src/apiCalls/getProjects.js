import { refreshToken } from "./refreshToken";
import { searchAction } from "../redux/actions/searchActions";

export function getProjects(value, navigate) {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:3001/projects?value=${value}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        const status = await refreshToken();
        status ? getProjects(value) : navigate("/login");
        return;
      }
      if (response.status === 403) {
        const result = await response.json();
        alert(result.error.message);
        navigate("/login");
        return;
      }
    }

    const result = await response.json();
    dispatch(searchAction({ result: result, isLoaded: true }));
  };
}
