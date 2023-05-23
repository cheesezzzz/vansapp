import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function VanDetails() {
  const [van, setVan] = useState(null);
  const params = useParams();
  console.log(van);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="p-6 space-y-4">
      <Link to="/vans" className="underline">
        Back to all vans
      </Link>
      <div>
        {van ? (
          <div className="space-y-10">
            <img src={van.imageUrl} alt="" />

            <div className="space-y-4">
              <div
                className={`flex justify-center items-center py-2 px-5 rounded-md bg-black text-[#FFEAD0] w-fit font-medium ${van.type}`}
              >
                <p>{van.type}</p>
              </div>
              <h2 className=" text-3xl font-semibold">{van.name}</h2>
              <p className="font-semibold text-lg ">
                ${van.price}
                <span className="font-normal">/day</span>
              </p>
              <p>{van.description}</p>
              <Link className="bg-[#FF8C38] font-semibold rounded-md p-2 text-white w-full flex justify-center items-center">
                Rent this van
              </Link>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}
