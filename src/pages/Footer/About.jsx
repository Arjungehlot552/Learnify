import React from "react";
import ScrollToTop from "../../components/Other/ScrollToTop";

const About = () => {
  ScrollToTop();

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className=" text-4xl sm:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-blue-400">
          About Us
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600">
          Discover more about Learnify, our mission, vision, and how we aim to
          transform the academic landscape through collaboration and innovation.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-16 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-blue-600 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Learnify, our mission is to create a collaborative platform where
          students and professionals can share, discover, and collaborate on
          projects from various domains and institutions. We believe that by
          providing a central hub for project sharing, we can prevent valuable
          work from being isolated and discarded, and instead, inspire
          innovation and knowledge exchange.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-blue-600 text-center mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Project Upload
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Students can easily upload their academic projects, research
              papers, and creative works.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Advanced Search
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Discover projects based on interests, colleges, and domains with
              our advanced search and filter functionality.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Mentorship
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Connect with experienced professionals who can guide you through
              your projects.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Admin Panel
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Manage projects, users, and ensure the quality of content on the
              platform.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Real-time Notifications
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Stay updated with real-time notifications on the latest activities
              and project updates.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Plagiarism Checking
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ensure academic integrity with built-in plagiarism checking tools
              and link verification mechanisms.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="mb-16 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-blue-600 mb-4">
          Our Vision
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We envision a world where learning is not confined to classrooms and
          where collaboration transcends geographical boundaries. Learnify aims
          to be the bridge that connects students and professionals, fostering a
          community where ideas can flourish and projects can turn into
          innovations that impact the world.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-16 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-blue-600 mb-4">
          Our Team
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The Learnify team is a group of passionate individuals who are
          committed to revolutionizing how students and professionals interact
          and collaborate on projects. With a diverse background in technology,
          education, and design, our team works tirelessly to ensure that
          Learnify remains a cutting-edge platform that serves the needs of our
          community.
        </p>
      </section>

      {/* Join Us */}
      <section className="mb-16 p-8 bg-blue-50 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-4">Join Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Whether you are a student eager to showcase your work, a mentor
          looking to guide the next generation of innovators, or an academic
          institution seeking to enhance visibility and collaboration, Learnify
          welcomes you. Join us in our mission to transform the academic
          landscape and make knowledge sharing accessible to all.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-bold text-lg transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Explore Learnify
        </a>
      </section>

      {/* Get in Touch */}
      <section className="p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-blue-600 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We love hearing from our users! Whether you have a question,
          suggestion, or just want to say hello, feel free to reach out to us at{" "}
          <a
            href="mailto:support@learnify.com"
            className="text-blue-500 underline hover:text-blue-700"
          >
            support@learnify.com
          </a>
          . We’re here to help and always open to feedback.
        </p>
      </section>
    </div>
  );
};

export default About;
