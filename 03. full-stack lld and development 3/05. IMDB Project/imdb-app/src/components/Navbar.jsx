import { Link } from "react-router-dom";
import logo from "../assets/imdb-logo.png";
import NavLink from "./NavLink";

function Navbar() {
  const arr = ["Movies", "Watchlist"];
  const properties = "text-2xl font-bold text-slate-600 hover:underline";
  return (
    <div className="flex  justify-around w-2/5 ml-[30%] mt-6 mb-6">
      <Link to="/">
        <img src={logo} className="w-16" />
      </Link>
      {arr.map((navItem) => (
        <NavLink
          key={navItem.toLowerCase()}
          className={properties}
          to={`/${navItem.toLowerCase()}`}
          text={navItem}
        />
      ))}
    </div>
  );
}

export default Navbar;
