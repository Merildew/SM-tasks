export const SEARCH = "SEARCH";

import { refreshToken } from "../../apiCalls/refreshToken";
import axios from "axios";
import { API_URL } from "../../apiCalls/apiURL";

export function searchAction(value, navigate) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "get",
        url: `${API_URL}/projects?value=${value}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const result = await response.data;
      const payload = { result: result, isLoaded: true };
      dispatch({ type: SEARCH, payload });
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        const status = await refreshToken();
        status ? searchAction(value, navigate) : navigate("/login");
        return;
      }
      if (error.response.status === 403) {
        navigate("/login");
        return;
      }
    }
  };
}
