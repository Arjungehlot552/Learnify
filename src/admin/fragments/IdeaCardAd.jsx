import React, { useState, useEffect } from "react";
import ScrollToTop from "../../components/Other/ScrollToTop";
import axios from "axios";
import { useThemeContext } from "../../context/ThemeContext"; // Import your context
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const IdeaCardAd = () => {
  ScrollToTop();
  const { colorMode } = useThemeContext(); // Get colorMode from context

  const Card = ({ props }) => {
    const handleDelete = async () => {
      try {
        console.log("heelo", props._id);
        const res = await axios.delete(
          `http://localhost:4000/api/admin/deleteIdea/${props._id}`,
          {},
          { withCredentials: true }
        );
        console.log(res);
        toast.success("Deleted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (error) {
        console.log("Error deleting Idea", error);
      }
    };

    return (
      <div
        style={{ boxShadow: "0 0 5px 0.5px gray" }}
        className={`flex relative flex-col p-3 rounded-sm w-full h-fit items-start justify-start gap-2 text-md ${
          colorMode === "dark"
            ? "bg-gray-800 text-gray-200"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <p
          className={`w-full flex items-center justify-center text-center text-2xl font-bold bg-clip-text text-transparent ${
            colorMode === "dark"
              ? "bg-gradient-to-r from-blue-500 via-gray-300 to-red-500"
              : "bg-gradient-to-r from-blue-700 via-gray-500 to-red-500"
          }`}
        >
          {props.title}
        </p>
        <p>
          <b className="text-lg">Posted by: </b>
          {props.email}
        </p>
        <p>{props.description}</p>
        <p className="mb-12">
          <b>Requirements:</b> {props.requirements}
        </p>
        <Link
          onClick={handleDelete}
          className="absolute bottom-3 right-3 text-center  "
        >
          <p className="py-2 rounded-lg px-3 w-fit bg-red-600 text-white text-xl">
            Delete this Idea
          </p>
        </Link>
        <ToastContainer />
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
    <div
      className={`flex min-h-[550px] pt-12 h-fit w-full ${
        colorMode === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      <div
        className={`w-full md:w-fit mx-2  md:mx-32 flex flex-col justify-start shadow-md ${
          colorMode === "dark" ? "shadow-gray-700" : "shadow-gray-400"
        } p-5`}
      >
        <p className="text-5xl font-bold text-center p-4">IDEAS</p>
        {ideas.length > 0 ? (
          <div className="flex gap-12 items-start justify-start mx-4 md:mx-28 h-fit flex-col mb-10 ">
            {ideas.map((item, key) => (
              <Card key={key} props={item} />
            ))}
          </div>
        ) : (
          <p>No Ideas yet!</p>
        )}
      </div>
    </div>
  );
};

export default IdeaCardAd;
