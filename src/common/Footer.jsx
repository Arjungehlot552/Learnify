import React from 'react'
import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
} from "lucide-react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="w-full mt-20 pr-40 pl-40 h-20 pt-4 text-white flex flex-col justify-between border-t-2 border-blue-200 ">
      <div className="flex justify-between">
        <div className="w-[25%]">
         <Link to={"/"}><img className="h-12" src={logo} alt="" /></Link> 
          <p className="mt-4 font-semibold text-gray-400">
            Empower your education journey with Learnify—revolutionizing project
            uploads for engineering, medical, and more. Join now!
          </p>
        </div>
        <div className="flex gap-16">
          <div>
            <p className="font-bold tracking-wider text-gray-300 text-md">
              Help & Support
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <Link to={'/userguidelines'} className="text-gray-400 hover:text-blue-400">
                <p>User Guidelines</p>
              </Link>
              <Link to={'/contact'} className="text-gray-400 hover:text-blue-400">
                <p>Contact Us</p>
              </Link>
            </div>
          </div>
          <div>
            <p className="font-bold tracking-wider text-gray-300 text-md">
              Website
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <Link to={'/about'} className="text-gray-400 hover:text-blue-400">
                <p>About Us</p>
              </Link>
              <Link to={'/careers'} className="text-gray-400 hover:text-blue-400">
                <p>Careers</p>
              </Link>
              <Link to={"/terms"} className="text-gray-400 hover:text-blue-400">
                <p>Terms and Conditions</p>
              </Link>
            </div>
          </div>
          <div>
            <p className="font-bold tracking-wider text-gray-300 text-md">
              More
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <Link to={'https://bloghive-lovat.vercel.app/'} className="text-gray-400 hover:text-blue-400">
                <p>Blogs</p>
              </Link>
              <Link to={'/privacy'} className="text-gray-400 hover:text-blue-400">
                <p>Privacy Policy</p>
              </Link>
              <Link to={'/grievance'} className="text-gray-400 hover:text-blue-400">
                <p>Grievance Redressal</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full outline outline-1 outline-gray-700 mt-4"></div>
      <div className="py-4 flex justify-between">
        <p className="mt-2 text-gray-400">&#169; All rights reserved @Himanshi | 2024</p>
        <div className="flex gap-8 text-gray-400">
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
  )
}

export default Footer
