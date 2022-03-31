import { signInAction } from "../../src/redux/actions/loginActions";

export function loginUser(login, pass, navigate) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login: login, pass: pass }),
  };
  return async (dispatch) => {
    const response = await fetch(
      "https://sm-spring-api.herokuapp.com/users",
      options
    );
    const data = await response.json();
    if (data) {
      dispatch(signInAction({ isLogged: true }));
      navigate("/");
      return data;
    } else {
      dispatch(signInAction({ isLogged: false }));
      window.location.reload();
      return data;
    }
  };
}
