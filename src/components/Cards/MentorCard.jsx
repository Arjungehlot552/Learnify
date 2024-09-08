import React from "react";
import img1 from "../../assets/professor.jpg";
import { Link } from "react-router-dom";

const MentorCard = ({ props }) => {
  return (
    <div className="h-fit p-3 w-96 shadow-lg shadow-gray-400 flex flex-col items-center gap-3 rounded-xl overflow-hidden">
      <img
        className="w-full object-cover shadow-md rounded-lg h-[60%]"
        src={img1}
        alt=""
      />
      <div className="flex w-full flex-col gap-2 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-semibold">{props.name}</p>
          <p>{props.designation}</p>
          <p>{props.company}</p>
        </div>
        <a href={props.linked} target="_blank" rel="noopener noreferrer">
          <button className="outline outline-slate-300 hover:bg-white bg-blue-700 hover:text-black text-lg text-white transition-all duration-200 font-semibold w-full rounded-lg p-2">
            Connect via LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
};

export default MentorCard;
