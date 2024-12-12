import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold py-3 ">Contact Page</h2>
      <form className="space-y-6  p-5 border dark:bg-gray-700   border-gray-500 rounded-lg shadow-lg ">
        <div className="mb-6">
          <label htmlFor="email" className=" text-xl font-medium text-white">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full h-10 border-2 border-gray-300  text-gray-900  text-l rounded-lg shadow-lg focus:border-gray-800 focus:ringgray-800"
             placeholder="       Enter your email Adress"
            aria-describedby="emailHelp"
          />
          <p id="emailHelp" className="text-xl text-white mt-1">
            We'll never share your email with anyone else.
          </p>
        </div>

        <div className="mb-6">
          <label htmlFor="name" className="block text-xl font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
             placeholder="       Enter your Full name "
            className="mt-1 block w-full border-2 h-10 border-gray-300 rounded-lg shadow-lg  text-gray-900 focus:border-blue-600 focus:ring-blue-600"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="query" className="block text-xl font-medium text-white">
            Your Query
          </label>
          <textarea
            id="query"
            rows="4"
            className="mt-1 block w-full border-2 border-gray-300  text-gray-900 rounded-lg shadow-lg focus:border-blue-600 focus:ring-blue-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
