import React from "react";

const FullWidthImage: React.FC = () => {
  return (
    <div className="w-screen">
      <img
        src="/images/wavyText.png" // Replace with the actual image path
        alt="Full Screen"
        className="w-full object-cover block"
      />
    </div>
  );
};

export default FullWidthImage;
