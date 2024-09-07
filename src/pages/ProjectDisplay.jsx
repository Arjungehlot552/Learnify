import React from "react";
import ProjectElement from "../components/Cards/ShortProjectDisplay";
import ScrollToTop from "../components/Other/ScrollToTop";


const ProjectDisplay = () => {
  ScrollToTop()
  const projects = [1, 2, 3, 4, 5, 6];
    // map the projects here
  return (
    <div className="pl-28 pr-28">
      <div className="h-fit w-full pt-16 shadow-xl rounded-xl flex justify-start flex-wrap gap-10">
      {projects.map((index) => (
      <ProjectElement key={index} />
    ))}
      </div>
    </div>
  );
};

export default ProjectDisplay;
