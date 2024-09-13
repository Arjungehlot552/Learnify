import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
          to={`/projectdetail/${project._id}`}
          className="text-blue-500 hover:underline"
        >
          View Full Project
        </Link>
      </div>
    </div>
  </div>
);

const College = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/project/groupProjects");
        setData(res.data.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };
    fetchData();
  }, []);

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };


  const filteredData = data.filter((uni) =>
    uni._id.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container mx-auto px-28 pt-10">
     
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by college name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border outline-none border-blue-500 rounded-md w-full"
        />
      </div>

   
      {filteredData.length > 0 ? (
        filteredData.map((uni) => (
          <div className='' key={uni._id}>
            <h1 className="text-2xl font-bold mb-6">{uni._id}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {uni.projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No universities found.</p>
      )}
    </div>
  );
};

export default College;