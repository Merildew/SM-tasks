import { refreshToken } from "./refreshToken";
import { searchAction } from "../redux/actions/searchActions";
import axios from "axios";

export function getProjects(value, navigate) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3001/projects?value=${value}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const result = await response.data;
      dispatch(searchAction({ result: result, isLoaded: true }));
    } catch (error) {
      if (error.response.status === 401) {
        const status = await refreshToken();
        status ? dispatch(getProjects(value, navigate)) : navigate("/login");
        return;
      }
      if (error.response.status === 403) {
        navigate("/login");
        return;
      }
    }
  };
}
