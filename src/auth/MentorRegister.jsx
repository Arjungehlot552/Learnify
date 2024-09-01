import React, { useState } from "react";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";

const MentorRegister = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompany] = useState("");
  const [desgination, setDesignation] = useState("");
  const [linked, setLinked] = useState("");
  const [role, setRole] = useState("mentor");
  const navigate = useNavigate();

  const register = async () => {
    if (desgination || company || linked === ""){
      toast.error("Fill in all required fields!")
      return
    }

    if (confirmPassword !== registerPassword) {
      toast.error("Password Confirmation Mismatch!");
      return;
    }
    if (registerPassword.length < 6) {
      toast.error("Password should atleast have 6 characters!");
      return;
    }
   
    toast.success("Registered successfully!");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="h-fit py-12 flex items-center justify-center">
      <div
        style={{ boxShadow: "0px 0px 10px 0px gray" }}
        className="h-fit py-5 w-[500px] rounded-xl shadow-black flex items-center justify-center gap-6 flex-col"
      >
        <p className="text-2xl text-black font-semibold ">Register as Mentor</p>
        <img src={logo} className="h-20 w-[300px] object-contain" alt="" />
        <div className="flex w-full px-10 flex-col items-center justify-center gap-5 mt-4">
          <div className="relative w-full">
            <input
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none "
              type="email"
              value={registerEmail}
              placeholder="Enter email"
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <MdOutlineMail className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              required
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="text"
              placeholder="Desgination"
              value={desgination}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <MdOutlinePassword className="absolute top-4 left-2 text-gray-500 font-bold" />
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
            <MdOutlinePassword className="absolute top-4 left-2 text-gray-500 font-bold" />
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
            <MdOutlinePassword className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              required
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="password"
              value={registerPassword}
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

          <button
            onClick={register}
            className="h-12 w-full outline-blue-600 text-white bg-blue-600 outline-2 outline shadow-blue-800 rounded-lg text-xl font-semibold mt-2 hover:bg-white hover:text-black hover:font-semibold hover:transition-all duration-700 "
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

export default MentorRegister;
