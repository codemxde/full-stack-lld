import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
  },
});

export default store;
