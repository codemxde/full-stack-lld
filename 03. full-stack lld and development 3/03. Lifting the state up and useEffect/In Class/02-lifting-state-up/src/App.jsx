import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TemperatureInput from "./components/TemperatureInput";
import TemperatureDisplay from "./components/TemperatureDisplay";

function App() {
  const [temperature, setTemperature] = useState("");

  const changeTemperature = (e) => setTemperature(e.target.value);

  return (
    <>
      <TemperatureInput temperature={temperature} changeTemperature={changeTemperature} />
      <TemperatureDisplay temperature={temperature} />
    </>
  );
}

export default App;
