import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-full mx-auto animate-fade-in">
      <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
      <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
      <p className="text-gray-700 mb-6">Your appointment has been successfully submitted.</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        OK
      </button>
    </div>
  );
};

export default ThankYou;
