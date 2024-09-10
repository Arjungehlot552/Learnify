import React from "react";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaUserAlt } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import mentor from "../assets/professor.avif";
import idea from "../assets/ideapic.jpg";
import projects from "../assets/projects.jpeg";
import users from "../assets/user.jpg";

export const AdminHome = () => {
  return (
    <div className="h-fit min-h-screen rounded-2xl mx-40 mt-20 p-10 pb-0 shadow-md shadow-gray-400 gap-20 flex items-center justify-center flex-col">
      <div className="border-b-2 h-fit pb-5 -mt-20 w-full items-center justify-center flex">
        <p className="font-bold text-4xl w-fit h-fit outline p-2 ">
          ADMIN DASHBOARD
        </p>
      </div>
      <div className="flex items-center justify-center gap-20">
        <div className=" p-2 w-56 flex bg-red-600 rounded-lg items-center justify-between gap-2 flex-col ">
          <p className="text-lg font-semibold">Total Registerd Mentors</p>
          <LiaChalkboardTeacherSolid size={56} className="text-gray-400" />
          <div className="px-2 text-white font-semibold text-5xl rounded-lg ">
            5000
          </div>
        </div>
        <div className=" p-2 w-56 flex bg-red-600 rounded-lg items-center justify-between gap-2 flex-col ">
          <p className="text-xl font-semibold">Total Ideas Posted</p>
          <GiTeamIdea size={56} className="text-gray-400" />
          <div className="px-6 text-white font-semibold text-5xl rounded-lg ">
            5000
          </div>
        </div>
        <div className="p-2 w-56 flex bg-red-600 rounded-lg items-center justify-between gap-2 flex-col ">
          <p className="text-xl font-semibold">Total Projects Posted </p>
          <GoProjectSymlink size={56} className="text-gray-400" />
          <div className="px-6 text-white font-semibold text-5xl rounded-lg ">
            5000
          </div>
        </div>
        <div className="p-2 w-56 flex bg-red-600 rounded-lg items-center justify-between gap-2 flex-col">
          <p className="text-xl font-semibold">Total Users Registered</p>
          <FaUserAlt size={56} className="text-gray-400" />
          <div className="px-6 text-white font-semibold text-5xl rounded-lg ">
            5000
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-6">
        <div className="w-56 h-fit py-5 shadow-md p-5 shadow-red-400 flex items-center justify-center flex-col gap-5 rounded-lg">
          <p className="text-3xl font-semibold outline outline-2 w-fit px-1 outline-gray-300 rounded-md">
            Mentors
          </p>
          <img src={mentor} alt="" className="h-20" />
          <div>
            <button className="outline hover:outline-3 hover:outline-blue-800 px-2 py-2 rounded-lg bg-blue-700 hover:bg-white hover:text-black text-white text-xl font-semibold">
              View All Mentors
            </button>
          </div>
        </div>
        <div className="w-56 h-fit py-5 shadow-md p-5 shadow-red-400 flex items-center justify-center flex-col gap-5 rounded-lg">
          <p className="text-3xl font-semibold outline-2 outline w-fit px-1 outline-gray-300 rounded-md">
            Ideas
          </p>
          <img src={idea} alt="" className="h-20" />
          <div>
            <button className="outline hover:outline-3 hover:outline-blue-800 px-2 py-2 rounded-lg bg-blue-700 hover:bg-white hover:text-black text-white text-xl font-semibold">
              View All Ideas
            </button>
          </div>
        </div>
        <div className="w-56 h-fit shadow-md p-5 py-5 shadow-red-400 flex items-center justify-center flex-col gap-5 rounded-lg">
          <p className="text-3xl font-semibold outline-2 outline w-fit px-1 outline-gray-300 rounded-md">
            Projects
          </p>
          <img src={projects} alt="" className="h-20" />
          <div>
            <button className="outline hover:outline-3 hover:outline-blue-800 px-2 py-2 rounded-lg bg-blue-700 hover:bg-white hover:text-black text-white text-xl font-semibold">
              View All Projects
            </button>
          </div>
        </div>
        <div className="w-56 h-fit py-5 shadow-md p-5 shadow-red-400 flex items-center justify-center flex-col gap-5 rounded-lg">
          <p className="text-3xl font-semibold outline- outline w-fit px-1 outline-gray-300 rounded-md">
            Users
          </p>
          <img src={users} alt="" className="h-20" />
          <div>
            <button className="outline hover:outline-3 hover:outline-blue-800 px-2 py-2 rounded-lg bg-blue-700 hover:bg-white hover:text-black text-white text-xl font-semibold">
              View All Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
