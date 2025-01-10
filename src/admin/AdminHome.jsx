import React, { useEffect, useState } from "react";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaUserAlt } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import mentor from "../assets/professor.avif";
import idea from "../assets/ideapic.jpg";
import projects from "../assets/projects.jpeg";
import users from "../assets/user.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export const AdminHome = () => {
  const [stu, setStu] = useState();
  const [ideas, setIdeas] = useState();
  const [project, setProjects] = useState();
  const [mentors, setMentors] = useState();

  useEffect(() => {
    const fetchVals = async () => {
      try {
        const res = await axios.get(
          "https://learnify-backend-wmjk.onrender.com/api/admin/getValues"
        );
        console.log(res);
        setStu(res.data.data.users);
        setIdeas(res.data.data.ideas);
        setProjects(res.data.data.projects);
        setMentors(res.data.data.mentors);
      } catch (error) {
        console.log("Error fetching values", error);
      }
    };
    fetchVals();
  }, []);

  return (
    <div className="h-fit min-h-screen rounded-2xl mx-4 sm:mx-10 md:mx-20 lg:mx-40 mt-10 sm:mt-16 md:mt-20 p-4 sm:p-6 md:p-10 pb-0 shadow-md shadow-gray-400 gap-10 sm:gap-12 md:gap-20 flex items-center justify-center flex-col">
  <div className="border-b-2 h-fit pb-5 -mt-10 sm:-mt-14 md:-mt-20 w-full items-center justify-center flex">
    <p className="font-bold text-2xl sm:text-3xl md:text-4xl w-fit h-fit outline p-2 ">
      ADMIN DASHBOARD
    </p>
  </div>

  <div className="flex flex-wrap gap-6 md:gap-12 items-center justify-center">
    <div className="p-2 w-56 flex bg-red-600 rounded-lg items-center justify-between gap-2 flex-col">
      <p className="text-base sm:text-lg md:text-xl font-semibold">
        Total Mentors
      </p>
      <LiaChalkboardTeacherSolid size={48} className="text-gray-400" />
      <div className="px-2 text-white font-semibold text-3xl sm:text-4xl md:text-5xl rounded-lg">
        {mentors}
      </div>
    </div>
    <div className="p-2 w-56 flex bg-red-600 rounded-lg items-center justify-between gap-2 flex-col">
      <p className="text-base sm:text-lg md:text-xl font-semibold">
        Total Ideas Posted
      </p>
      <GiTeamIdea size={48} className="text-gray-400" />
      <div className="px-4 text-white font-semibold text-3xl sm:text-4xl md:text-5xl rounded-lg">
        {ideas}
      </div>
    </div>
    <div className="p-2 w-56 flex bg-red-600 rounded-lg items-center justify-between gap-2 flex-col">
      <p className="text-base sm:text-lg md:text-xl font-semibold">
        Total Projects Posted
      </p>
      <GoProjectSymlink size={48} className="text-gray-400" />
      <div className="px-4 text-white font-semibold text-3xl sm:text-4xl md:text-5xl rounded-lg">
        {project}
      </div>
    </div>
    <div className="p-2 w-56 flex bg-red-600 rounded-lg items-center justify-between gap-2 flex-col">
      <p className="text-base sm:text-lg md:text-xl font-semibold">
        Total Users Registered
      </p>
      <FaUserAlt size={48} className="text-gray-400" />
      <div className="px-4 text-white font-semibold text-3xl sm:text-4xl md:text-5xl rounded-lg">
        {stu}
      </div>
    </div>
  </div>


  <div className="w-full flex flex-wrap justify-center gap-6 md:gap-10 px-6">
    <div className="w-56 h-fit py-5 shadow-md p-5 shadow-red-400 flex items-center justify-center flex-col gap-5 rounded-lg">
      <p className="text-2xl sm:text-3xl font-semibold outline outline-2 w-fit px-1 outline-gray-300 rounded-md">
        Mentors
      </p>
      <img src={mentor} alt="" className="h-16 sm:h-20" />
      <div>
        <Link to="/mentor-admin">
          <button className="outline hover:outline-3 hover:outline-blue-800 px-2 py-2 rounded-lg bg-blue-700 hover:bg-white hover:text-black text-white text-sm sm:text-lg font-semibold">
            View All Mentors
          </button>
        </Link>
      </div>
    </div>
    <div className="w-56 h-fit py-5 shadow-md p-5 shadow-red-400 flex items-center justify-center flex-col gap-5 rounded-lg">
      <p className="text-2xl sm:text-3xl font-semibold outline-2 outline w-fit px-1 outline-gray-300 rounded-md">
        Ideas
      </p>
      <img src={idea} alt="" className="h-16 sm:h-20" />
      <div>
        <Link to={"/admin-ideas-page"}>
          <button className="outline hover:outline-3 hover:outline-blue-800 px-2 py-2 rounded-lg bg-blue-700 hover:bg-white hover:text-black text-white text-sm sm:text-lg font-semibold">
            View All Ideas
          </button>
        </Link>
      </div>
    </div>
    <div className="w-56 h-fit py-5 shadow-md p-5 shadow-red-400 flex items-center justify-center flex-col gap-5 rounded-lg">
      <p className="text-2xl sm:text-3xl font-semibold outline-2 outline w-fit px-1 outline-gray-300 rounded-md">
        Projects
      </p>
      <img src={projects} alt="" className="h-16 sm:h-20" />
      <div>
        <Link to={"/admin-project-detail"}>
          <button className="outline hover:outline-3 hover:outline-blue-800 px-2 py-2 rounded-lg bg-blue-700 hover:bg-white hover:text-black text-white text-sm sm:text-lg font-semibold">
            View All Projects
          </button>
        </Link>
      </div>
    </div>
    <div className="w-56 h-fit py-5 shadow-md p-5 mb-6 shadow-red-400 flex items-center justify-center flex-col gap-5 rounded-lg">
      <p className="text-2xl sm:text-3xl font-semibold outline- outline w-fit px-1 outline-gray-300 rounded-md">
        Users
      </p>
      <img src={users} alt="" className="h-16 sm:h-20" />
      <div>
        <Link to={"/admin-users"}>
          <button className="outline hover:outline-3 hover:outline-blue-800 px-2 py-2 rounded-lg bg-blue-700 hover:bg-white hover:text-black text-white text-sm sm:text-lg font-semibold">
            View All Users
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

  );
};
