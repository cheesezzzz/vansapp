import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between p-6 bg-[#FFF7ED]">
      <Link className="font-black text-lg" to="/">
        #VANLIFE
      </Link>
      <nav className="font-medium space-x-4">
        <NavLink
          className={({ isActive }) => isActive ? "active-link" : null}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "active-link" : null}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "active-link" : null}
          to="/vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
