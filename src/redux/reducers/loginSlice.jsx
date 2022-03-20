import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "user",
  initialState: {
    login: null,
    pass: null,
  },
  reducers: {
    authorization(state, action) {
      state.login = action.payload.login;
      state.pass = action.payload.pass;
    },
  },
});

export const { authorization } = loginSlice.actions;
export default loginSlice.reducer;
