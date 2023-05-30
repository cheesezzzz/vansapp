import { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

export default function HostVansDetail() {
  const [van, setVan] = useState(null);
  const { id } = useParams();

  console.log(van);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  const navStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black",
  };

  return (
    <div>
      <Link relative="path" to="../" className="underline">
        Back to all vans
      </Link>
      {van ? (
        <div key={van.id} className="bg-white p-4 mt-4">
          <div className="flex space-x-4 items-center">
            <img width="150" src={van.imageUrl} alt="hello" />
            <div>
              <div
                className={`flex justify-center items-center py-1 px-4 rounded-md bg-black text-[#FFEAD0] w-fit font-medium ${van.type}`}
              >
                <p>{van.type}</p>
              </div>
              <h2 className=" text-3xl font-semibold">{van.name}</h2>
              <p className="font-semibold text-lg ">
                ${van.price}
                <span className="font-normal">/day</span>
              </p>
            </div>
          </div>
          <nav className="space-x-4 my-4">
            <NavLink
              style={({ isActive }) => (isActive ? navStyles : null)}
              end
              to="."
            >
              Info
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? navStyles : null)}
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? navStyles : null)}
              to="photos"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ van }} />
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
