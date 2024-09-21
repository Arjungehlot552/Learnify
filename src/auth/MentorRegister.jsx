import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MdOutlineMail,
  MdOutlinePassword,
  MdOutlineBusiness,
  MdOutlinePerson,
  MdOutlineLink,
} from "react-icons/md";
import axios from "axios";

const MentorRegister = () => {
  const [name, setName] = useState("");
  const [email, setRegisterEmail] = useState("");
  const [password, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [linked, setLinked] = useState("");
  const [image, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const register = async () => {
    if (!designation || !company || !linked || !name || !email) {
      toast.error("Fill in all required fields!");
      return;
    }

    if (confirmPassword !== password) {
      toast.error("Password Confirmation Mismatch!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password should at least have 6 characters!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("designation", designation);
      formData.append("company", company);
      formData.append("linked", linked);
      formData.append("password", password);
      if (image) {
        formData.append("image", image);
      }

      const res = await axios.post(
        "https://learnify-backend-wmjk.onrender.com/api/mentor/register-mentor",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log(res);
      toast.success("Registered Successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log("Error while registering mentor", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="h-fit py-12 flex items-center justify-center px-4 md:px-0">
      <div
        style={{ boxShadow: "0px 0px 10px 0px gray" }}
        className="h-fit py-5 w-full max-w-[500px] rounded-xl shadow-black flex items-center justify-center gap-4 md:gap-6 flex-col"
      >
        <p className="text-2xl text-red-500 font-semibold">Register as Mentor</p>
        <img src={logo} className="h-12 w-[250px] md:w-[300px] object-contain" alt="Logo" />
        
        <div className="flex w-full px-6 md:px-10 flex-col items-center justify-center gap-5 mt-4">
          <div className="relative w-full">
            <input
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
            <MdOutlinePerson className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <MdOutlineMail className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              required
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <MdOutlineBusiness className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              required
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <MdOutlineBusiness className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              required
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="url"
              placeholder="LinkedIn Link"
              value={linked}
              onChange={(e) => setLinked(e.target.value)}
            />
            <MdOutlineLink className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              required
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <MdOutlinePassword className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              required
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <MdOutlinePassword className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              className="border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              type="file"
              id="image"
              onChange={handlePhotoChange}
            />
          </div>
          <button
            onClick={register}
            className="h-12 w-full outline-blue-600 text-white bg-blue-600 outline-2 outline shadow-blue-800 rounded-lg text-xl font-semibold mt-2 hover:bg-white hover:text-black hover:font-semibold hover:transition-all duration-700"
          >
            Register
          </button>
        </div>
        
        <p className="tracking-wide">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold underline hover:scale-95 hover:text-blue-800"
          >
            Click here!
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
  
};

export default MentorRegister;
