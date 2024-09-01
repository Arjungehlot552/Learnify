import React from 'react';

const UserGuidelines = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Learnify User Guidelines</h1>
      
      <p className="mb-4">
        Welcome to Learnify! Our platform is designed to help students and professionals share, discover, and collaborate on projects across various domains and institutions. To ensure a positive experience for all users, please read and follow these guidelines.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">1. Account Creation and Profile Management</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Accurate Information:</strong> When creating your account, provide accurate and up-to-date information. This includes your name, email address, and role (e.g., mentor or student).</li>
        <li><strong>Profile Picture:</strong> Use a clear and appropriate profile picture. Avoid using offensive or misleading images.</li>
        <li><strong>Mentor/Student Roles:</strong> If you register as a mentor, ensure that your expertise and experience are accurately reflected in your profile.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">2. Project Uploading</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Original Work:</strong> Only upload projects that you have created or have permission to share. Plagiarism is strictly prohibited and can result in account suspension.</li>
        <li><strong>Detailed Descriptions:</strong> Provide clear and detailed descriptions for each project, including objectives, technologies used, and the outcomes. This helps others understand the value of your work.</li>
        <li><strong>Project Files:</strong> Ensure that all files related to your project are properly uploaded and organized. Avoid uploading irrelevant or unnecessary files.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">3. Project Ideas</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Idea Submission:</strong> When submitting project ideas, make sure they are clear, feasible, and relevant to your chosen domain.</li>
        <li><strong>Collaboration:</strong> If your idea is open for collaboration, clearly state how others can contribute and what skills are required.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">4. Mentorship</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Respectful Communication:</strong> As a mentor, provide constructive feedback and support to students. Always communicate respectfully and professionally.</li>
        <li><strong>Availability:</strong> If you have agreed to mentor a project, be responsive and committed to helping the mentee throughout the project lifecycle.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">5. Searching and Filtering</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Effective Search:</strong> Use the search and filter features to find projects and mentors that match your interests and needs. You can filter by domain, college, or other criteria.</li>
        <li><strong>Bookmarks:</strong> Save projects or mentors that you find interesting for future reference.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">6. Commenting and Feedback</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Constructive Criticism:</strong> When commenting on projects or providing feedback, be constructive and helpful. Avoid negative or disparaging remarks.</li>
        <li><strong>Engagement:</strong> Engage with other users’ projects by asking questions, offering suggestions, or sharing insights. Collaboration and knowledge sharing are key to the Learnify community.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">7. Admin Panel (For Admins Only)</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Project Management:</strong> Admins have the ability to view, edit, or delete projects if they violate community guidelines or contain inappropriate content.</li>
        <li><strong>User Management:</strong> Admins can manage user accounts, including resolving disputes, handling reports, and ensuring adherence to guidelines.</li>
        <li><strong>Reporting Issues:</strong> If you encounter any issues or suspect a violation of the guidelines, report it to the admin team immediately.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">8. Community Standards</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Respect and Inclusivity:</strong> Treat all users with respect. Learnify is a diverse community, and we value inclusivity. Discrimination, harassment, or abusive behavior will not be tolerated.</li>
        <li><strong>No Spam:</strong> Avoid posting irrelevant or promotional content. Spam and self-promotion outside of relevant project descriptions or ideas are prohibited.</li>
        <li><strong>Content Appropriateness:</strong> Ensure that all content uploaded to Learnify is appropriate for a professional and educational environment.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">9. Security and Privacy</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Secure Your Account:</strong> Keep your login credentials secure. Do not share your password with others.</li>
        <li><strong>Data Privacy:</strong> Learnify respects your privacy. Ensure that you do not share personal or sensitive information in public project descriptions or comments.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">10. Updates to Guidelines</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Periodic Updates:</strong> These guidelines may be updated periodically to reflect changes in the platform or community standards. Users will be notified of any significant updates.</li>
      </ul>
      
      <p className="mt-6">
        By using Learnify, you agree to abide by these guidelines. Let's work together to create a positive and collaborative environment where learning and innovation thrive.
      </p>
      
      <p className="font-semibold mt-4">
        Thank you for being part of the Learnify community!
      </p>
    </div>
  );
};

export default UserGuidelines;
