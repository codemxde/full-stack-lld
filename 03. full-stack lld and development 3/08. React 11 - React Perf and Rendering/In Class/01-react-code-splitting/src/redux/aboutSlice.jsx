import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    About: null,
  },
  reducers: {
    loadAbout: (state, action) => {
      state.About = action.payload;
    },
  },
});

export const { loadAbout } = aboutSlice.actions;

export default aboutSlice.reducer;
