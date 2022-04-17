import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  search: searchReducer,
});
