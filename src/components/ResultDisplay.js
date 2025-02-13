import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div className="w-full p-6 bg-gray-200 text-center text-xl font-bold rounded-lg shadow-lg">
      {result}
    </div>
  );
};

export default ResultDisplay;
