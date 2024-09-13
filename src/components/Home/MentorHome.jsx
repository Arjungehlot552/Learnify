import React from "react";
import info from "../../assets/person.jpg";
import { Link } from "react-router-dom";

const MentorHome = () => {
  return (
    <div
      style={{ boxShadow: "0 0 6px 1px gray" }}
      className="h-fit w-full p-4 shadow-lg shadow-gray-400 rounded-xl mt-16 flex flex-col md:flex-row justify-center gap-8 items-center"
    >
      <div className="w-full p-4 md:w-[50%]">
        <img
          className="object-cover h-full w-full rounded-md"
          src={info}
          alt="Mentor"
        />
      </div>
      <div className="flex flex-col h-full w-full md:w-[50%] tracking-wide">
        <p className="text-3xl md:text-5xl font-semibold font-serif text-slate-600">
          Choose the right mentor for you!
        </p>
        <p className="mt-4 md:mt-8 text-base md:text-xl">
          Find a mentor specifically aligned with your goals and interests to support and help you achieve your full potential in your chosen domain.
        </p>
        <Link to={"/mentor"}>
          <button className="h-12 w-full md:w-48 flex justify-center items-center mt-8 md:mt-12 text-base md:text-xl rounded-xl font-semibold gap-4 hover:outline-blue-600 hover:bg-white text-white bg-blue-700 transition-all duration-500 hover:text-black">
            Find Mentor!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MentorHome;
