import React from "react";
import ScrollToTop from "../../components/Other/ScrollToTop";

const Privacy = () => {
  ScrollToTop();

  return (
    <div className="container mx-auto p-6 px-16">
      <h1 className="w-full flex items-center justify-center text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink to-blue-400 mb-8 font-bold text-8xl">
        Privacy Policy
      </h1>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          Introduction
        </h2>
        <p className="text-lg mb-4">
          At Learnify, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
        </p>
      </section>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          Information We Collect
        </h2>
        <ul className="list-disc ml-6 text-lg">
          <li className="mb-2"><strong>Personal Information:</strong> When you register for an account, we collect personal information such as your name, email address, and other relevant details.</li>
          <li className="mb-2"><strong>Usage Data:</strong> We collect information about your interactions with Learnify, including IP address, browser type, and pages visited.</li>
          <li className="mb-2"><strong>Content Data:</strong> Information related to projects, ideas, and other content you upload or interact with on our platform.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 text-lg">
          <li className="mb-2"><strong>To Provide and Improve Our Services:</strong> We use your data to deliver and enhance the functionality of Learnify.</li>
          <li className="mb-2"><strong>To Communicate with You:</strong> We may send you updates, newsletters, and promotional materials related to Learnify.</li>
          <li className="mb-2"><strong>To Ensure Security:</strong> We use your data to protect against unauthorized access and ensure the security of our platform.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          How We Share Your Information
        </h2>
        <ul className="list-disc ml-6 text-lg">
          <li className="mb-2"><strong>With Your Consent:</strong> We may share your information with third parties if you have given explicit consent.</li>
          <li className="mb-2"><strong>For Legal Reasons:</strong> We may disclose your information if required by law or to protect our rights and interests.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          Data Security
        </h2>
        <p className="text-lg mb-4">
          We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-10 rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          Your Rights
        </h2>
        <p className="text-lg mb-4">
          You have the right to access, correct, or delete your personal information. You can contact us at{" "}
          <a href="mailto:privacy@learnify.com" className="text-blue-500 underline">privacy@learnify.com</a> to exercise these rights.
        </p>
      </section>

      <section className="rounded-lg shadow-md shadow-red-400 h-fi p-4">
        <h2 className="text-3xl font-bold mb-4 outline outline-blue-400 w-fit p-2 rounded text-blue-500">
          Changes to This Policy
        </h2>
        <p className="text-lg mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of significant changes.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
