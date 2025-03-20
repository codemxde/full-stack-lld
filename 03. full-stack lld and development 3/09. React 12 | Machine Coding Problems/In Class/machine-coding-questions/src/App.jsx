import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import AdvancedTimer from "./components/Timer/AdvancedTimer";
import Timer from "./components/Timer/Timer";
import FocusInput from "./components/useRef/useRef";
import ShiftingCarousel from "./components/Carousel/ShiftingCarousel";
import useVisibilty from "./hooks/useVisibilty";
import ToggleVisibilty from "./components/Custom/ToggleVisibility";

function App() {
  const { visibility, hide, toggle } = useVisibilty();
  return (
    <>
      <FocusInput />
      <Timer />
      <AdvancedTimer />
      <div className="flex gap-x-12">
        <Carousel />
        <ShiftingCarousel />
      </div>
      <div className="flex gap-x-7">
        <button
          className="self-start p-2 bg-green-200 text-lg rounded-xl"
          onClick={toggle}
        >
          Toggle Visibility
        </button>
        <ToggleVisibilty visibility={visibility} hide={hide} />
      </div>
    </>
  );
}

export default App;
