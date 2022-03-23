import { SEARCH } from "../actions/searchActions";
import { PROJECTS } from "../../constants/projects";

const initialState = { result: PROJECTS };

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        result: PROJECTS.filter(
          (item) =>
            item.title.toLowerCase().includes(action.payload.value) ||
            item.text.toLowerCase().includes(action.payload.value)
        ),
      };
    }
    default:
      return state;
  }
};
