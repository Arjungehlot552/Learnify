import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import useUserStore from "../store/userStore";
import useMentorStore from "../store/mentorStore";
import useAdminStore from "../store/adminStore"; 
import { FaUserLarge } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa"; 
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();

  const { user, fetchUser } = useUserStore((state) => ({
    user: state.user,
    fetchUser: state.fetchUser,
  }));

  const { mentor, fetchMentor } = useMentorStore((state) => ({
    mentor: state.mentor,
    fetchMentor: state.fetchMentor,
  }));

  const { isAdmin, setIsAdmin, getAdmin } = useAdminStore((state) => ({
    isAdmin: state.isAdmin,
    setIsAdmin: state.setIsAdmin,
    getAdmin: state.getAdmin,
  }));

  useEffect(() => {
    const getData = async () => {
      try {
        if (!user && !mentor) {
          await getAdmin();
         
        }
  
        if (!mentor && !isAdmin) {
           await fetchUser();
        }

        if (!isAdmin && !user) {
           await fetchMentor();
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
  
    getData();
  }, []);
  

  const { colorMode, toggleColorMode } = useThemeContext();

  const handleLogout = async () => {
    try {
      if (isAdmin) {
        await axios.post("http://localhost:4000/api/admin/logout", {}, { withCredentials: true });
        toast.success("Admin logged out successfully!");
        setIsAdmin(false);
      } else if (user) {
        await axios.post("http://localhost:4000/api/student/logout", {}, { withCredentials: true });
        toast.success("User logged out successfully!");
      } else if (mentor) {
        await axios.post("http://localhost:4000/api/mentor/logout", {}, { withCredentials: true });
        toast.success("Mentor logged out successfully!");
      }
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error logging out!");
      console.log("Error while logging out:", error);
    }
  };

  return (
    <div className="outline outline-blue-100 outline-2 h-20 w-full pl-44 flex items-center justify-between">
      <div>
        <Link to={"/"}>
          <img className="h-12" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="pl-[800px]">
        {(user || mentor || isAdmin)? (
          <div className="flex items-center justify-center gap-10">
            <div className="flex items-center justify-center gap-10">
              <button
                onClick={handleLogout}
                className="h-10 w-32 font-bold tracking-wider text-slate-600 outline outline-slate-500 outline-2 text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 hover:text-white duration-700"
              >
                Logout
              </button>
              {user ? (
                <Link to={"/user-profile"} className="relative group">
                  <FaUserLarge
                    size={28}
                    className={`${
                      colorMode === "dark" ? "text-white" : "text-black"
                    } cursor-pointer`}
                  />
                  <div className="absolute left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block top-8 bg-gray-400 text-black font-semibold text-xs rounded py-2 px-3">
                    User
                  </div>
                </Link>
              ) : mentor ? (
                <Link to={"/mentor-profile"} className="relative group">
                  <FaUserGraduate
                    size={28}
                    className={`${
                      colorMode === "dark" ? "text-white" : "text-black"
                    } cursor-pointer`}
                  />
                  <div className="absolute left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block top-8 bg-gray-400 text-black font-semibold text-xs rounded py-2 px-2">
                    Mentor
                  </div>
                </Link>
              ) : isAdmin ? (
                <Link to={"/adminhome"} className="relative group">
                  <FaUserShield
                    size={28}
                    className={`${
                      colorMode === "dark" ? "text-white" : "text-black"
                    } cursor-pointer`}
                  />
                  <div className="absolute left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block top-8 bg-gray-400 text-black font-semibold text-xs rounded py-2 px-2">
                    Admin
                  </div>
                </Link>
              ) : null}
            </div>
            <div
              onClick={toggleColorMode}
              className="cursor-pointer flex items-center"
            >
              {colorMode === "light" ? (
                <Moon size={36} />
              ) : (
                <Sun size={36} className="text-yellow-500" />
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-16 ">
            <Link to={"/login"}>
              <button className="h-10 w-32 font-bold tracking-wider text-slate-600 outline outline-slate-500 outline-2 text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 hover:text-white duration-700">
                Login
              </button>
            </Link>
            <div
              onClick={toggleColorMode}
              className="cursor-pointer flex items-center"
            >
              {colorMode === "light" ? (
                <Moon size={36} />
              ) : (
                <Sun size={36} className="text-yellow-500" />
              )}
            </div>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Header;
