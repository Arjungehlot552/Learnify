import React, { useEffect, useState } from "react";
import ScrollToTop from "../Other/ScrollToTop";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useThemeContext } from "../../context/ThemeContext";

const ProjectDetail = () => {
  ScrollToTop();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const { colorMode } = useThemeContext();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `https://learnify-backend-wmjk.onrender.com/api/project/getProjectById/${id}`
        );
        setProject(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log("Error fetching project details:", error);
        toast.error("Can't fetch project details!");
      }
    };
    if (id) {
      fetchProject();
    }
  }, [id]);

  if (!project) {
    return <div>Loading project details...</div>;
  }

  const gradientTextStyle =
    colorMode === "dark"
      ? {
          background:
            "linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }
      : {};

  return (
    <div
      className={`h-fit min-h-[800px] w-fit -mb-20 pb-20 bg-gradient-to-tr ${
        colorMode === "light"
          ? "from-red-100 to-blue-100 via-white"
          : "from-gray-800 to-gray-900 via-gray-700"
      } flex items-center justify-center py-10 -mb-20 text-lg`}
    >
      <div
        style={{ boxShadow: "0 0 5px 0.5px gray" }}
        className={`w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] ${
          colorMode === "dark"
            ? "bg-gray-900 text-gray-200"
            : "bg-white text-gray-800"
        } flex p-4 sm:p-8 rounded-lg flex-col items-start justify-center gap-5`}
      >
        <img
          src={project[0].image}
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
          alt=""
        />
        <p>
          <strong style={gradientTextStyle}>Name:</strong> {project[1].name}
        </p>
        <p>
          <strong style={gradientTextStyle}>Email:</strong> {project[1].email}
        </p>
        <p>
          <strong style={gradientTextStyle}>Project Name:</strong>{" "}
          {project[0].title}
        </p>
        <p>
          <strong style={gradientTextStyle}>Domain:</strong> {project[0].domain}
        </p>
        <p>
          <strong style={gradientTextStyle}>Abstract:</strong>{" "}
          {project[0].abstract}
        </p>
        <p>
          <strong style={gradientTextStyle}>Description:</strong>{" "}
          {project[0].description}
        </p>
        <p>
          <strong style={gradientTextStyle}>YouTube Link:</strong>{" "}
          <a
            href={project[0].videolink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project[0].videolink}
          </a>
        </p>
        <p>
          <strong style={gradientTextStyle}>GitHub Link:</strong>{" "}
          <a
            href={project[0].githublink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project[0].githublink}
          </a>
        </p>
        <p>
          <strong style={gradientTextStyle}>College/University Name:</strong>{" "}
          {project[0].collegename}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProjectDetail;
