import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";

import "./App.css";
import ListUseCallback from "./components/ListUseCallback";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Counter = lazy(() => import("./components/Counter"));
const CounterMemo = lazy(() => import("./components/CounterMemo"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/seeyuh" element={<CounterMemo />} />
          <Route path="/fwaeh" element={<ListUseCallback />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
