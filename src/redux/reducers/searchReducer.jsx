import { SEARCH } from "../actions/searchActions";

const initialState = { isLoaded: false, result: [] };

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        isLoaded: action.payload.isLoaded,
        result: action.payload.result,
      };
    }
    default:
      return state;
  }
};
