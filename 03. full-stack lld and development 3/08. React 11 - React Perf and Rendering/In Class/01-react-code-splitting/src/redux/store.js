import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";
import contactSlice from "./contactSlice";
import aboutSlice from "./aboutSlice";

const store = configureStore({
  reducer: {
    home: homeSlice,
    contact: contactSlice,
    about: aboutSlice,
  },
});

export default store;
