import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/Other/ScrollToTop";
import axios from "axios";
import { useThemeContext } from "../context/ThemeContext"; // Import your context
import { Link } from "react-router-dom";
import useUserStore from "../store/userStore";

const UserProfile = () => {
  ScrollToTop();
  const { colorMode } = useThemeContext(); // Get colorMode from context

  const Card = ({ props }) => {
    return (
      <div
        style={{ boxShadow: "0 0 5px 0.5px gray" }}
        className={`flex relative flex-col p-3 rounded-xl w-full h-fit items-start justify-start gap-2 text-md ${
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

        <p>{props.description}</p>
        <p>
          {" "}
          <b>Requirements:</b> {props.requirements}
        </p>
        <Link
          to={"/deleteidea"}
          className="absolute bottom-3 right-3 text-center  "
        >
          <p className="py-2 rounded-lg px-3 w-fit bg-red-600 text-white text-xl">
            Delete this Idea
          </p>
        </Link>
      </div>
    );
  };

  const [ideas, setIdeas] = useState([]);

  const { user } = useUserStore((state) => ({ user: state.user }));

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        // console.log("Fetching ideas...");
        // console.log(user);
        const res = await axios.get(
          `http://localhost:4000/api/student/getUserIdea/${user.email}`,
          { withCredentials: true }
        );
        console.log(res.data.data);
        setIdeas(res.data.data);
      } catch (error) {
        console.log("Error while fetching ideas!", error);
      }
    };
    fetchIdeas();
  }, []);

  return (
    <div className="px-40 pt-20 w-full h-fit min-h-[800px] flex flex-col gap-16">
      <div><div className="w-full shadow-md shadow-gray-400 rounded-lg h-fit py-6 px-40">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p></p>
        </div></div>
      <div>
        <div
          className={`flex h-fit w-full ${
            colorMode === "dark"
              ? "bg-gray-900 text-gray-200"
              : "bg-gray-50 text-gray-800"
          }`}
        >
          <div
            className={`w-full flex justify-center rounded-lg shadow-md ${
              colorMode === "dark" ? "shadow-gray-700" : "shadow-gray-400"
            } p-5`}
          >
            {ideas.length > 0 ? (
              <div className="flex gap-12 items-start justify-start mx-28 h-fit w-full flex-wrap">
                {ideas.map((item, key) => (
                  <Card key={key} props={item} />
                ))}
              </div>
            ) : (
              <p>No Ideas yet!</p>
            )}
          </div>
        </div>
      </div>
      <div>ideas</div>
    </div>
  );
};

export default UserProfile;