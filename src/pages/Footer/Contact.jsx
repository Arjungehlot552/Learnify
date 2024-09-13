import React from 'react';
import ScrollToTop from '../../components/Other/ScrollToTop';

const Contact = () => {
  ScrollToTop();

  return (
    <div className="bg-gray-100 min-h-screen py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-5">📬 Contact Us</h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          If you have any grievances or concerns, we’re here to help. Please don’t hesitate to reach out to us:
        </p>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">📧 Email</h3>
            <a href="mailto:support@learnify.com" className="text-blue-500 underline hover:text-blue-600">
              support@learnify.com
            </a>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">📍 Address</h3>
            <p className="text-gray-600">
              Bhopal, M.P.
            </p>
          </div>
        </div>
        <p className="text-gray-500 mt-8">
          We highly value your feedback and are committed to resolving any issues promptly to enhance your experience with our services.
        </p>
      </div>
    </div>
  );
};

export default Contact;
