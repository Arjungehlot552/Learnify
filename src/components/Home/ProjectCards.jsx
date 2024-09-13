import React from "react";
import i1 from "../../assets/computer.jpg";
import i2 from "../../assets/artificial.jpg";
import i3 from "../../assets/civil.jpg";
import i4 from "../../assets/datascience.jpg";
import i5 from "../../assets/mechanical.jpg";
import i6 from "../../assets/physics.jpg";
import i7 from "../../assets/chemistry.jpg";
import { ChevronRight, FileUp } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCards = () => {
  const projects = [
    {
      id: 1,
      title: "Computer Science Projects",
      img: i1,
      link: "/projectdisplay/CS",
    },
    {
      id: 2,
      title: "Artificial Intelligence Projects",
      img: i2,
      link: "/projectdisplay/AI",
    },
    {
      id: 3,
      title: "Civil Engineering Projects",
      img: i3,
      link: "/projectdisplay/Civil",
    },
    {
      id: 4,
      title: "Data Science Projects",
      img: i4,
      link: "/projectdisplay/DataScience",
    },
    {
      id: 5,
      title: "Mechanical Engineering Projects",
      img: i5,
      link: "/projectdisplay/Mechanical",
    },
    { id: 6, title: "Physics Projects", img: i6, link: "/projectdisplay/Physics" },
    { id: 7, title: "Chemistry Projects", img: i7, link: "/projectdisplay/Chemistry" },
  ];

  const Card = (props) => {
    return (
      <div className="h-56 w-56 outline rounded-md outline-slate-400 relative group">
        <Link to={props.link}>
          <img className="h-full object-cover" src={props.img} alt={props.title} />
          <div className="absolute h-full w-full rounded-md bg-black/30 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
            <p className="text-white font-semibold text-xl text-center">
              {props.title}
            </p>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div
      style={{ boxShadow: "0 0 5px 0.5px gray" }}
      className="mt-20 p-4 shadow-xl rounded-xl"
    >
      <p className="text-2xl font-bold font-serif text-slate-600">
        Available Projects
      </p>
      <div className="flex items-center justify-between gap-12 w-full p-4 mt-8">
        {projects.slice(0, 4).map((project) => (
          <Card key={project.id} title={project.title} img={project.img} link={project.link} />
        ))}
      </div>
      <div className="flex flex-col w-full gap-12 p-4 mt-8">
        <div className="w-full flex justify-between">
          {projects.slice(4, 7).map((project) => (
            <Card key={project.id} title={project.title} img={project.img} link={project.link} />
          ))}
          <Link to={"/projectdisplay/Others"}>
            <div className="h-56 w-56 outline rounded-md outline-slate-400 flex justify-center items-center relative group">
              <p className="font-bold text-2xl uppercase transition-all duration-300 group-hover:text-white z-20">
                View More
              </p>
              <ChevronRight className="group-hover:text-white duration-300 z-20" />
              <div className="absolute h-full w-full rounded-md bg-black/50 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
      <Link to={"/upload-project"}>
        <button className="flex outline w-full justify-center items-center mt-12 h-12 rounded-xl font-semibold gap-4 hover:outline-blue-600 hover:bg-white text-white bg-blue-700 transition-all duration-500 hover:text-black">
          Upload Your Project
          <FileUp />
        </button>
      </Link>
    </div>
  );
};

export default ProjectCards;
