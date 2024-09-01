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
    <div className="w-full mt-20 pr-40 pl-40 h-20 pt-4 text-black flex flex-col justify-between border-t-2 border-blue-200">
      <div className="flex  justify-between ">
        <div className="w-[25%]">
         <Link to={"/"}><img className="h-12" src={logo} alt="" /></Link> 
          <p className="mt-4 font-semibold text-slate-500 ">
            Empower your education journey with Learnify—revolutionizing project
            uploads for engineering, medical, and more. Join now!
          </p>
        </div>
        <div className="flex gap-16">
          <div>
            <p className="font-bold tracking-wider text-slate-500 text-md">
              Help & support
            </p>
            <div className=" flex flex-col gap-4 mt-4">
              <Link to={'/userguidelines'}>
                <p>User guidelines</p>
              </Link>
              <Link to={'/contact'}>
                <p>Contact Us</p>
              </Link>
            </div>
          </div>
          <div>
            <p className="font-bold tracking-wider text-slate-500 text-md">
              Website
            </p>
            <div className=" flex flex-col gap-4 mt-4">
              <Link to={'/about'}>
                <p>About Us</p>
              </Link>
              <Link to={'/careers'}>
                <p>Careers</p>
              </Link>
              {/* {flag? <Link to={'/admin'}><button className="text-blue-600 font-bold" >Admin</button></Link>:null } */}
              <Link to={"/terms"}>
                <p >Terms and conditions</p>
              </Link>
            </div>
          </div>
          <div>
            <p className="font-bold tracking-wider text-slate-500 text-md">
              More
            </p>
            <div className=" flex flex-col gap-4 mt-4">
              <Link to={'/blogs'}>
                <p>Blogs</p>
              </Link>
              <Link to={'/privacy'}>
                <p>Privacy Policy</p>
              </Link>
              <Link to={'/grievance'}>
                <p>Grievance Redressal</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full outline outline-1 outline-slate-300 mt-4"></div>
      <div className="py-4 flex justify-between">
        <p className="mt-2">&#169; All rights reserved @Himanshi | 2024 </p>
        <div className="flex gap-8 text-slate-500">
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