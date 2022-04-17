import { LOG_IN } from "../actions/loginActions";

const initialState = {
  login: null,
  isLogged: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        login: action.payload.login,
        isLogged: action.payload.isLogged,
      };
    }
    default:
      return state;
  }
};
