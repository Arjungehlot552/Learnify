import React, { useState } from "react";
import ScrollToTop from "../Other/ScrollToTop";

const ProjectForm = () => {
  ScrollToTop();
  const [img1, setImg1] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    projectName: "",
    domain: "",
    abstract: "",
    description: "",
    ytLink: "",
    gitLink: "",
    college: "",
    image: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const uploadImage = () => {
    if (!img1) {
      alert("Please select an image to upload.");
      return;
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
                className="border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                type="text"
                id="name"
                placeholder="Enter your username"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                type="text"
                id="projectName"
                placeholder="Project Title"
                value={formData.projectName}
                onChange={handleChange}
                required
              />
              <select
                className="border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
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
                className="border p-3 rounded-lg resize-none placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                id="abstract"
                cols="5"
                rows="5"
                placeholder="Add Abstract of the Project"
                value={formData.abstract}
                onChange={handleChange}
                required
              ></textarea>
              <textarea
                className="border p-3 rounded-lg resize-none placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                id="description"
                cols="20"
                rows="10"
                placeholder="Project Description (minimum 300 words)"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>

              <input
                className={`border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full ${
                  formData.ytLink ? `border-blue-600` : `text-black`
                }`}
                type="text"
                id="ytLink"
                placeholder="Paste YouTube video link here"
                value={formData.ytLink}
                onChange={handleChange}
              />
              <input
                className={`border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full ${
                  formData.gitLink ? `border-blue-600` : `text-black`
                }`}
                type="text"
                id="gitLink"
                placeholder="Paste GitHub link here (if any)"
                value={formData.gitLink}
                onChange={handleChange}
              />
              <input
                type="text"
                id="college"
                className="border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                placeholder="College/University Name (write N/A in case of individual project)"
                value={formData.college}
                onChange={handleChange}
                required
              />
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
                    onChange={(event) => setImg1(event.target.files[0])}
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
    </div>
  );
};

export default ProjectForm;
