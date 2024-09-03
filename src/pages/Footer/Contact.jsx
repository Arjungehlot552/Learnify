import React from 'react';
import ScrollToTop from '../../components/Other/ScrollToTop';

const Contact = () => {
  ScrollToTop()
  return (
    <div className="bg-gray-100  h-full py-40 -mb-20 flex items-center justify-center px-5 sm:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto text-center rounded-lg ">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">📬 Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          If you have any grievances or concerns, we’re here to help. Please don’t hesitate to reach out to us:
        </p>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">📧 Email</h3>
            <a href="mailto:support@learnify.com" className="text-blue-500 underline">
              support@learnify.com
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">📍 Address</h3>
            <p className="text-gray-600 mt-1">
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
