import React from "react";
import "../styles/Loader.css"; // Import CSS file for styling

const Loader = () => {
  return (
    <div className="loader-container flex items-center justify-center min-h-screen bg-white">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
