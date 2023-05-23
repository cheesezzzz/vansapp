import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => {
    return (
      <div key={van.id}>
        <Link to={`/vans/${van.id}`}>
          <div>
            <img className="rounded-md" src={van.imageUrl} alt="" />
          </div>
          <div className="flex justify-between pt-2">
            <div className="space-y-2">
              <h2 className=" text-xl font-semibold">{van.name}</h2>
              <div
                className={`flex justify-center items-center py-2 px-5 rounded-md bg-black text-[#FFEAD0] w-fit font-medium ${van.type}`}
              >
                <p>{van.type}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-semibold text-lg ">${van.price}</span>
              <span className="text-sm">/day</span>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="px-10">
      <div>
        <h1 className=" text-3xl font-semibold">Explore our vans options</h1>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-6">{vanElements}</div>
    </div>
  );
}
