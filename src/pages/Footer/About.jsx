import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At Learnify, our mission is to create a collaborative platform where students and professionals can share, discover, and collaborate on projects from various domains and institutions. We believe that by providing a central hub for project sharing, we can prevent valuable work from being isolated and discarded, and instead, inspire innovation and knowledge exchange.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc ml-6 text-lg">
          <li className="mb-2">A platform to upload and showcase projects from various domains and institutions.</li>
          <li className="mb-2">Search and filter functionality to discover projects based on interests, colleges, and domains.</li>
          <li className="mb-2">Mentorship opportunities where experienced professionals guide students through their projects.</li>
          <li className="mb-2">An admin panel for managing projects, users, and ensuring the quality of content on the platform.</li>
          <li className="mb-2">Real-time notifications to keep users updated on the latest activities.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg mb-4">
          We envision a world where learning is not confined to classrooms and where collaboration transcends geographical boundaries. Learnify aims to be the bridge that connects students and professionals, fostering a community where ideas can flourish and projects can turn into innovations that impact the world.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg mb-4">
          The Learnify team is a group of passionate individuals who are committed to revolutionizing how students and professionals interact and collaborate on projects. With a diverse background in technology, education, and design, our team works tirelessly to ensure that Learnify remains a cutting-edge platform that serves the needs of our community.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-4">
          We love hearing from our users! Whether you have a question, suggestion, or just want to say hello, feel free to reach out to us at <a href="mailto:support@learnify.com" className="text-blue-500 underline">support@learnify.com</a>. We’re here to help and always open to feedback.
        </p>
      </section>
    </div>
  );
};

export default About;
