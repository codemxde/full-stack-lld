import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: false,
    loading: true,
  },
  reducers: {
    userLoading: (state, action) => {
      state.error = false;
      state.loading = action.payload;
    },
    userError: (state) => {
      state.error = true;
      state.loading = false;
    },
    userData: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export const { userLoading, userError, userData } = userSlice.actions;

export default userSlice.reducer;
