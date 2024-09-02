import React from "react";
import ScrollTotop from "../../components/Other/ScrollToTop";

const About = () => {
  ScrollTotop();

  return (
    <div className="container mx-auto p-6 px-16">
      <h1 className="w-full flex items-center justify-center text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink to-blue-400 mb-8 font-bold text-8xl">
        About Us
      </h1>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500 ">
          Our Mission
        </h2>
        <p className="text-lg mb-4">
          At Learnify, our mission is to create a collaborative platform where
          students and professionals can share, discover, and collaborate on
          projects from various domains and institutions. We believe that by
          providing a central hub for project sharing, we can prevent valuable
          work from being isolated and discarded, and instead, inspire
          innovation and knowledge exchange. Learnify was conceived with a
          singular vision: to create a centralized hub where students from
          diverse colleges and universities can upload, share, and explore
          projects, ideas, and academic achievements. We are committed to
          preventing student projects from being isolated and underutilized by
          providing a platform that encourages knowledge sharing and
          collaboration. Our mission is to empower students by giving their work
          the visibility it deserves and fostering a community where ideas can
          thrive and inspire.
        </p>
      </section>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500 ">
          What We Offer
        </h2>
        <ul className="list-disc ml-6 text-lg">
          <li className="mb-2">
            A platform to upload and showcase projects from various domains and
            institutions.
          </li>
          <li className="mb-2">
            Search and filter functionality to discover projects based on
            interests, colleges, and domains.
          </li>
          <li className="mb-2">
            Mentorship opportunities where experienced professionals guide
            students through their projects.
          </li>
          <li className="mb-2">
            An admin panel for managing projects, users, and ensuring the
            quality of content on the platform.
          </li>
          <li className="mb-2">
            Real-time notifications to keep users updated on the latest
            activities.
          </li>
        </ul>
      </section>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500 ">
          Our Vision
        </h2>
        <p className="text-lg mb-4">
          We envision a world where learning is not confined to classrooms and
          where collaboration transcends geographical boundaries. Learnify aims
          to be the bridge that connects students and professionals, fostering a
          community where ideas can flourish and projects can turn into
          innovations that impact the world.
        </p>
      </section>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500 ">
          Our Team
        </h2>
        <p className="text-lg mb-4">
          The Learnify team is a group of passionate individuals who are
          committed to revolutionizing how students and professionals interact
          and collaborate on projects. With a diverse background in technology,
          education, and design, our team works tirelessly to ensure that
          Learnify remains a cutting-edge platform that serves the needs of our
          community.
        </p>
      </section>
      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500 ">
          Join Us
        </h2>
        <p className="text-lg mb-4">
          Whether you are a student eager to showcase your work, a mentor
          looking to guide the next generation of innovators, or an academic
          institution seeking to enhance visibility and collaboration, Learnify
          welcomes you. Join us in our mission to transform the academic
          landscape and make knowledge sharing accessible to all. Explore
          Learnify today and become part of a vibrant community dedicated to
          learning, innovation, and collaboration.
        </p>
      </section>

      <section className="rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500 ">
          Get in Touch
        </h2>
        <p className="text-lg mb-4 ">
          We love hearing from our users! Whether you have a question,
          suggestion, or just want to say hello, feel free to reach out to us at{" "}
          <a
            href="mailto:support@learnify.com"
            className="text-blue-500 underline"
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
