import React from "react";

const FullWidthVideoBackground: React.FC = () => {
  return (
    <div className="relative w-screen h-[500px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/minors.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <img
        src="/images/gradient.png"
        alt="Gradient Transition"
        className="absolute -bottom-16 left-0 w-full h-auto object-cover z-[99]"
      />

      {/* Image Content */}
      <div className="relative flex justify-center items-center h-full z-[100]">
        <img
          src="/images/wavyTextImage.png"
          alt="Full Screen"
          className="w-[60%] mx-auto object-cover block"
        />
      </div>
    </div>
  );
};

export default FullWidthVideoBackground;