import React from "react";
import ScrollToTop from "../Other/ScrollToTop";

const ProjectIdea = () => {
  ScrollToTop();
  const Card = () => {
    return (
      <div>
        <div
          style={{ boxShadow: "0 0 5px 0.5px gray" }}
          className=" flex flex-col p-4 rounded-xl w-[350px] items-start justify-start gap-4 text-md"
        >
          <p className="w-full flex items-center justify-center text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-gray-500 to-red-500">
            Word to Url Converter
          </p>

          <p>
            <b className="text-lg">Posted by: </b>zyz@gmail.com
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ea
            repudiandae blanditiis delectus mollitia distinctio error incidunt
            impedit explicabo, ducimus doloremque magnam iure minima iste maxime
            natus quam id saepe consequuntur quidem. Ullam aliquam natus, quidem
            eveniet reprehenderit delectus fuga mollitia eius temporibus debitis
            aliquid tempora, voluptas recusandae necessitatibus deleniti
            consectetur quis illum vel libero provident enim repellat? Adipisci
            dolore aliquam officia, voluptatum a eveniet deserunt minus, iste
            quisquam voluptatem explicabo, impedit saepe quis laborum.
          </p>
          <p>
            {" "}
            <b>Requirements:</b> MongoDB,ReactJS{" "}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-fit w-full pt-20">
      <div className="flex gap-12 items-start justify-center mx-28 h-fit flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ProjectIdea;
