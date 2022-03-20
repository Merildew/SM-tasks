import { createSlice } from "@reduxjs/toolkit";
import { PROJECTS } from "../../constants/projects";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    result: PROJECTS,
  },
  reducers: {
    search(state, action) {
      state.result = PROJECTS.filter(
        (item) =>
          item.title.toLowerCase().includes(action.payload.value) ||
          item.text.toLowerCase().includes(action.payload.value)
      );
    },
  },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;
