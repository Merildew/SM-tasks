/* eslint-disable no-undef */
import { postFetch } from "./postFetch";
import { loginReducer } from "../redux/reducers/loginReducer";
import { signInAction } from "../redux/actions/loginActions";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(true),
  })
);

test("api call", async () => {
  await postFetch("admin", "1234")();
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "https://sm-spring-api.herokuapp.com/users",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login: "admin", pass: "1234" }),
    }
  );
});

test("login success", () => {
  const previousState = false;
  expect(loginReducer(previousState, signInAction({ isLogged: true }))).toEqual(
    {
      isLogged: true,
    }
  );
});

test("login failure", () => {
  const previousState = false;
  expect(
    loginReducer(previousState, signInAction({ isLogged: false }))
  ).toEqual({
    isLogged: false,
  });
});
