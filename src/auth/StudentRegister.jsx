import React, { useState } from "react";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import axios from 'axios'

const StudentRegister = () => {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    if (confirmPassword !== password) {
      toast.error("Password Confirmation Mismatch!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password should atleast have 6 characters!"); 
      return;
    }    
   
    const res = await axios.post("http://localhost:4000/api/student/register-student",{name,email,password})
   
    console.log(res);
    alert("registered")

    toast.success("Registered successfully!");
    setTimeout(() => {
      navigate("/");
    }, 2000);
     

  };

  return (
    <div className="h-fit py-12 pt-20 flex items-center justify-center">
      <div
        style={{ boxShadow: "0px 0px 10px 0px gray" }}
        className="h-fit py-5 w-[500px] rounded-xl shadow-black flex items-center justify-center gap-6 flex-col"
      >
        <p className="text-2xl text-black font-semibold ">
          Register as Student
        </p>
        <img src={logo} className="h-20 w-[300px] object-contain" alt="" />
        <div className="flex w-full px-10 flex-col items-center justify-center gap-5 mt-4">
          <div className="relative w-full">
            <input
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none "
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
            <MdOutlineMail className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none "
              type="email"
              value={email}
              unique
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdOutlineMail className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              required
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
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
          {/* <select
            className="shadow-inner text-lg shadow-red-700 rounded-xl h-12 w-full px-4 border-none outline-none"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select your role</option>
            <option value="Student">Student</option>
            <option value="Mentor">Mentor</option>
          </select> */}

          <button
            onClick={register}
            className="h-12 w-full outline-blue-600 text-white bg-blue-600 outline-2 outline shadow-blue-800 rounded-lg text-xl font-semibold mt-2 hover:bg-white  hover:font-semibold hover:transition-all duration-700 hover:text-black "
          >
            Register
          </button>
        </div>
        <p className="tracking-wide">
          Already have an account?{"  "}
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

export default StudentRegister;
