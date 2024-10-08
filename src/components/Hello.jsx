// src/components/Hello.jsx
import React from 'react';

const Hello = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <h1 className="text-xl font-medium text-black">Hello, Tailwind CSS!</h1>
          <p className="text-gray-500">This is your first component using Tailwind.</p>
        </div>
      </div>
    </div>
  );
};

export default Hello;

