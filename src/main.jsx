import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";

import "./index.css";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <header className="flex justify-between p-6 bg-[#FFF7ED]">
        <Link className="font-black text-lg" to="/">
          #VANLIFE
        </Link>
        <nav className="font-medium space-x-4">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
