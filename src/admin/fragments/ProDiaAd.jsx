import React, { useEffect, useState, useMemo } from "react";
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
          "https://learnify-backend-wmjk.onrender.com/api/project/getAllProjects"
        );
        const res2 = await axios.get(
          "https://learnify-backend-wmjk.onrender.com/api/mentor/projects"
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

  // Memoize the project lists
  const memoizedStudentProjects = useMemo(() => {
    return projects.map((item) => (
      <ProjectElement key={item._id} item={item} />
    ));
  }, [projects]);

  const memoizedMentorProjects = useMemo(() => {
    return mentor.length > 0 ? (
      mentor.map((item) => <ProjectElement2 key={item._id} item={item} />)
    ) : (
      <p className="text-2xl">No mentor projects!</p>
    );
  }, [mentor]);

  return (
    <div className=" flex px-28 items-center justify-center h-fit flex-col pt-16">
      <p className="text-5xl font-bold">Student's Projects</p>
      <div className="h-fit w-fit py-10 px-10 items-center justify-center shadow-xl rounded-xl flex flex-wrap gap-7">
        {memoizedStudentProjects}
      </div>
      <p className="mt-10 text-5xl font-bold">Mentor's Projects</p>
      <div className="h-fit w-fit py-16 p-10 items-center justify-center shadow-xl rounded-xl flex-wrap flex gap-10">
        {memoizedMentorProjects}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProDiaAd;
