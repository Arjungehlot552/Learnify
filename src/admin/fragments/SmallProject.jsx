import React from "react";
import { Link } from "react-router-dom";

const SmallProject = ({ item }) => {
  const slicer = (text) => {
    return text.slice(0, 55) + "...";
  };
  return (
    <>
      <div
        style={{ boxShadow: "0 0 5px 0.2px blue" }}
        className="h-[400px] relative w-80 rounded-lg flex flex-col items-center justify-start gap-2 p-3"
      >
        <img
          className="h-[35%] w-[100%] object-cover shadow-md rounded-lg "
          src={item.image}
          alt=""
        />
        <div className="flex w-full flex-col gap-2 text-md items-start justify-start">
          <p className="w-full text-center text-2xl text-blue-700 font-semibold">
            {item.title}
          </p>
          <p>
            <b>Institution</b>: {item.collegename}
          </p>
          <p>
            <b>Domain</b>: {item.domain}
          </p>
          <p>{slicer(item.description)}</p>
          <div className="gap-3 flex absolute bottom-3  w-full">
            <Link
              to={`/admin-project-detail/${item._id}`}
              className=""
            >
              <button className=" text-white outline hover:bg-white hover:text-black text-xl hover:outline-2 hover:outline-blue-600 bg-blue-700 transition-all duration-200  font-semibold rounded-lg p-2">
                Read Project
              </button>
            </Link>
            <Link className="text-center flex items-center justify-center">
              <p className="py-2 rounded-lg px-3 w-fit bg-red-600 text-white text-xl">
                Delete Project
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallProject;