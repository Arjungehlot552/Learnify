import React from "react";
import { MdDelete } from "react-icons/md";

export const UserCard = ({ item }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <div style={{boxShadow:"0 0 5px 2px blue"}} className="p-4 min-w-96 rounded-2xl text-xl h-fit flex flex-col gap-3">
      <p>
        <b>Username:</b> {item.name}
      </p>
      <p>
        <b>User's email:</b> {item.email}
      </p>
      <p><b>Date:</b> {formatDate(item.createdAt)}</p>
     <p className="flex items-center justify-center gap-1"><p className="flex items-center justify-center px-3 py-2 rounded-lg bg-red-600 text-white w-fit cursor-pointer">Delete <MdDelete size={24}/></p></p>

    </div>
  );
};
