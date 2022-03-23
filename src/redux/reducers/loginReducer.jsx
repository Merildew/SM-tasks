import { SIGN_IN } from "../actions/loginActions";

const initialState = {
  login: "null",
  pass: "null",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        login: action.payload.login,
        pass: action.payload.pass,
      };
    }
    default:
      return state;
  }
};
