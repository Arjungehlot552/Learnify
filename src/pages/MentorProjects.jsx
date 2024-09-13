import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/Other/ScrollToTop';
import { toast, ToastContainer } from 'react-toastify';

const ProjectCard = ({ project }) => (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{project.abstract}</p>
        <p className="mt-4 text-sm text-gray-600">
          <span className="font-semibold">Domain:</span> {project.domain}
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <span className="font-semibold">Email:</span> {project.email}
        </p>
        <div className="mt-4 flex space-x-4">
          <a
            href={project.videolink}
            className="text-blue-500 hover:underline"
          >
            Video
          </a>
          <a
            href={project.githublink}
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          <Link
            to={`/projectdetail-mentor/${project._id}`}
            className="text-blue-500 hover:underline"
          >
            View Full Project
          </Link>
        </div>
      </div>
    </div>
);
  

const MentorProjects = () => {
    const [projects,setProjects] = useState([])
  ScrollToTop()
  
  useEffect(()=>{
    const fetchProjects = async() => {
      try {
        const res = await axios.get("http://localhost:4000/api/mentor/projects")
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
      <div className="h-fit min-h-[600px] w-fit py-16 px-10 shadow-xl rounded-xl flex justify-center flex-wrap gap-20">
      {projects.length > 0 ? (projects.map((item) => (
      <ProjectCard key={item._id} project={item} />
    ))):(<p className='text-5xl'>No projects found!</p>)}
      </div>
      <ToastContainer/>
    </div>
  );
  };

  
export default MentorProjects