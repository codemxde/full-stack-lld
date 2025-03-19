import "./App.css";
import AdvancedTimer from "./components/Timer/AdvancedTimer";
import Timer from "./components/Timer/Timer";
import FocusInput from "./components/useRef/useRef";

function App() {
  return (
    <>
      <FocusInput />
      <Timer />
      <AdvancedTimer />
    </>
  );
}

export default App;
