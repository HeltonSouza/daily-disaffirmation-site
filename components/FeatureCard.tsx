import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[rgba(255,247,220,1)] p-6 rounded-lg shadow-md transition-colors duration-200">
      <Icon size={34} />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 font-light">{description}</p>
    </div>
  );
};

export default FeatureCard;
