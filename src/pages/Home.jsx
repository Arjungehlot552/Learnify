import React, { useEffect, useState } from "react";
import i1 from "../assets/home-illustration.svg";
import Search from "../components/Home/Search.jsx";
import ProjectCards from "../components/Home/ProjectCards";
import MentorHome from "../components/Home/MentorHome";
import FilterHome from "../components/Home/FilterHome";
import IdeaHome from "../components/Home/IdeaHome";
import IdeaDisplay from "../components/Home/IdeaDisplay.jsx";
import useMentorStore from "../store/mentorStore.js";

const Home = () => {
  const { mentor } = useMentorStore((state) => ({
    mentor: state.mentor,
  }));

  return (
    <>
      <div className="px-4 md:px-10 lg:px-40">
        <div className="w-full md:pt-12 h-fit mt-16 flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col items-start px-4 md:px-6 lg:w-[50%]">
            <p className="text-2xl flex flex-col gap-1 md:gap-3 md:text-4xl lg:text-5xl font-serif md:tracking-wide md:leading-loose font-bold text-slate-600">
              <p>Empower Your Ideas,</p> <p>Elevate Your Projects,</p> <p> Seamless
              Uploading,</p> <p>Limitless Possibilities!</p> 
            </p>
            <p className="text-base md:text-lg lg:text-xl tracking-wide select-none mt-4">
              Showcase your
              <span className="text-green-500"> projects</span> to all the
              enthusiasts out there.
            </p>
            <div className="mt-8 lg:mt-16 flex flex-col w-full"></div>
          </div>
          <div className="w-full lg:w-[50%] flex justify-center items-center mt-8 lg:mt-0">
            <img
              src={i1}
              alt="Illustration"
              className="w-full max-w-sm lg:max-w-md"
            />
          </div>
        </div>
        <div className="mt-8">
          <Search />
          <ProjectCards />
          <IdeaDisplay />
          <MentorHome />
          <FilterHome />
          {!mentor && <IdeaHome />}
        </div>
      </div>
    </>
  );
};

export default Home;
