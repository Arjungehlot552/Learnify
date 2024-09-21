import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "./fragments/UserCard";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://learnify-backend-wmjk.onrender.com/api/admin/allusers");
        setUsers(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log("Error while fetching users!");
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="pt-12 h-fit  flex flex-wrap items-center justify-center gap-10">
      <p className="text-5xl text-center font-bold">Users</p>
      <div className="flex flex-wrap mx-3 items-center justify-center gap-16">
        {users.map((item) => (
          <UserCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};
 
export default AdminUsers;
