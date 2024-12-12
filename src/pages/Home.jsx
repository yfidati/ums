import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllUsersWithAwait();
  }, []);

  const getAllUsersWithAwait = async () => {
    try {
      const result = await axios.get('http://localhost:5000/users');
      setUsers(result.data.reverse());
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      getAllUsersWithAwait();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold py-3">User Management System</h2>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full text-sm text-left text-gray-500 border">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-3">#</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Phone</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.id}
                    className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.phone}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <Link
                        to={`/Users/view/${user.id}`}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        View
                      </Link>
                      <Link
                        to={`/Users/edit/${user.id}`}
                        className="border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
