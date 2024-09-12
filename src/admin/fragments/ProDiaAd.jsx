import React, { useEffect, useState } from "react";
import ProjectElement from "../fragments/SmallProject";
import ProjectElement2 from "../fragments/SmallProject2";
import ScrollToTop from "../../components/Other/ScrollToTop";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const ProDiaAd = () => {
  const [projects, setProjects] = useState([]);
  const [mentor, setMentors] = useState([]);
  ScrollToTop();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/project/getAllProjects"
        );
        const res2 = await axios.get(
          "http://localhost:4000/api/mentor/projects"
        );
        console.log(res.data.data);
        setMentors(res2.data.data);
        setProjects(res.data.data);
      } catch (error) {
        console.log("Error while fetching projects!");
        toast.error("Can't fetch projects!");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="pl-28 pr-28 flex items-center justify-center h-fit flex-col pt-16">
      <p className="text-4xl font-bold">Students Projects</p>
      <div className="h-fit w-fit py-16 pl-10 items-center justify-center shadow-xl rounded-xl flex flex-wrap gap-10">
      
        {projects.map((item) => (
          <ProjectElement key={item._id} item={item} />
        ))}
      </div>
      <p className="mt-10 text-4xl font-bold">Mentors Projects</p>
      <div className="h-fit w-fit py-16 p-10 items-center justify-center shadow-xl rounded-xl flex-wrap flex gap-10">
        {mentor.length > 0 ? (mentor.map((item) => (
          <ProjectElement2 key={item._id} item={item} />
        ))) : (<p className="text-2xl">No mentor projects!</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProDiaAd;
