import { signInAction } from "../../src/redux/actions/loginActions";

export function postFetch(login, pass, navigate) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login: login, pass: pass }),
  };
  return (dispatch) =>
    fetch("https://sm-spring-api.herokuapp.com/users", options)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          dispatch(signInAction({ isLogged: true }));
          navigate("/");
          return data;
        } else {
          dispatch(signInAction({ isLogged: false }));
          window.location.reload();
          return data;
        }
      })
      .catch((error) => console.log(error));
}
