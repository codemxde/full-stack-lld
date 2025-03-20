import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex gap-10 text-2xl font-medium text-blue-700 p-3 my-3">
      <li>
        <Link className="p-2 bg-slate-200 rounded-lg hover:underline" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="p-2 bg-slate-200 rounded-lg hover:underline" to="/counter">
          Counter
        </Link>
      </li>
      <li>
        <Link className="p-2 bg-slate-200 rounded-lg hover:underline" to="/seeyuh">
          Counter Memo
        </Link>
      </li>
      <li>
        <Link className="p-2 bg-slate-200 rounded-lg hover:underline" to="/fwaeh">
          List
        </Link>
      </li>
      <li>
        <Link className="p-2 bg-slate-200 rounded-lg hover:underline" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="p-2 bg-slate-200 rounded-lg hover:underline" to="/contact-us">
          Contact
        </Link>
      </li>
    </ul>
  );
}
