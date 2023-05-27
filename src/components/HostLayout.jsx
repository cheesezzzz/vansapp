import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const navStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black"
  }
  

  return (
    <div className="px-6">
      <nav className=" space-x-4 underline">
        <NavLink 
        style={({isActive}) => isActive ? navStyles : null} 
        end
        to="/host">
          Dashboard
        </NavLink>
        <NavLink style={({isActive}) => isActive ? navStyles : null} to="/host/income">
          Income
          </NavLink>
          <NavLink style={({isActive}) => isActive ? navStyles : null} to="/host/vans">
          Vans
          </NavLink>
        <NavLink style={({isActive}) => isActive ? navStyles : null} to="/host/reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
