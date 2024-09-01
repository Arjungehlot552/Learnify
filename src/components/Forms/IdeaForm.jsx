import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import ScrollToTop from "../Other/ScrollToTop"

const IdeaForm = () => {
  ScrollToTop()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, requirements, email } =
      formData;

    if (
      !title ||
      !description ||
      !requirements ||
      !email
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Handle form submission here (e.g., sending data to a server)
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="pl-40 pr-40 w-full flex justify-center items-center pt-20 ">
      <form
        onSubmit={handleSubmit}
        className="w-[40%] flex flex-col justify-center items-center shadow-lg shadow-gray-500 p-10 gap-4 rounded-xl"
      >
        <p className="w-full p-2 text-center rounded-xl outline outline-slate-300 text-lg font-semibold text-white bg-blue-700 ">
          Provide project details
        </p>
        <div className=" w-full flex flex-col gap-4">
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
          {/* <input
            className="outline-1 outline outline-gray-400 shadow-inner rounded-xl w-full p-3"
            type="date"
            placeholder="Expected start date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            className="outline-1 outline outline-gray-400 shadow-inner rounded-xl w-full p-3"
            type="text"
            placeholder="Expected duration"
            id="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          /> */}
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
            type="email"
            placeholder="Enter your valid email address"
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
      </form>
      <ToastContainer />
    </div>
  );
};

export default IdeaForm;
