import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const navStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black"
  }
  

  return (
    <div className="px-6">
      <nav className=" space-x-4 underline mb-6">
        <NavLink 
        style={({isActive}) => isActive ? navStyles : null} 
        end
        to=".">
          Dashboard
        </NavLink>
        <NavLink style={({isActive}) => isActive ? navStyles : null} to="income">
          Income
          </NavLink>
          <NavLink style={({isActive}) => isActive ? navStyles : null} to="vans">
          Vans
          </NavLink>
        <NavLink style={({isActive}) => isActive ? navStyles : null} to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
