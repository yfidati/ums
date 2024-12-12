import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {
  const { userId } = useParams(); // will grab the userId value from the url and return that
  const initialState = { name: "", username: "", email: "", phone: "", website: "" };
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    fetchUser(); // will call only once on page load as we passed empty dependency array
  }, []);

  const fetchUser = async () => {
    const response = await axios.get(`http://localhost:5000/users/${userId}`);
    setUser(response.data);
  };

  return (
    <div className="container mx-auto p-6 ">
      <Link to="/" className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
        Back
      </Link>
      <p className="text-4xl font-bold text-center my-6">User Details</p>

      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg  dark:bg-gray-700  border border-gray-500 ">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">User ID</h3>
          <p className="text-xl text-fuchsia-50">{user.id}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Full Name</h3>
          <p className=" text-xl  text-fuchsia-50">{user.name}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Username</h3>
          <p className="text-xl  text-fuchsia-50">{user.username}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Email Address</h3>
          <p className="text-xl  text-fuchsia-50">{user.email}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Phone Number</h3>
          <p className="text-xl  text-fuchsia-50">{user.phone}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">Website</h3>
          <p className="text-xl  text-fuchsia-50">{user.website}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;

