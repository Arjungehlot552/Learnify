import React from 'react'
import MentorCard from '../components/Cards/MentorCard'
import ScrollToTop from "../components/Other/ScrollToTop"

const Mentor = () => {
  ScrollToTop()
  return (
    <div className="pl-28 pr-28">
      <div className="h-fit w-full p-8 shadow-xl rounded-xl flex justify-between flex-wrap gap-8">
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </div>
  )
}

export default Mentor