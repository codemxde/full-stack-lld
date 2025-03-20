import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Todo from "./components/Todo";
import TodoComponent from "./components/TodoComponent";

function App() {
  // return <Welcome name={"codemxde"} />;
  // return <Todo />;
  return <TodoComponent />;
}

export default App;
