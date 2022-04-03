import { signInAction } from "../redux/actions/loginActions";

export function loginUser(login, pass, setError, navigate) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login: login, pass: pass }),
  };
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/login", options);

    if (!response.ok) {
      let loginError = await response.json();
      loginError = loginError.error;
      setError(loginError);
      throw new Error(loginError);
    }
    const data = await response.json();

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
  };
}
