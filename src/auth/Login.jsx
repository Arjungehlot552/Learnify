import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineMail, MdOutlinePassword } from "react-icons/md";
import RegisterChoice from "./RegisterChoice";
import axios from "axios";

const Login = () => {
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPass] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    if (password.length < 6) {
      toast.error("Password should at least have 6 characters!");
      return;
    }

    if (email === "") {
      toast.error("Email can't be empty!");
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/student/login-student",
        { email, password },
        { withCredentials: true }
      );
      console.log(res.data);
      toast.success("Login Successful!");
      setTimeout(() => {
        navigate("/");
        window.location.reload()
      }, 2000);
    }
     catch (error) {
      console.log(error, "from login page");
    }

   
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-fit flex items-center justify-center pt-24">
      <div
        style={{ boxShadow: "0px 0px 10px 0.5px gray" }}
        className="h-fit py-10 w-[500px] rounded-xl shadow-black flex items-center justify-center gap-8 flex-col"
      >
        <p className="text-4xl text-black font-semibold">Login</p>
        <img src={logo} className="h-20 w-[300px] object-contain" alt="Logo" />
        <div className="flex w-full px-10 flex-col items-center justify-center gap-8 mt-4">
          <div className="relative w-full">
            <input
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <MdOutlineMail className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
          <div className="relative w-full">
            <input
              required
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginPass(e.target.value)}
            />
            <MdOutlinePassword className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>

          <button
            onClick={login}
            className="h-12 w-full outline-blue-600 text-white bg-blue-600 outline-2 outline shadow-blue-800 rounded-lg text-xl font-semibold mt-2 hover:bg-white  hover:font-semibold hover:transition-all duration-700 hover:text-black"
          >
            Login
          </button>
        </div>

        <p className="tracking-wide">
          Don't have an account?{" "}
          <span
            onClick={openModal}
            className="cursor-pointer font-semibold underline hover:scale-95 hover:text-blue-800"
          >
            Click here!
          </span>
        </p>
      </div>

      <ToastContainer />

      {isModalOpen && (
        <RegisterChoice isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default Login;
