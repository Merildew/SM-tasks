import { SIGN_IN } from "../actions/loginActions";

const initialState = {
  isLogged: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        isLogged: action.payload.isLogged,
      };
    }
    default:
      return state;
  }
};
