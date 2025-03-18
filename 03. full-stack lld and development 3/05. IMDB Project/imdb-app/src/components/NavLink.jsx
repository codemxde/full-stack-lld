import { Link } from "react-router-dom";

export default function NavLink({ className, to, text }) {
  if (to === "/movies") to = "/";
  return (
    <Link className={className} to={to}>
      {text}
    </Link>
  );
}
