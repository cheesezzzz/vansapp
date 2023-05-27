import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  });

  const vanElements = vans.map((van) => {
    return (
      <div key={van.id}>
        <Link to={`/host/vans/${van.id}`}>
          <div className="flex h-20 p-4 rounded w-full space-x-2 bg-white">
            <img src={van.imageUrl} alt="image of van" />
            <div className="flex flex-col">
              <h3 className=" font-semibold">{van.name}</h3>
              <p>{van.price}/day</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="mt-8">
      <h1 className=" font-bold text-2xl">Your listed vans</h1>
      <div className="space-y-4 mt-4">{vanElements}</div>
    </div>
  );
}
