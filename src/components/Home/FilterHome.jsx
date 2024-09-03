import React from "react";
import { Link } from "react-router-dom";
import college from "../../assets/college.jpg";
import domain from "../../assets/domain.jpg";
import professor from "../../assets/professor.jpg";

// Card Component
const Card = ({ img, title, description }) => {
  return (
    <div style={{boxShadow: "0 0 6px 1px gray"}} className="h-fit w-[30%] p-4 shadow-lg shadow-gray-400 rounded-xl mt-8 flex flex-col justify-left gap-8">
      <div>
        <img className="h-60 rounded-md w-full" src={img} alt="" />
      </div>
      <div className="flex flex-col h-full tracking-wide justify-center items-center">
        <p className="text-xl font-semibold font-serif text-slate-600">
          {title}
        </p>
        <p className="mt-2">{description}</p>
        <Link to={"/projectdisplay"}>
          <button className="h-12 w-48 outline mt-8 rounded-xl hover:text-black text-white bg-blue-700 duration-300 hover:outline-blue-600 hover:bg-white font-semibold text-xl">
            Explore !
          </button>
        </Link>
      </div>
    </div>
  );
};

// Main FilterHome Component
const FilterHome = () => {
  // Array of filter card data
  const filters = [
    {
      id: 1,
      img: college,
      title: "College Specific Projects",
      description: "Explore colleges and their projects.",
    },
    {
      id: 2,
      img: domain,
      title: "Domain Specific",
      description: "See projects from each domain.",
    },
    {
      id: 3,
      img: professor,
      title: "Expert's Projects",
      description: "Projects by experts and professors.",
    },
  ];

  return (
    <div className="mt-12 flex h-fit w-full gap-4 justify-between">
      {filters.map((filter) => (
        <Card
          key={filter.id}
          img={filter.img}
          title={filter.title}
          description={filter.description}
        />
      ))}
    </div>
  );
};

export default FilterHome;
