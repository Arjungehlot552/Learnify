import React from "react";
import info from "../../assets/person.jpg";
import { Link } from "react-router-dom";

const MentorHome = () => {
  return (
    <div style={{boxShadow: "0 0 6px 1px gray"}}  className="h-fit w-full p-4 shadow-lg shadow-gray-400 rounded-xl mt-16 flex justify-left gap-8 items-center justify-center ">
      <div className="w-[50%]">
        <img className=" object-cover h-full w-full rounded-md" src={info} alt="" />
      </div>
      <div className="flex flex-col h-full w-[60%] tracking-wide">
        <p className="text-5xl font-semibold font-serif text-slate-600">
          Choose right mentor for you!
        </p>
        <p className="mt-8 text-xl">
        Mentor specifically aligned with your goals and interests to support and to help you achieve your full potential in your chosen domain.
        </p>
        <Link to={"/mentor"}>
          <button className="h-12 flex outline w-48 justify-center items-center mt-12 text-xl rounded-xl font-semibold gap-4 hover:outline-blue-600 hover:bg-white text-white bg-blue-700 transition-all duration-500 hover:text-black">
            Find Mentor !
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MentorHome;
