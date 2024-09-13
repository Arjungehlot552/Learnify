import React from "react";
import ScrollToTop from "../../components/Other/ScrollToTop";

const Terms = () => {
  ScrollToTop();

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-32">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-red-400 via-pink-500 to-blue-500 text-transparent bg-clip-text mb-12">
        Terms and Conditions
      </h1>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Acceptance of Terms
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          By using Learnify, you agree to these Terms and Conditions, our Privacy Policy, and any other policies or guidelines referenced herein. If you do not agree with these terms, please do not use our platform.
        </p>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Definitions
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-4">
          <li><strong>“Learnify”</strong> refers to the platform operated by Learnify, including its website, services, and any related content or features.</li>
          <li><strong>“User”</strong> refers to any individual or entity accessing or using Learnify, including students, mentors, and administrators.</li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Account Registration
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          To access certain features of Learnify, you may need to register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Use of the Platform
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-4">
          <li><strong>Eligibility:</strong> You must be at least 13 years old to use Learnify. If you are under 18, you should have the consent of a parent or guardian.</li>
          <li><strong>Prohibited Conduct:</strong> You agree not to engage in any of the following prohibited activities:
            <ul className="list-disc ml-6 text-lg text-gray-700 space-y-4">
              <li>Violating any applicable laws or regulations.</li>
              <li>Uploading or sharing content that is illegal, offensive, defamatory, or infringes on any third-party rights.</li>
              <li>Impersonating any person or entity, or misrepresenting your affiliation with any person or entity.</li>
              <li>Distributing malware or other harmful code.</li>
              <li>Attempting to gain unauthorized access to Learnify’s systems or user accounts.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Content Ownership and Use
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-4">
          <li><strong>User Content:</strong> By uploading or submitting content to Learnify, you grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute such content on our platform.</li>
          <li><strong>Intellectual Property:</strong> All intellectual property rights in Learnify and its content are owned by Learnify or its licensors. You may not use any content from Learnify for commercial purposes without our prior written consent.</li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Mentorship and Projects
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-4">
          <li><strong>Mentorship:</strong> Learnify provides a mentorship feature that connects students with mentors. Mentors are not employees or agents of Learnify, and we are not responsible for any interactions or outcomes resulting from these connections.</li>
          <li><strong>Projects:</strong> Users can upload and share projects on Learnify. You are responsible for ensuring that your projects comply with all applicable laws and do not infringe on any third-party rights.</li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Privacy
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our Privacy Policy explains how we collect, use, and protect your personal information. By using Learnify, you consent to the practices described in our Privacy Policy.
        </p>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Disclaimer of Warranties
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Learnify is provided “as is” and “as available.” We make no representations or warranties of any kind, express or implied, regarding the operation or availability of the platform. We disclaim all warranties to the fullest extent permitted by law.
        </p>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Limitation of Liability
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          To the fullest extent permitted by law, Learnify shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the platform. Our total liability to you for any claim arising out of or relating to these Terms and Conditions shall not exceed the amount you paid to us, if any, for accessing the platform.
        </p>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Indemnification
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          You agree to indemnify, defend, and hold harmless Learnify, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, or expenses arising out of or related to your use of Learnify, your content, or your violation of these Terms and Conditions.
        </p>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Modifications
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Learnify reserves the right to modify these Terms and Conditions at any time. We will notify you of any significant changes by posting the updated terms on our platform. Your continued use of Learnify after such changes constitutes your acceptance of the modified terms.
        </p>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Termination
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We may suspend or terminate your access to Learnify at any time, with or without cause, and with or without notice. Upon termination, all rights granted to you under these Terms and Conditions will immediately cease, and you must stop using the platform.
        </p>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Governing Law
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. Any disputes arising from or related to these Terms and Conditions shall be resolved in the courts of [Your Jurisdiction].
        </p>
      </section>

      {/* <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          If you have any questions about these Terms and Conditions, please contact us at{" "}
          <a
            href="mailto:support@learnify.com"
            className="text-blue-600 underline"
          >
            support@learnify.com
          </a>
          .
        </p>
      </section> */}

      <section className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">
          Miscellaneous
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-4">
          <li><strong>Severability:</strong> If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</li>
          <li><strong>Entire Agreement:</strong> These Terms and Conditions constitute the entire agreement between you and Learnify regarding your use of the platform and supersede any prior agreements or understandings.</li>
        </ul>
      </section>
    </div>
  );
};

export default Terms;
