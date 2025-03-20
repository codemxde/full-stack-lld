import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    Home: null,
  },
  reducers: {
    loadHome: (state, action) => {
      state.Home = action.payload;
    },
  },
});

export const { loadHome } = homeSlice.actions;

export default homeSlice.reducer;
