import React from "react";

const FullWidthVideoBackground: React.FC = () => {
  return (
    <div className="relative w-screen h-[700px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/mal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <img
        src="/images/gradient.png"
        alt="Gradient Transition"
        className="absolute bottom-0 md:-bottom-28 left-0 w-full h-auto object-cover z-[99]"
      />

      {/* Image Content */}
      <div className="relative flex justify-center items-center h-full z-[100]">
      <picture>
          <source srcSet="/images/wavyMobile.png" media="(max-width: 768px)" />
          <img
            src="/images/wavyTextImage.png"
            alt="Full Screen"
            className="w-[90%] md:w-[100%] mx-auto object-cover block"
          />
        </picture>
      </div>
    </div>
  );
};

export default FullWidthVideoBackground;