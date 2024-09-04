import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {useThemeContext} from "../context/ThemeContext";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

const Header = () => {
  const { colorMode, toggleColorMode } = useThemeContext();
  return (
    <div className="outline outline-blue-100 outline-2 h-20 w-full pr-32 pl-32  text-black flex items-center justify-between">
      <div>
        <Link to={"/"}>
          <img className="h-12" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex gap-16">
        <div>
          <Link to={"/login"}>
            <button className="h-10 w-32 font-bold tracking-wider text-slate-600 outline outline-slate-500 outline-2  text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 hover:text-white duration-700">
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
    </div>
  );
};

export default Header;
