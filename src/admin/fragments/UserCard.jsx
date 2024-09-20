import React from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export const UserCard = ({ item }) => {
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const handleDelete = async () => {
    try {
      console.log(item._id);
      const res = await axios.delete(
        `http://localhost:4000/api/admin/deleteUser/${item._id}`,
        { withCredentials: true }
      );

      console.log(res);
      toast.success("User deleted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log("Error while deleting user!", error);
      toast.error("Error while deleting user.");
    }
  };

  return (
    <div
      style={{ boxShadow: "0 0 5px 2px pink" }}
      className="p-5 min-w-96 rounded-sm text-xl h-fit flex flex-col gap-3"
    >
      <p className="text-center">
        <b> {item.name}</b>
      </p>
      <p>
        <b>User's email:</b> {item.email}
      </p>
      <p>
        <b>Date joined:</b> {formatDate(item.createdAt)}
      </p>
      <div
        onClick={handleDelete}
        className="flex items-center justify-center gap-1"
      >
        <div className="flex items-center justify-center px-3 py-2 rounded-lg bg-red-600 text-white w-fit cursor-pointer">
          Delete <MdDelete size={24} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
