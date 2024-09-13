import React from "react";
import ScrollToTop from "../../components/Other/ScrollToTop";

const Privacy = () => {
  ScrollToTop();

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-40 lg:px-40">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-red-400 via-pink-500 to-blue-500 text-transparent bg-clip-text mb-12">
        Privacy Policy
      </h1>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Introduction
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Learnify, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
        </p>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Information We Collect
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-4">
          <li><strong>Personal Information:</strong> When you register for an account, we collect personal information such as your name, email address, and other relevant details.</li>
          <li><strong>Usage Data:</strong> We collect information about your interactions with Learnify, including IP address, browser type, and pages visited.</li>
          <li><strong>Content Data:</strong> Information related to projects, ideas, and other content you upload or interact with on our platform.</li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-4">
          <li><strong>To Provide and Improve Our Services:</strong> We use your data to deliver and enhance the functionality of Learnify.</li>
          <li><strong>To Communicate with You:</strong> We may send you updates, newsletters, and promotional materials related to Learnify.</li>
          <li><strong>To Ensure Security:</strong> We use your data to protect against unauthorized access and ensure the security of our platform.</li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          How We Share Your Information
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-4">
          <li><strong>With Your Consent:</strong> We may share your information with third parties if you have given explicit consent.</li>
          <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law or to protect our rights and interests.</li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Data Security
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>
      </section>

      <section className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Your Rights
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          You have the right to access, correct, or delete your personal information. You can contact us at{" "}
          <a href="mailto:privacy@learnify.com" className="text-blue-500 underline hover:text-blue-600">
            privacy@learnify.com
          </a> to exercise these rights.
        </p>
      </section>

      <section className="p-6 mt-10 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Changes to This Policy
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of significant changes.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
