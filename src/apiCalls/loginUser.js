import { signInAction } from "../redux/actions/loginActions";
import axios from "axios";

export function loginUser(login, pass, setError, navigate) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/login",
        headers: { "Content-Type": "application/json" },
        data: { login: login, pass: pass },
      });

      const data = await response.data;
      if (data.isLogged) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        dispatch(signInAction({ login: login, isLogged: true }));
        navigate("/");
        return data.isLogged;
      } else {
        dispatch(signInAction({ isLogged: false }));
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
