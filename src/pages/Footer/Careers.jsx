import React from "react";
import ScrollToTop from "../../components/Other/ScrollToTop";

const Careers = () => {
  ScrollToTop();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-blue-400">
          Careers
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
          Join our dynamic team and help us revolutionize academic collaboration.
        </p>
      </section>

      {/* Join Our Team */}
      <section className="mb-12 p-6 sm:p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-4">
          Join Our Team!
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          At Learnify, we are always on the lookout for talented and passionate individuals to join our team. We believe in creating an innovative and collaborative work environment where creativity and dedication are valued. If you are enthusiastic about contributing to a platform that empowers students and fosters academic collaboration, we would love to hear from you.
        </p>
      </section>

      {/* Current Openings */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 text-center mb-8">
          Current Openings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-3">
              Software Developer
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              <strong>Responsibilities:</strong> Develop and maintain platform features, collaborate with the development team, and troubleshoot technical issues.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Requirements:</strong> Proficiency in React, Node.js, and MongoDB. Experience with Firebase and Cloudinary is a plus.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-3">
              UI/UX Designer
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              <strong>Responsibilities:</strong> Design intuitive user interfaces, create engaging user experiences, and work with developers to implement designs.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Requirements:</strong> Strong portfolio showcasing UI/UX design skills, proficiency in design tools like Figma or Adobe XD.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-3">
              Content Writer
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              <strong>Responsibilities:</strong> Create engaging and informative content for blogs, websites, and marketing materials.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Requirements:</strong> Excellent writing skills, ability to produce clear and compelling content, and familiarity with SEO best practices.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-3">
              Customer Support Specialist
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              <strong>Responsibilities:</strong> Provide support to users, resolve issues, and ensure a positive user experience.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Requirements:</strong> Strong communication skills, problem-solving abilities, and experience in customer support.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="p-6 sm:p-8 bg-blue-50 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-4">
          How to Apply
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
          If you are interested in any of the above positions, please send your resume and a cover letter to{" "}
          <a
            href="mailto:careers@learnify.com"
            className="text-blue-500 underline hover:text-blue-700"
          >
            careers@learnify.com
          </a>
          . We look forward to exploring opportunities with you!
        </p>
        <a
          href="mailto:careers@learnify.com"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
};

export default Careers;
