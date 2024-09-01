import React from "react";
import ScrollToTop from "../Other/ScrollToTop"

const ProjectDetail = () => {
           ScrollToTop()
  return (
    <div className="h-fit w-full bg-gradient-to-tr from-red-100 to-blue-100 via-white flex items-center justify-center py-20 -mb-20 text-lg">
      <div
        style={{ boxShadow: "0 0 5px 0.5px gray" }}
        className="w-[60%] bg-white flex p-8 rounded-2xl flex-col items-start justify-center gap-5"
      >
        <p>
          <strong>User ID:</strong> dummyuser@example.com
        </p>
        <p>
          <strong>Project Name:</strong> Smart Agriculture Monitoring System
        </p>
        <p>
          <strong>Domain:</strong> AI (Artificial Intelligence)
        </p>
        <p>
          <strong>Abstract:</strong> This project aims to develop a smart
          agriculture monitoring system using IoT and AI to help farmers
          efficiently manage their crops and resources.
        </p>
        <p>
          <strong>Description:</strong>- The Smart Agriculture Monitoring System
          is designed to collect data from various sensors placed in the field,
          such as soil moisture, temperature, and humidity sensors. - This data
          is then processed using AI algorithms to provide real-time
          recommendations to farmers. - The system can predict weather
          conditions, detect pests, and suggest the best time for irrigation and
          fertilization. - The project includes a mobile app where farmers can
          monitor their fields remotely and receive alerts and suggestions. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsum harum illo officiis voluptates incidunt beatae impedit necessitatibus officia quasi. Accusantium ad impedit commodi! Odio dolorem veniam eos consequuntur nobis praesentium! Tempore optio explicabo voluptatum, unde ab quod voluptatem saepe a rerum laboriosam! Assumenda eos repellat odio alias nam quasi esse voluptates repellendus ipsam laboriosam aut in hic enim inventore accusamus, optio ad consectetur voluptatibus distinctio deserunt ducimus soluta ipsa eveniet id? Ad, mollitia voluptate at numquam dolorum libero ratione tenetur porro, iste accusantium ducimus omnis quis neque animi similique soluta! Quaerat eaque aliquid soluta. Ullam nemo dolorum obcaecati. Ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, exercitationem facilis distinctio quia nostrum recusandae dolore repellendus dolorem magni veniam ad. Commodi sint eius explicabo? Blanditiis at sunt minus ad debitis a ab nesciunt consequatur fuga omnis fugit labore pariatur nam maiores repellendus corrupti vitae dolore facilis quas reprehenderit nemo quidem quis, corporis molestias. Enim blanditiis nisi quas quod doloremque sed? Enim molestiae corporis nihil illo illum facere, debitis provident sunt quos, placeat praesentium ducimus ad? Architecto at fugit minus tenetur, quidem beatae expedita veritatis odit pariatur laborum aut non earum blanditiis quod neque. Error fuga veritatis illo tempore nostrum!
        </p>
        <p>
          <strong>YouTube Link:</strong>{" "}
          <a href="https://www.youtube.com/watch?v=example">
            https://www.youtube.com/watch?v=example
          </a>
        </p>
        <p>
          <strong>GitHub Link:</strong>{" "}
          <a href="https://github.com/dummyuser/smart-agriculture">
            https://github.com/dummyuser/smart-agriculture
          </a>
        </p>
        <p>
          <strong>College/University Name:</strong> XYZ University
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
