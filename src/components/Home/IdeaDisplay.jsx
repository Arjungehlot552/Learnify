import React from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/ideapic.jpg"

const IdeaDisplay = () => {
  
  return (
    <div className="my-24">
      <div style={{boxShadow: "0 0 5px 0.5px gray"}} className="h-fit p-6 w-full rounded-xl mt-8 flex  justify-between items-center gap-10">
        <div className=" w-[40%] h-fit object-cover">
          <img
            className="object-contain h-80 w-full rounded-lg"
            src={img2}
            alt=""
          />
        </div>
        <div className="flex flex-col h-full gap-6 w-[60%]">
          <p className="text-5xl font-semibold font-serif text-slate-600">
            Explore Innovative Ideas!
          </p>
          <p className="mt-4 text-xl">
            Discover a collection of creative and innovative project ideas
            shared by students and researchers. Explore various fields and find
            inspiration for your next big project.
          </p>
          <Link className="" to={"/ideadisplay"}>
            <button className="h-12 p-3 flex items-center justify-center outline mt-8 rounded-xl hover:text-black text-white bg-blue-700 duration-300 hover:outline-blue-600 hover:bg-white font-semibold text-xl">
              View Project Ideas
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdeaDisplay;
