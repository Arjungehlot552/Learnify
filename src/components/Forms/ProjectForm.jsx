import React, { useEffect, useState } from "react";
import ScrollToTop from "../Other/ScrollToTop";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import useUserStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import useMentorStore from "../../store/mentorStore";

const ProjectForm = () => {
  ScrollToTop();
  const navigate = useNavigate();

  const { user } = useUserStore((state) => ({
    user: state.user,
  }));
  const { mentor } = useMentorStore((state) => ({
    mentor: state.mentor,
  }));

  const [role, setRole] = useState("");

  useEffect(() => {
    if (user) {
      setRole("student");
    } else if (mentor) {
      setRole("mentor");
    }
  }, [user, mentor]);

  const [formData, setFormData] = useState({
    email: "",
    title: "",
    domain: "",
    abstract: "",
    description: "",
    videolink: "",
    githublink: "",
    collegename: "",
    image: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (id === "image") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user && !mentor) {
      toast.error("Please login first!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    if (!formData.image) {
      toast.error("Please select an image to upload.");
      return;
    }

    if (
      !formData.email ||
      !formData.title ||
      !formData.domain ||
      !formData.abstract ||
      !formData.description ||
      !formData.videolink ||
      !formData.githublink ||
      (user && !formData.collegename)
    ) {
      return toast.error("Fill in all required fields!");
    }

    const data = new FormData();
    if (user) data.append("email", user.email);
    if (mentor) data.append("email", mentor.email);
    data.append("title", formData.title);
    data.append("domain", formData.domain);
    data.append("abstract", formData.abstract);
    data.append("description", formData.description);
    data.append("videolink", formData.videolink);
    data.append("githublink", formData.githublink);
    if (user) data.append("collegename", formData.collegename);
    data.append("image", formData.image);

    console.log(data);

    try {
      const response = await axios.post(
        `http://localhost:4000/api/${role}/create-project`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      toast.success("Project uploaded successfully!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error uploading project:", error);
      alert("There was an error uploading the project.");
    }
  };

  return (
    <div className="w-full h-fit flex items-center justify-center">
      <form
        className="pl-40 pr-40 mt-20 h-fit w-[1200px] rounded-xl font-medium"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center shadow-lg  shadow-gray-500 rounded-xl">
          <div className="flex justify-center  w-full px-20">
            <div className="mt-12 flex flex-col gap-4  w-full">
              <div className="font-semibold font-serif bg-blue-500 text-white uppercase text-xl flex justify-center outline py-2 px-2 rounded-xl outline-slate-200">
                Upload Your Project Here
              </div>
              <input
                className="border p-3 rounded-lg placeholder-gray-300 placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                type="text"
                id="email"
                placeholder="Enter your username"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="border p-3 rounded-lg placeholder-gray-300 placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                type="text"
                id="title"
                placeholder="Project title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <select
                className="border p-3 rounded-lg placeholder-gray-300 placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                id="domain"
                value={formData.domain}
                onChange={handleChange}
                required
              >
                <option value="">Select Domain</option>
                <option value="CS">Computer Science</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="Civil">Civil Engineering</option>
                <option value="Mechanical">Mechanical Engineering</option>
                <option value="DS">Data Science</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Medical">Medical Sciences</option>
                <option value="N/A">Others</option>
              </select>

              <textarea
                className="border p-3 rounded-lg resize-none placeholder-gray-300 placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                id="abstract"
                cols="5"
                rows="5"
                placeholder="Add Abstract of the Project"
                value={formData.abstract}
                onChange={handleChange}
                required
              ></textarea>
              <textarea
                className="border p-3 rounded-lg resize-none placeholder-gray-300 placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                id="description"
                cols="20"
                rows="10"
                placeholder="Project Description (minimum 300 words)"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>

              <input
                className={`border p-3 rounded-lg placeholder-gray-300 placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full ${
                  formData.videolink ? `border-blue-600` : `text-black`
                }`}
                type="text"
                id="videolink"
                placeholder="Paste YouTube video link here"
                value={formData.videolink}
                onChange={handleChange}
              />
              <input
                className={`border p-3 rounded-lg placeholder-gray-300 placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full ${
                  formData.githublink ? `border-blue-600` : `text-black`
                }`}
                type="text"
                id="githublink"
                placeholder="Paste GitHub link here (if any)"
                value={formData.githublink}
                onChange={handleChange}
              />
              {!mentor && (
                <input
                  type="text"
                  id="collegename"
                  className="border p-3 rounded-lg placeholder-gray-300 placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                  placeholder="College/University Name"
                  value={formData.collegename}
                  onChange={handleChange}
                  required
                />
              )}
              <div className="flex gap-4">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms" className="text-xs">
                  Agree to the terms and conditions
                </label>
              </div>
              <div className="flex gap-4">
                <input type="checkbox" id="truth" required />
                <label htmlFor="truth" className="text-xs">
                  Details filled are all true.
                </label>
              </div>
              <div className="flex justify-center">
                <div className="mt-4 p-4 w-full rounded-xl outline outline-1 outline-gray-400 flex flex-col gap-4">
                  <label htmlFor="image">
                    <p className="text-xl font-semibold">
                      Upload project related images [Image should be less than
                      500KB]
                    </p>
                  </label>
                  <input
                    className="border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                    type="file"
                    id="image"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                className="outline rounded-xl outline-blue-600 hover:bg-white bg-blue-700 hover:text-black font-bold text-white text-xl my-6 transition-all duration-300 py-2 px-3"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ProjectForm;
