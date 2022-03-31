/* eslint-disable no-undef */
import { loginUser } from "./loginUser";
import { loginReducer } from "../redux/reducers/loginReducer";
import { signInAction } from "../redux/actions/loginActions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(true),
  })
);

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

test("api call", async () => {
  const loginStatus = await loginUser(
    "admin",
    "1234",
    mockedUsedNavigate
  )(store.dispatch);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "https://sm-spring-api.herokuapp.com/users",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login: "admin", pass: "1234" }),
    }
  );
  expect(loginStatus).toBe(true);
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
