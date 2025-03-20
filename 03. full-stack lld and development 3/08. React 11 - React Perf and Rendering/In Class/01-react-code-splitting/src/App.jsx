import { useEffect } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { loadHome } from "./redux/homeSlice";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();

  const { Home } = useSelector((state) => state.home);
  const { ContactUs } = useSelector((state) => state.contact);
  const { About } = useSelector((state) => state.about);

  useEffect(() => {
    import("./components/Home").then((module) => {
      dispatch(loadHome(module.default));
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={Home ? <Home /> : <div>Loading...</div>} />
        <Route path="/about" element={About ? <About /> : <div>Loading...</div>} />
        <Route
          path="/contact-us"
          element={ContactUs ? <ContactUs /> : <div>Loading...</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
