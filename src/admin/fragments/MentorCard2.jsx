import React, { useEffect, useState } from "react";
import ScrollToTop from "../../components/Other/ScrollToTop";
import img1 from "../../assets/professor.avif";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const MentorCa = ({ props }) => {
  const handleDelete = async () => {
    try {
      console.log("heelo", props._id);
      const res = await axios.delete(
        `http://localhost:4000/api/admin/deleteMentor/${props._id}`,
        {},
        { withCredentials: true }
      );
      console.log(res);
      toast.success("Deleted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log("Error deleting Mentor", error);
    }
  };

  return (
    <div className="h-[360px] md:h-[400px] p-3 w-80 md:w-96 shadow-lg shadow-gray-400 flex flex-col items-center gap-3 rounded-xl overflow-hidden">
      <img
        className="object-cover w-full shadow-md rounded-lg h-48 lg:h-56"
        src={props.image ? props.image : img1}
        alt="mentor"
      />
      <div className="flex w-full flex-col gap-2 justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-lg font-semibold">{props.name}</p>
          <p>{props.designation}</p>
          <p>{props.company}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <a href={props.linked} target="_blank" rel="noopener noreferrer">
            <button className="outline outline-slate-300 hover:bg-white bg-blue-700 hover:text-black text-lg text-white transition-all duration-200 font-semibold w-32 lg:w-44 rounded-lg p-2">
              LinkedIn
            </button>
          </a>
          <button
            onClick={handleDelete}
            className="outline outline-slate-300 hover:bg-white bg-red-700 hover:text-black text-lg text-white transition-all duration-200 font-semibold w-32 lg:w-44 rounded-lg p-2"
          >
            Delete
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

const MentorCard2 = () => {
  ScrollToTop();
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/mentor/getMentors"
        );
        console.log(res.data.data);
        setMentors(res.data.data);
      } catch (error) {
        console.log("Error fetching mentors", error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="pl-4 pr-4 md:pl-28 md:pr-28 flex items-center justify-center">
      <div className="h-fit w-full max-w-[1300px] p-4 md:p-8 px-6 md:px-10 shadow-xl rounded-xl flex justify-start items-center flex-wrap gap-8">
        {mentors.length > 0 ? (
          mentors.map((mentor, index) => (
            <MentorCa key={index} props={mentor} />
          ))
        ) : (
          <p>No mentors available</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MentorCard2;
