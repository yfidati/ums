import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const navigate = useNavigate();
  const initialState = { name: '', username: '', email: '', phone: '', website: '' };
  const [user, setUser] = useState(initialState);

  const { name, username, email, phone, website } = user;

  const onChangeInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (!user.username || !user.email || !user.phone || !user.name) {
      alert('All fields are required.');
      return;
    }
    await axios.post('http://localhost:5000/users', user);
    navigate('/');
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="max-w-sm mx-auto p-5  dark:bg-gray-700   border-gray-500 borde rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold text-white mb-5 text-center">Add User</h2>

      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onChangeInput}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onChangeInput}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your username"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChangeInput}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={onChangeInput}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="website" className="block mb-2 text-sm font-medium text-white">
          Website
        </label>
        <input
          type="text"
          id="website"
          name="website"
          value={website}
          onChange={onChangeInput}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your website"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUser;
