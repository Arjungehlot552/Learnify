import React from "react";
import ScrollToTop from "../../components/Other/ScrollToTop";

const Grievance = () => {
  ScrollToTop();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-32">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-red-400 via-pink-500 to-blue-500 text-transparent bg-clip-text mb-12">
        Grievance Redressal
      </h1>

      <section className="mb-12 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Our Commitment to Resolving Issues
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Learnify, we are committed to addressing any grievances or concerns
          you may have regarding our platform. We strive to provide a positive
          user experience and are dedicated to resolving any issues promptly and
          fairly.
        </p>
      </section>

      <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          How to File a Complaint
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-4">
          <li>
            <strong className="text-blue-600">Submit Your Complaint:</strong>{" "}
            Send an email detailing your issue to{" "}
            <a
              href="mailto:support@learnify.com"
              className="text-blue-500 underline hover:text-blue-600"
            >
              support@learnify.com
            </a>
            . Include relevant information such as your account details, a
            description of the problem, and any supporting documentation.
          </li>
          <li>
            <strong className="text-blue-600">Acknowledgment:</strong> We will
            acknowledge receipt of your complaint within 4 business days and
            provide you with a reference number for tracking.
          </li>
          <li>
            <strong className="text-blue-600">Investigation:</strong> Our team
            will review your complaint and investigate the matter. We may reach
            out to you for additional information if needed.
          </li>
          <li>
            <strong className="text-blue-600">Resolution:</strong> We will
            provide you with a resolution or update within [Y] business days. If
            we need more time, we will inform you of the expected timeline.
          </li>
          <li>
            <strong className="text-blue-600">Appeal:</strong> If you are not
            satisfied with the resolution, you can appeal by contacting{" "}
            <a
              href="mailto:appeals@learnify.com"
              className="text-blue-500 underline hover:text-blue-600"
            >
              appeals@learnify.com
            </a>{" "}
            with additional information or evidence.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Grievance;
