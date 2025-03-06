import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExampleComponent from "./components/ExampleComponent";
import FetchData from "./components/FetchData";

function App() {
  return (
    <>
      <ExampleComponent />
      <FetchData />
    </>
  );
}

export default App;
