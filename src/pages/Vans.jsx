import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const typeFilter = searchParams.get("type");

  const displayedVans = vans.filter((van) =>
    typeFilter ? van.type.toLowerCase() === typeFilter : vans
  );

  const vanElements = displayedVans.map((van) => {
    return (
      <div key={van.id}>
        <Link to={van.id} state={{}}>
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

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="px-10">
      <div className="py-6">
        <h1 className=" text-3xl font-semibold">Explore our vans options</h1>
      </div>
      <div className="space-x-4 py-8">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`bg-[#FFEAD0] hover:text-[#FFEAD0] py-2 px-4 rounded hover:bg-[#E17654] duration-150 ease-linear transition-colors ${
            typeFilter === "simple" ? "selected__type--simple" : ''
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`bg-[#FFEAD0] hover:text-[#FFEAD0] py-2 px-4 rounded hover:bg-[#115E59] duration-150 ease-linear transition-colors ${
            typeFilter === "rugged" ? "selected__type--rugged" : ''
          }`}
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`bg-[#FFEAD0] hover:text-[#FFEAD0] py-2 px-4 rounded hover:bg-black duration-150 ease-linear transition-colors ${
            typeFilter === "luxury" ? "selected__type--luxury" : ''
          }`}
        >
          Luxury
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="underline"
          >
            Clear Filter
          </button>
        ) : null}
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-6">{vanElements}</div>
    </div>
  );
}
