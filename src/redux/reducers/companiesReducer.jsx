import { GET_COMPANIES } from "../actions/companiesActions";

const initialState = {};

export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES: {
      return {
        ...state,
        companies: action.payload.companies,
      };
    }
    default:
      return state;
  }
};
