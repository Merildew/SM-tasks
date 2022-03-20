import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/loginSlice";
import searchReducer from "./reducers/searchSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
  middleware: [thunk],
});
