import React, { useState, useEffect } from "react";
import ScrollToTop from "../Other/ScrollToTop";
import axios from "axios";
import { useThemeContext } from "../../context/ThemeContext"; // Import your context

const ProjectIdea = () => {
  ScrollToTop();
  const { colorMode } = useThemeContext(); // Get colorMode from context

  const Card = ({ props }) => {
    return (
      <div
        style={{ boxShadow: "0 0 5px 0.5px gray" }}
        className={`flex flex-col p-4 rounded-xl w-[350px] h-96 items-start justify-start gap-4 text-md ${colorMode === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'}`}
      >
        <p className={`w-full flex items-center justify-center text-center text-2xl font-bold bg-clip-text text-transparent ${colorMode === 'dark' ? 'bg-gradient-to-r from-blue-500 via-gray-300 to-red-500' : 'bg-gradient-to-r from-blue-700 via-gray-500 to-red-500'}`}>
          {props.title}
        </p>
        <p>
          <b className="text-lg">Posted by: </b>{props.email}
        </p>
        <p>
          {props.description}
        </p>
        <p>
          {" "}
          <b>Requirements:</b> {props.requirements}
        </p>
      </div>
    );
  };

  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        console.log("Fetching ideas...");
        const res = await axios.get("http://localhost:4000/api/ideas/getIdeas");
        console.log(res.data.data);
        setIdeas(res.data.data);
      } catch (error) {
        console.log("Error while fetching ideas!", error);
      }
    };
    fetchIdeas();
  }, []);

  return (
    <div className={`flex min-h-[650px] h-fit w-full pt-20 ${colorMode === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
      <div className={`w-fit mx-32 flex justify-center shadow-md ${colorMode === 'dark' ? 'shadow-gray-700' : 'shadow-gray-400'} p-5`}>
        {
          ideas.length > 0 ? (
            <div className="flex gap-12 items-start justify-start mx-28 h-fit flex-wrap">
              {ideas.map((item, key) => (
                <Card key={key} props={item} />
              ))}
            </div>
          ) : (
            <p>No Ideas yet!</p>
          )
        }
      </div>
    </div>
  );
};

export default ProjectIdea;
