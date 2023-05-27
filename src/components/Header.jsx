import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between p-6 bg-[#FFF7ED]">
      <Link className="font-black text-lg" to="/">
        #VANLIFE
      </Link>
      <nav className="font-medium space-x-4">
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}
