export const LOG_IN = "LOG_IN";

import axios from "axios";
import { API_URL } from "../../apiCalls/apiURL";

export function logInAction(login, pass, setError, navigate) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: `${API_URL}/login`,
        headers: { "Content-Type": "application/json" },
        data: { login: login, pass: pass },
      });

      const data = await response.data;
      if (data.isLogged) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        const payload = { login: login, isLogged: true };
        dispatch({ type: LOG_IN, payload });
        navigate("/");
        return data.isLogged;
      } else {
        dispatch({ type: LOG_IN, isLogged: false });
        window.location.reload();
        return data.isLogged;
      }
    } catch (error) {
      let loginError = await error.response.data;
      setError(loginError);
      throw new Error(loginError);
    }
  };
}
