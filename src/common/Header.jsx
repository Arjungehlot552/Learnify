import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import useUserStore from "../store/userStore.js";
import { FaUserLarge } from "react-icons/fa6";

const Header = () => {
  const { user, fetchUser } = useUserStore((state) => ({
    user: state.user,
    fetchUser: state.fetchUser,
  }));

  useEffect(() => {
    const getUserData = async () => {
      try {
        await fetchUser();
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    getUserData();
  }, [fetchUser]);

  const { colorMode, toggleColorMode } = useThemeContext();

  return (
    <div className="outline outline-blue-100 outline-2 h-20 w-full pr-32 pl-32 text-black flex items-center justify-between">
      <div>
        <Link to={"/"}>
          <img className="h-12" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex gap-16">
        {user ? (
          <div className="flex items-center justify-center gap-10">
            <div className="flex items-center justify-center gap-10">
              <button className="h-10 w-32 font-bold tracking-wider text-slate-600 outline outline-slate-500 outline-2 text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 hover:text-white duration-700">
                Logout
              </button>
              <FaUserLarge size={28} className={`${colorMode == "dark" ? "text-white" : "text-black" }`} />
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
          <div className="flex gap-16">
            <div>
              <Link to={"/login"}>
                <button className="h-10 w-32 font-bold tracking-wider text-slate-600 outline outline-slate-500 outline-2 text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 hover:text-white duration-700">
                  Login
                </button>
              </Link>
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
        )}
      </div>
    </div>
  );
};

export default Header;
