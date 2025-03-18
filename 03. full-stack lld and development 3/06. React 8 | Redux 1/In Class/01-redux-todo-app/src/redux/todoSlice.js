import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: "todo",
  initialState: {
    list: ["Task1", "Task2"],
    text: "",
  },
  reducers: {
    updateText: (state, action) => {
      console.log("Action", action);
      state.text = action.payload;
    },
    addToList: (state) => {
      state.list.push(state.text);
      state.text = "";
    },
  },
});

export const { updateText, addToList } = todo.actions;
export default todo.reducer;
