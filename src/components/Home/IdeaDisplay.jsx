import React from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/ideapic.jpg"

const IdeaDisplay = () => {
  
  return (
  <div className="mt-16 md:my-24 px-1 sm:px-6 lg:px-0">
    <div
      style={{ boxShadow: "0 0 5px 0.5px gray" }}
      className="h-fit p-6 w-full rounded-xl mt-8 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10"
    >
      <div className="w-full sm:w-[40%] h-fit">
        <img
          className="object-contain h-60 md:h-80 w-full rounded-lg"
          src={img2}
          alt=""
        />
      </div>
      <div className="flex flex-col h-full gap-4 md:gap-6 w-full sm:w-[60%]">
        <p className="text-3xl sm:text-5xl font-semibold font-serif text-slate-600">
          Explore Innovative Ideas!
        </p>
        <p className="mt-1 md:mt-4 text-base sm:text-xl">
          Discover a collection of creative and innovative project ideas
          shared by students and researchers. Explore various fields and find
          inspiration for your next big project.
        </p>
        <Link to={"/ideadisplay"}>
          <button className="h-12 p-3 flex items-center justify-center outline mt-2 md:mt-8 rounded-xl hover:text-black text-white bg-blue-700 duration-300 hover:outline-blue-600 hover:bg-white font-semibold text-base sm:text-xl">
            View Project Ideas
          </button>
        </Link>
      </div>
    </div>
  </div>
);

};

export default IdeaDisplay;
