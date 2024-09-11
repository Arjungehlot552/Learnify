import React, { useEffect, useState } from "react";
import ProjectElement from "../fragments/SmallProject"
import ScrollToTop from "../../components/Other/ScrollToTop";
import axios from 'axios'
import {toast,ToastContainer} from "react-toastify"


const ProDiaAd = () => {
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
    <div className="pl-28 pr-28 flex items-center justify-center h-fit ">
      <div className="h-fit w-fit py-16 pl-10 items-center justify-center shadow-xl rounded-xl flex gap-10">
      {projects.map((item) => (
      <ProjectElement key={item._id} item={item} />
    ))}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ProDiaAd;
