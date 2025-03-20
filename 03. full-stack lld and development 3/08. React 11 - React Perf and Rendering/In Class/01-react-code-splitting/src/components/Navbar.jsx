import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loadHome } from "../redux/homeSlice";
import { loadContactUs } from "../redux/contactSlice";
import { loadAbout } from "../redux/aboutSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const importHomePage = () => {
    import("../components/Home").then((module) => dispatch(loadHome(module.default)));
  };

  const importContactUs = () => {
    import("../components/ContactUs").then((module) =>
      dispatch(loadContactUs(module.default))
    );
  };

  const importAbout = () => {
    import("../components/About").then((module) => dispatch(loadAbout(module.default)));
  };

  return (
    <nav className="p-3">
      <ul className="flex gap-x-7 text-2xl">
        <li>
          <Link to="/" onClick={importHomePage}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={importAbout}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={importContactUs}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
