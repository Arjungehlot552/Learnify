import React, { useEffect, useState } from "react";
import ProjectElement from "../components/Cards/ShortProjectDisplay";
import ScrollToTop from "../components/Other/ScrollToTop";
import axios from 'axios'
import {toast,ToastContainer} from "react-toastify"


const ProjectDisplay = () => {
  const [projects,setProjects] = useState([])
  ScrollToTop()
  
  useEffect(()=>{
    const fetchProjects = async() => {
      try {
        const res = await axios.get("http://localhost:4000/api/project/getAllProjects")
        console.log(res.data.data);
        setProjects(res.data.data)
      } catch (error) {
        console.log("Error while fetching projects!");
        toast.error("Can't fetch projects!")
      }
    }

    fetchProjects()
  },[])
  
  return (
    <div className="pl-28 pr-28 pt-20 flex items-center justify-center h-fit ">
      <div className="h-fit w-fit py-16 px-10 shadow-xl rounded-xl flex justify-center flex-wrap gap-20">
      {projects.map((item) => (
      <ProjectElement key={item._id} item={item} />
    ))}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ProjectDisplay;
