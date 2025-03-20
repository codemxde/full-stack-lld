import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contactUs",
  initialState: {
    ContactUs: null,
  },
  reducers: {
    loadContactUs: (state, action) => {
      state.ContactUs = action.payload;
    },
  },
});

export const { loadContactUs } = contactSlice.actions;

export default contactSlice.reducer;
