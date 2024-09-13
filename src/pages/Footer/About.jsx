import React from "react";
import ScrollToTop from "../../components/Other/ScrollToTop";

const About = () => {
  ScrollToTop();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-blue-400">
          About Us
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
          Discover Learnify’s mission, vision, and how we aim to transform the academic landscape through collaboration and innovation.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-12 p-6 sm:p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
          Our Mission
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Our mission at Learnify is to create a collaborative platform where students and professionals can share, discover, and collaborate on projects. We aim to prevent valuable work from being isolated and discarded, and instead inspire innovation and knowledge exchange.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 text-center mb-8">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-3">Project Upload</h3>
            <p className="text-base text-gray-700">
              Easily upload academic projects, research papers, and creative works.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-3">Advanced Search</h3>
            <p className="text-base text-gray-700">
              Discover projects based on interests, colleges, and domains with our advanced search and filter functionality.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-3">Mentorship</h3>
            <p className="text-base text-gray-700">
              Connect with experienced professionals who can guide you through your projects.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-3">Admin Panel</h3>
            <p className="text-base text-gray-700">
              Manage projects, users, and ensure the quality of content on the platform.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-3">Real-time Notifications</h3>
            <p className="text-base text-gray-700">
              Stay updated with real-time notifications on the latest activities and project updates.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-3">Plagiarism Checking</h3>
            <p className="text-base text-gray-700">
              Ensure academic integrity with built-in plagiarism checking tools and link verification mechanisms.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="mb-12 p-6 sm:p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
          Our Vision
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          We envision a world where learning extends beyond classrooms and collaboration transcends geographical boundaries. Learnify aims to be the bridge that connects students and professionals, fostering a community where ideas flourish and projects become innovations that impact the world.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-12 p-6 sm:p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
          Our Team
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          The Learnify team consists of passionate individuals committed to revolutionizing student-professional interactions. With diverse expertise in technology, education, and design, our team works tirelessly to keep Learnify a cutting-edge platform serving our community's needs.
        </p>
      </section>

      {/* Join Us */}
      <section className="mb-12 p-6 sm:p-8 bg-blue-50 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">Join Us</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Whether you're a student eager to showcase your work, a mentor looking to guide the next generation, or an academic institution seeking to enhance visibility, Learnify welcomes you. Join us in transforming the academic landscape and making knowledge sharing accessible to all.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Explore Learnify
        </a>
      </section>

      {/* Get in Touch */}
      <section className="p-6 sm:p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
          Get in Touch
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          We love hearing from our users! Whether you have a question, suggestion, or just want to say hello, reach out to us at{" "}
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
