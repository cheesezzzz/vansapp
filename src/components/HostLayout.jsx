import { Outlet, Link } from "react-router-dom";

export default function HostLayout() {
  return (
    <div className="px-6">
      <nav className=" space-x-4 underline">
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
}
