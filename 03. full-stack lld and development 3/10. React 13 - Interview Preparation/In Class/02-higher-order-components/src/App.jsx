import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import MyComponent from "./components/MyComponent";
import Dashboard from "./components/Login/Dashboard";

function App() {
  // return <MyComponent name={"codemxde"} />;
  return <Dashboard name="codemxde" />;
}

export default App;
