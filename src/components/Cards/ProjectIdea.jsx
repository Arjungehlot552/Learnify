import React, { useState,useEffect} from "react";
import ScrollToTop from "../Other/ScrollToTop";
import axios from "axios";

const ProjectIdea = () => {
  ScrollToTop();
  const Card = ({props}) => {
    return (
      <div>
        <div
          style={{ boxShadow: "0 0 5px 0.5px gray" }}
          className=" flex flex-col p-4 rounded-xl bg-gray-100 w-[350px] h-96 items-start justify-start gap-4 text-md"
        >
          <p className="w-full flex items-center justify-center text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-gray-500 to-red-500">
            {props.title}
          </p>
            
          <p>
            <b className="text-lg">Posted by: </b>{props.email}
          </p>
          <p>
            {props.description}
          </p>
          <p>
            {" "}
            <b>Requirements:</b> {props.requirements}
          </p>
        </div>
      </div>
    );
  };

  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    try {
      const fetchIdeas = async () => {
        console.log("hello");
        const res = await axios.get(
          "http://localhost:4000/api/ideas/getIdeas"
        );
        console.log(res.data.data);
        setIdeas(res.data.data);
        // console.log(ideas);
      };
      fetchIdeas();
    } catch (error) {
      console.log("Error while fetching ideas!",error)
    }
  }, []);

  return (
    <div className="flex min-h-[650px] h-fit w-full pt-20">
      <div className="w-fit mx-32 flex justify-center shadow-md shadow-gray-400 p-5">
         {
          ideas.length > 0 ? <div className="flex gap-12 items-start justify-start mx-28 h-fit flex-wrap" >
            {ideas.map((item,key) => (
              <Card key={key} props={item}/>
            ))}
          </div> : <p>
            No Ideas yet!
          </p>
         }
      </div>
    </div>
  );
};

export default ProjectIdea;
