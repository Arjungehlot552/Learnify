import React, { useEffect, useState } from "react";
import ProjectElement from "../components/Cards/ShortProjectDisplay";
import ScrollToTop from "../components/Other/ScrollToTop";
import axios from 'axios'
import {toast,ToastContainer} from "react-toastify"
import { useParams } from "react-router-dom";


const ProjectDisplay = () => {
  const {domain} = useParams()
  const [projects,setProjects] = useState([])
  ScrollToTop()
  
  useEffect(()=>{
    const fetchProjects = async() => {
      try {
        const res = await axios.get("http://localhost:4000/api/project/getAllProjects")
        console.log(res.data.data);
        setProjects(res.data.data.filter((item)=>(item.domain == domain)))
      } catch (error) {
        console.log("Error while fetching projects!");
        toast.error("Can't fetch projects!")
      }
    }

    fetchProjects()
  },[])
  
  return (
    <div className="pl-28 pr-28 pt-20 flex flex-col items-center justify-center h-fit min-h-[700px] ">
      <p className="text-4xl font-bold">{domain}</p>
      <div className="h-fit w-fit py-16 px-10 shadow-xl rounded-xl flex justify-center flex-wrap gap-20">
      {projects.length > 0 ? (projects.map((item) => (
      <ProjectElement key={item._id} item={item} />
    ))):(<p className="text-4xl">No projects found for this domain!</p>)}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ProjectDisplay;
