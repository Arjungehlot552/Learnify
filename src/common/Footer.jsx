import React, { useContext } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {useThemeContext} from "../context/ThemeContext"
import useAdminStore from "../store/adminStore";

const Footer = () => {
  const {colorMode} = useThemeContext()

  const {isAdmin} = useAdminStore((state) => ({
    isAdmin : state.isAdmin
  }))
   

  return (
    <div className="w-full mt-6 md:mt-20 px-4 md:px-20 lg:px-40 h-auto pt-4 text-white flex flex-col justify-between border-t-2 border-blue-200">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Logo and Description */}
        <div className="w-full lg:w-[25%]">
          <Link to={"/"}>
            <img className="h-12" src={logo} alt="" />
          </Link>
          <p className="mt-4 font-semibold text-gray-400">
            Empower your education journey with Learnify—revolutionizing project uploads for engineering, medical, and more. Join now!
          </p>
        </div>
  
        {/* Links Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-6 lg:mt-0">
          {/* Help & Support */}
          <div>
            <p className="font-bold tracking-wider text-gray-800 text-md">
              Help & Support
            </p>
            <div className="flex flex-col gap-2 sm:gap-4 mt-4">
              <Link to={"/userguidelines"} className={`hover:text-blue-400 ${colorMode === "dark" ? "text-white font-semibold" : "text-black font-semibold"}`}>
                <p>User Guidelines</p>
              </Link>
              <Link to={"/contact"} className={`hover:text-blue-400 ${colorMode === "dark" ? "text-white font-semibold" : "text-black font-semibold"}`}>
                <p>Contact Us</p>
              </Link>
              {isAdmin && (
                <Link to={"/adminhome"} className={`hover:text-blue-400 ${colorMode === "dark" ? "text-white font-semibold" : "text-black font-semibold"}`}>
                  <p>Admin</p>
                </Link>
              )}
            </div>
          </div>
  
          {/* Website Section */}
          <div>
            <p className="font-bold tracking-wider text-gray-800 text-md">
              Website
            </p>
            <div className="flex flex-col gap-2 sm:gap-4 mt-4">
              <Link to={"/about"} className={`hover:text-blue-400 ${colorMode === "dark" ? "text-white font-semibold" : "text-black font-semibold"}`}>
                <p>About Us</p>
              </Link>
              <Link to={"/careers"} className={`hover:text-blue-400 ${colorMode === "dark" ? "text-white font-semibold" : "text-black font-semibold"}`}>
                <p>Careers</p>
              </Link>
              <Link to={"/terms"} className={`hover:text-blue-400 ${colorMode === "dark" ? "text-white font-semibold" : "text-black font-semibold"}`}>
                <p>Terms and Conditions</p>
              </Link>
            </div>
          </div>
  
          {/* More Section */}
          <div>
            <p className="font-bold tracking-wider text-gray-800 text-md">
              More
            </p>
            <div className="flex flex-col gap-2 sm:gap-4 mt-4">
              <Link to={"https://bloghive-lovat.vercel.app/"} className={`hover:text-blue-400 ${colorMode === "dark" ? "text-white font-semibold" : "text-black font-semibold"}`}>
                <p>Blogs</p>
              </Link>
              <Link to={"/privacy"} className={`hover:text-blue-400 ${colorMode === "dark" ? "text-white font-semibold" : "text-black font-semibold"}`}>
                <p>Privacy Policy</p>
              </Link>
              <Link to={"/grievance"} className={`hover:text-blue-400 ${colorMode === "dark" ? "text-white font-semibold" : "text-black font-semibold"}`}>
                <p>Grievance Redressal</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
  
      {/* Divider Line */}
      <div className="w-full outline outline-1 outline-gray-700 mt-4"></div>
  
      {/* Footer */}
      <div className="py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mt-2 text-gray-400 text-sm md:text-base text-center md:text-left">
          &#169; All rights reserved @Himanshi | 2024
        </p>
        <div className="flex gap-4 md:gap-8 text-gray-400 mt-4 md:mt-0">
          <Link to={"https://www.facebook.com/zuck/"}>
            <FacebookIcon />
          </Link>
          <Link to={"https://x.com/finkd?lang=en"}>
            <TwitterIcon />
          </Link>
          <Link to={"https://www.instagram.com/zuck/?hl=en"}>
            <InstagramIcon />
          </Link>
          <Link to="https://www.youtube.com/@user-vp4gk7qu4o">
            <YoutubeIcon />
          </Link>
          <Link to={"https://www.linkedin.com/in/himi04/"}>
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </div>
  );
  
};

export default Footer;
