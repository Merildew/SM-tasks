import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { searchReducer } from "./searchReducer";
import { companiesReducer } from "./companiesReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  search: searchReducer,
  companies: companiesReducer,
});
