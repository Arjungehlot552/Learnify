import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const RegisterChoice = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const onClickMentor = () => {
    navigate("/mentor-register");
    onClose(); 
  };

  const onClickStudent = () => {
    navigate("/student-register");
    onClose(); 
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold mb-4">Select Your Role</h2>
        <div className="flex justify-center items-center gap-3 my-4">
          <button
            onClick={onClickMentor}
            className="h-12 p-4 px-10 flex items-center justify-center text-white bg-blue-600 outline-none border-none hover:text-lg rounded-lg text-xl"
          >
            Mentor
          </button>
          <button
            onClick={onClickStudent}
            className="h-12 p-4 px-10 flex items-center justify-center text-white bg-blue-600 outline-none border-none hover:text-lg rounded-lg text-xl"
          >
            Student
          </button>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
        >
          Cancel
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RegisterChoice;
