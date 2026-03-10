import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Contact Us</h2>
        <form className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-600" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-600" />
          </div>
          <div className="mb-4">
            <textarea rows="4" placeholder="Message" className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-600"></textarea>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
