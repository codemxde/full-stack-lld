import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});

export default store;
