import React from 'react';
import ScrollToTop from '../../components/Other/ScrollToTop';

const UserGuidelines = () => {
  ScrollToTop();
  
  return (
    <div className="container mx-auto p-6 sm:px-12 lg:px-16">
      <p className="w-full text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-blue-400 mb-12 font-bold text-4xl sm:text-5xl lg:text-6xl">
        Learnify User Guidelines
      </p>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2 text-blue-500">
          Account Creation and Profile Management
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li className="mb-2">
            <strong>Accurate Information:</strong> When creating your account, provide accurate and up-to-date information. This includes your name, email address, and role (e.g., mentor or student).
          </li>
          <li className="mb-2">
            <strong>Profile Picture:</strong> Use a clear and appropriate profile picture. Avoid using offensive or misleading images.
          </li>
          <li className="mb-2">
            <strong>Mentor/Student Roles:</strong> If you register as a mentor, ensure that your expertise and experience are accurately reflected in your profile.
          </li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2 text-blue-500">
          Project Uploading
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li className="mb-2">
            <strong>Original Work:</strong> Only upload projects that you have created or have permission to share. Plagiarism is strictly prohibited and can result in account suspension.
          </li>
          <li className="mb-2">
            <strong>Detailed Descriptions:</strong> Provide clear and detailed descriptions for each project, including objectives, technologies used, and the outcomes. This helps others understand the value of your work.
          </li>
          <li className="mb-2">
            <strong>Project Files:</strong> Ensure that all files related to your project are properly uploaded and organized. Avoid uploading irrelevant or unnecessary files.
          </li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2 text-blue-500">
          Project Ideas
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li className="mb-2">
            <strong>Idea Submission:</strong> When submitting project ideas, make sure they are clear, feasible, and relevant to your chosen domain.
          </li>
          <li className="mb-2">
            <strong>Collaboration:</strong> If your idea is open for collaboration, clearly state how others can contribute and what skills are required.
          </li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2 text-blue-500">
          Mentorship
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li className="mb-2">
            <strong>Respectful Communication:</strong> As a mentor, provide constructive feedback and support to students. Always communicate respectfully and professionally.
          </li>
          <li className="mb-2">
            <strong>Availability:</strong> If you have agreed to mentor a project, be responsive and committed to helping the mentee throughout the project lifecycle.
          </li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2 text-blue-500">
          Searching and Filtering
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li className="mb-2">
            <strong>Effective Search:</strong> Use the search and filter features to find projects and mentors that match your interests and needs. You can filter by domain, college, or other criteria.
          </li>
          <li className="mb-2">
            <strong>Bookmarks:</strong> Save projects or mentors that you find interesting for future reference.
          </li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2 text-blue-500">
          Commenting and Feedback
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li className="mb-2">
            <strong>Constructive Criticism:</strong> When commenting on projects or providing feedback, be constructive and helpful. Avoid negative or disparaging remarks.
          </li>
          <li className="mb-2">
            <strong>Engagement:</strong> Engage with other users’ projects by asking questions, offering suggestions, or sharing insights. Collaboration and knowledge sharing are key to the Learnify community.
          </li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2 text-blue-500">
          Admin Panel (For Admins Only)
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li className="mb-2">
            <strong>Project Management:</strong> Admins have the ability to view, edit, or delete projects if they violate community guidelines or contain inappropriate content.
          </li>
          <li className="mb-2">
            <strong>User Management:</strong> Admins can manage user accounts, including resolving disputes, handling reports, and ensuring adherence to guidelines.
          </li>
          <li className="mb-2">
            <strong>Reporting Issues:</strong> If you encounter any issues or suspect a violation of the guidelines, report it to the admin team immediately.
          </li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2 text-blue-500">
          Community Standards
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li className="mb-2">
            <strong>Respect and Inclusivity:</strong> Treat all users with respect. Learnify is a diverse community, and we value inclusivity. Discrimination, harassment, or abusive behavior will not be tolerated.
          </li>
          <li className="mb-2">
            <strong>No Spam:</strong> Avoid posting irrelevant or promotional content. Spam and self-promotion outside of relevant project descriptions or ideas are prohibited.
          </li>
          <li className="mb-2">
            <strong>Content Appropriateness:</strong> Ensure that all content uploaded to Learnify is appropriate for a professional and educational environment.
          </li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2 text-blue-500">
          Security and Privacy
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li className="mb-2">
            <strong>Secure Your Account:</strong> Keep your login credentials secure. Do not share your password with others.
          </li>
          <li className="mb-2">
            <strong>Data Privacy:</strong> Learnify respects your privacy. Ensure that you do not share personal or sensitive information in public project descriptions or comments.
          </li>
        </ul>
      </section>

      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2 text-blue-500">
          Updates to Guidelines
        </h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li className="mb-2">
            <strong>Periodic Updates:</strong> These guidelines may be updated periodically to reflect changes in the platform or community standards. Users will be notified of any significant updates.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default UserGuidelines;
