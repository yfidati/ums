import React from 'react';
import './NotFound.css';


const NotFound = () => {

  return (

    <div className="">

<div className=" flex flex-col items-center justify-center h-screen bg text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404 NOT FOUND</h1>
      <a 
        href="/" 
        className="text-xl text-blue-600 hover:text-blue-800 underline"
      >
        Go to Home
      </a>
    </div>
    </div>

   
  );
};

export default NotFound;
