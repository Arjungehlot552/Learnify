import React from "react";
import img1 from "../../assets/artificial.jpg";
import { Link } from "react-router-dom";

const ShortProjectDisplay = () => {
  const slicer = (text) => {
    return text.slice(0, 55) + "...";
  };
  return (
    <>
      {/*key={pro.id} to={`/projects/${pro.id}`}*/}
      <div
        style={{ boxShadow: "0 0 5px 0.2px blue" }}
        className="h-[400px] w-80 rounded-lg flex flex-col items-center justify-start gap-5 p-5"
      >
        <img
          className="h-[35%] w-[100%] object-cover shadow-md rounded-lg "
          src={img1}
          alt=""
        />
        <div className="flex w-full flex-col gap-2 text-lg items-start justify-start">
         <p className="w-full text-center text-2xl text-blue-700 font-semibold">
           Advanced ChatGpt
          </p>
          <p>
            <b>Institution</b>: Indian Institute of Technology, Mumbai
          </p>
          <p>
            <b>Domain</b>: Aritificial Intelligence
          </p>
          <p>
            {slicer(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nisi! Veniam sit asperiores obcaecati magnam molestias, similique quae a quia excepturi dignissimos laborum id vitae, aperiam qu Quidem cumque nesciunt commodi, dicta nihil ullam numquam consequatur enim labore quibusdam neque incidunt accusamus veniam illum perferendis minus sequi aliquam, provident itaque! Possimus sed exercitationem perspiciatis autem libero aspernatur, non est reiciendis quisquam corporis ipsum! Incidunt saepe ea iure dignissimos obcaecati. Odit voluptates numquam eius repellendus commodi laudantium consectetur quas autem est beatae et aliquid voluptatibus perspiciatis ipsa enim, blanditiis at adipisci delectus ex. Dolore, laborum error!"
            )}
          </p>
          <Link className="w-full pt-2" to="/projectdetail">
            <button className="text-white outline hover:bg-white hover:text-black text-xl hover:outline-2 hover:outline-blue-600 bg-blue-700 transition-all duration-200  font-semibold w-full rounded-lg p-2">
              Read Project
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShortProjectDisplay;
