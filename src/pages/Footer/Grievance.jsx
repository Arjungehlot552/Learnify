import React from "react";
import ScrollTotop from "../../components/Other/ScrollToTop";

const Grievance = () => {
  ScrollTotop();

  return (
    <div className="container mx-auto pt-6 px-16">
      <h1 className="w-full flex items-center justify-center text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink to-blue-400 mb-8 font-bold text-8xl">
        Grievance Redressal
      </h1>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          Our Commitment to Resolving Issues
        </h2>
        <p className="text-lg mb-4">
          At Learnify, we are committed to addressing any grievances or concerns you may have regarding our platform. We strive to provide a positive user experience and are dedicated to resolving any issues promptly and fairly.
        </p>
      </section>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          How to File a Complaint
        </h2>
        <ul className="list-disc ml-6 text-lg">
          <li className="mb-2">
            <strong>Submit Your Complaint:</strong> Send an email detailing your issue to <a href="mailto:support@learnify.com" className="text-blue-500 underline">support@learnify.com</a>. Include relevant information such as your account details, a description of the problem, and any supporting documentation.
          </li>
          <li className="mb-2">
            <strong>Acknowledgment:</strong> We will acknowledge receipt of your complaint within [X] business days and provide you with a reference number for tracking.
          </li>
          <li className="mb-2">
            <strong>Investigation:</strong> Our team will review your complaint and investigate the matter. We may reach out to you for additional information if needed.
          </li>
          <li className="mb-2">
            <strong>Resolution:</strong> We will provide you with a resolution or update within [Y] business days. If we need more time, we will inform you of the expected timeline.
          </li>
          <li className="mb-2">
            <strong>Appeal:</strong> If you are not satisfied with the resolution, you can appeal by contacting <a href="mailto:appeals@learnify.com" className="text-blue-500 underline">appeals@learnify.com</a> with additional information or evidence.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Grievance;
