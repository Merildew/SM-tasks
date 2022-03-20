import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/loginSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
