import AbtImg from "/src/assets/images/about-hero.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <img src={AbtImg} alt="" />
      <div className="px-6">
        <div className="space-y-6 mt-8">
          <h1 className="font-bold text-3xl">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="bg-light-orange p-8 my-12 space-y-4">
          <h2 className="text-2xl font-semibold pb-7">Your destination is waiting. Your van is ready.</h2>
          <Link to='/vans' className="py-3 px-4 bg-black text-white font-semibold rounded-md">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}
