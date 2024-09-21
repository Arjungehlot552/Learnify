import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import ScrollToTop from "../Other/ScrollToTop";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore"

const IdeaForm = () => {
  ScrollToTop();

  const {user} = useUserStore((state)=>(
    {
       user:state.user
    }
  ))

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    const { title, description, requirements, email } = formData;

    if (!title || !description || !requirements || !email) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (user.email !== email){
      toast.error("Please enter the current logged in email!")
      return ;
    }

    try {
      const res = await axios.post(
        "https://learnify-backend-wmjk.onrender.com/api/ideas/create-idea",
        formData,
        { withCredentials: true}
      );

      console.log(res);
      toast.success("Idea posted!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Can't post idea!");
      console.log("Error while posting idea!");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="pl-4 pr-4 w-full flex justify-center items-center py-20 sm:pl-10 sm:pr-10">
      <div className="w-full max-w-md flex flex-col justify-center items-center shadow-lg shadow-gray-500 p-6 gap-4 rounded-xl">
        <p className="w-full p-2 text-center rounded-xl outline outline-slate-300 text-lg font-semibold text-white bg-blue-700">
          Provide Idea details
        </p>
        <div className="w-full flex flex-col gap-4">
          <input
            className="outline-1 outline outline-gray-400 shadow-inner rounded-xl w-full p-3"
            type="text"
            placeholder="Title of project"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            className="outline-1 outline outline-gray-400 shadow-inner rounded-xl w-full p-3"
            type="text"
            placeholder="Short description(max 75 words)"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
            maxLength={75}
          />
          <input
            className="outline-1 outline outline-gray-400 shadow-inner rounded-xl w-full p-3"
            type="text"
            placeholder="Describe your requirements"
            id="requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
          />
          <input
            className="outline-1 outline outline-gray-400 shadow-inner rounded-xl w-full p-3"
            type="text"
            placeholder="Enter your email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          className="flex outline text-xl w-full justify-center items-center mt-6 h-12 rounded-xl font-semibold gap-4 hover:outline-blue-600 hover:bg-white text-white bg-blue-700 transition-all duration-500 hover:text-black"
        >
          Post
        </button>
      </div>
      <ToastContainer />
    </div>
  );

};

export default IdeaForm;
