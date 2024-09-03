import React from 'react'
import { Link } from 'react-router-dom'

const IdeaDisplay = () => {
  return (
    <div className="mt-16">
    <div style={{boxShadow: "0 0 6px 1px gray"}}  className="h-fit w-full p-4 shadow-lg shadow-gray-400 rounded-xl mt-8 flex  justify-between items-center gap-8">
      <div className=" w-[40%] h-fit object-cover">
        <img
          className=" object-cover h-80 w-full rounded-xl"
          src="https://cdn3.vectorstock.com/i/1000x1000/02/67/professionals-businessman-discussing-project-work-vector-43350267.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col h-full  tracking-wide justify-center items-center">
        <p className="text-6xl font-semibold font-serif text-slate-600">
          Bring your ideas to life!
        </p>
        <p className="mt-2">
          Collaborate with students, reseachers and like-minded people and
          shape your ideas to real life.
        </p>
        <Link to={'/upload-idea'}>
        <button className="h-12 p-3 flex items-center justify-center outline mt-8 rounded-xl hover:text-black text-white bg-blue-700 duration-300 hover:outline-blue-600 hover:bg-white font-semibold text-xl">
            Post your project idea
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default IdeaDisplay