import React from "react";
import ScrollToTop from "../../components/Other/ScrollToTop";

const Careers = () => {
  ScrollToTop();

  return (
    <div className="container mx-auto p-6 px-16">
      <h1 className="w-full flex items-center justify-center text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink to-blue-400 mb-8 font-bold text-8xl">
        Careers
      </h1>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          Join Our Team!
        </h2>
        <p className="text-lg mb-4">
          At Learnify, we are always on the lookout for talented and passionate individuals to join our team. We believe in creating an innovative and collaborative work environment where creativity and dedication are valued. If you are enthusiastic about contributing to a platform that empowers students and fosters academic collaboration, we would love to hear from you.
        </p>
      </section>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          Current Openings
        </h2>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Software Developer</h3>
          <p className="text-lg mb-2"><strong>Responsibilities:</strong> Develop and maintain platform features, collaborate with the development team, and troubleshoot technical issues.</p>
          <p className="text-lg"><strong>Requirements:</strong> Proficiency in React, Node.js, and MongoDB. Experience with Firebase and Cloudinary is a plus.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">UI/UX Designer</h3>
          <p className="text-lg mb-2"><strong>Responsibilities:</strong> Design intuitive user interfaces, create engaging user experiences, and work with developers to implement designs.</p>
          <p className="text-lg"><strong>Requirements:</strong> Strong portfolio showcasing UI/UX design skills, proficiency in design tools like Figma or Adobe XD.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Content Writer</h3>
          <p className="text-lg mb-2"><strong>Responsibilities:</strong> Create engaging and informative content for blogs, website, and marketing materials.</p>
          <p className="text-lg"><strong>Requirements:</strong> Excellent writing skills, ability to produce clear and compelling content, and familiarity with SEO best practices.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Customer Support Specialist</h3>
          <p className="text-lg mb-2"><strong>Responsibilities:</strong> Provide support to users, resolve issues, and ensure a positive user experience.</p>
          <p className="text-lg"><strong>Requirements:</strong> Strong communication skills, problem-solving abilities, and experience in customer support.</p>
        </div>
      </section>

      <section className="rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          How to Apply
        </h2>
        <p className="text-lg mb-4">
          If you are interested in any of the above positions, please send your resume and a cover letter to{" "}
          <a href="mailto:careers@learnify.com" className="text-blue-500 underline">careers@learnify.com</a>. We look forward to exploring opportunities with you!
        </p>
      </section>
    </div>
  );
};

export default Careers;
