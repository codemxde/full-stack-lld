import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import MyComponent from "./components/MyComponent";
import DisplayData from "./components/DisplayData";
import ConditionalRender from "./components/ConditionalRender";
import Button from "./components/Button";

function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  const person = {
    fname: "codemxde",
    age: 25,
  };
  return (
    <div>
      <MyComponent message="Hello, I am a Component" label={"feels amazing"} />
      <MyComponent message={"Hello I am also the same Component"} />
      <MyComponent message="Hey there, me too!" />
      <DisplayData fruits={fruits} person={person} />
      <ConditionalRender username="codemxde" isLoggedIn={true} />
      <Button />
    </div>
  );
}

export default App;
