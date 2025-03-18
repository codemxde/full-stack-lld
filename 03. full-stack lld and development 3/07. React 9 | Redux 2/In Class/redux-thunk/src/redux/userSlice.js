import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    loading: true,
    error: false,
    user: null,
  },
  reducers: {
    displayError: (state) => {
      state.error = true;
    },
    displayUser: (state, action) => {
      state.user = action.payload;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { displayError, displayUser, stopLoading } = user.actions;

export default user.reducer;
