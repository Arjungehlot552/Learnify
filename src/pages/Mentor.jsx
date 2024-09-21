import React, { useEffect, useState } from "react";
import MentorCard from "../components/Cards/MentorCard";
import ScrollToTop from "../components/Other/ScrollToTop";
import axios from "axios";

const Mentor = () => {
  ScrollToTop();
  
  // State to hold mentors data
  const [mentors, setMentors] = useState([]);

  // Fetch mentors inside useEffect
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await axios.get(
          "https://learnify-backend-wmjk.onrender.com/api/mentor/getMentors"
        );
        console.log(res.data.data);
        setMentors(res.data.data); // Update the state with the fetched data
      } catch (error) {
        console.log("Error fetching mentors", error);
      }
    };

    fetchMentors();
  }, []); // Empty dependency array to ensure this runs only once when the component mounts

  return (
    <div className="sm:px-6 md:px-10 w-full py-10 flex items-center justify-center">
      <div className="h-fit w-[84%] py-4 lg:p-10 shadow-xl rounded-xl flex justify-center items-center flex-wrap gap-10">
        {mentors.length > 0 ? (
          mentors.map((mentor, index) => (
            <MentorCard key={index} props={mentor} />
          ))
        ) : (
          <p>No mentors available</p>
        )}
      </div>
    </div>
  );
};

export default Mentor;
